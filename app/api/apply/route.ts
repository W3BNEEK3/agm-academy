import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { insertPendingRegistration } from "@/lib/db";
import { initializeTransaction } from "@/lib/paystack";
import { courses } from "@/lib/courses";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    fullName,
    email,
    phone,
    gender,
    country,
    stateCity,
    employmentStatus,
    educationLevel,
    course,
    format,
    priorExperience,
    jobPlacementInterest,
    agreedToTerms,
  } = body as Record<string, unknown>;

  const requiredStrings = {
    fullName,
    email,
    phone,
    gender,
    country,
    stateCity,
    employmentStatus,
    educationLevel,
    course,
    format,
    priorExperience,
    jobPlacementInterest,
  };

  for (const value of Object.values(requiredStrings)) {
    if (typeof value !== "string" || !value.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
  }
  const fields = requiredStrings as Record<keyof typeof requiredStrings, string>;

  if (agreedToTerms !== true) {
    return NextResponse.json(
      { error: "You must agree to the terms and conditions." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(fields.email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (fields.format !== "Physical" && fields.format !== "Online") {
    return NextResponse.json({ error: "Invalid format." }, { status: 400 });
  }

  // Look up the price server-side. Never trust a client-submitted amount.
  const matchedCourse = courses.find((c) => c.title === fields.course.trim());
  if (!matchedCourse) {
    return NextResponse.json({ error: "Invalid course." }, { status: 400 });
  }
  const amount =
    fields.format === "Physical"
      ? matchedCourse.physical.price
      : matchedCourse.online.price;

  const data = {
    fullName: fields.fullName.trim(),
    email: fields.email.trim(),
    phone: fields.phone.trim(),
    gender: fields.gender.trim(),
    country: fields.country.trim(),
    stateCity: fields.stateCity.trim(),
    employmentStatus: fields.employmentStatus.trim(),
    educationLevel: fields.educationLevel.trim(),
    course: fields.course.trim(),
    format: fields.format,
    priorExperience: fields.priorExperience.trim(),
    jobPlacementInterest: fields.jobPlacementInterest.trim(),
    agreedToTerms: true,
    amount,
  };

  const reference = `AGM-${Date.now()}-${randomBytes(4).toString("hex")}`;

  try {
    insertPendingRegistration({ ...data, paystackReference: reference });

    const origin = new URL(request.url).origin;
    const transaction = await initializeTransaction({
      email: data.email,
      amountNaira: amount,
      reference,
      callbackUrl: `${origin}/apply/callback`,
      metadata: {
        fullName: data.fullName,
        course: data.course,
        format: data.format,
      },
    });

    return NextResponse.json(
      { authorizationUrl: transaction.data?.authorization_url },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to start application/payment:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

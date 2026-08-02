import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PaymentStatusCard } from "@/components/PaymentStatusCard";
import {
  getRegistrationByReference,
  markRegistrationPaid,
  markRegistrationFailed,
} from "@/lib/db";
import { verifyTransaction } from "@/lib/paystack";
import { appendRegistrationToCsv } from "@/lib/csv";

export const metadata: Metadata = {
  title: "Application Status | AGM Academy",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

const GENERIC_FAILURE = {
  title: "We couldn't confirm this payment.",
  message:
    "Something went wrong verifying your payment. If you were charged, please contact us with your reference so we can sort it out.",
};

export default async function ApplyCallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>;
}) {
  const { reference } = await searchParams;

  let result: { title: string; message: string; variant: "success" | "failed" } =
    { variant: "failed", ...GENERIC_FAILURE };

  if (reference) {
    const registration = getRegistrationByReference(reference);

    if (!registration) {
      result = { variant: "failed", ...GENERIC_FAILURE };
    } else if (registration.payment_status === "paid") {
      result = {
        variant: "success",
        title: "Application received.",
        message: `Thanks for applying to AGM Academy, ${registration.full_name.split(" ")[0]}. We'll reach out by phone or email to walk you through next steps.`,
      };
    } else {
      try {
        const verification = await verifyTransaction(reference);

        if (verification.data?.status === "success") {
          markRegistrationPaid(reference);
          appendRegistrationToCsv({
            id: registration.id,
            fullName: registration.full_name,
            email: registration.email,
            phone: registration.phone,
            gender: registration.gender ?? "",
            country: registration.country ?? "",
            stateCity: registration.state_city ?? "",
            employmentStatus: registration.employment_status ?? "",
            educationLevel: registration.education_level ?? "",
            course: registration.course,
            format: registration.format,
            priorExperience: registration.prior_experience ?? "",
            jobPlacementInterest: registration.job_placement_interest ?? "",
            agreedToTerms: registration.agreed_to_terms,
            amount: registration.amount ?? 0,
            paymentStatus: "paid",
            paystackReference: reference,
            createdAt: registration.created_at,
          });

          result = {
            variant: "success",
            title: "Application received.",
            message: `Thanks for applying to AGM Academy, ${registration.full_name.split(" ")[0]}. Your payment of ${formatNaira(registration.amount ?? 0)} was successful. We'll reach out by phone or email to walk you through next steps.`,
          };
        } else {
          markRegistrationFailed(reference);
          result = {
            variant: "failed",
            title: "Payment not completed.",
            message:
              "Your payment didn't go through, so your application wasn't submitted. No charge was made. Please try again.",
          };
        }
      } catch (error) {
        console.error("Failed to verify Paystack transaction:", error);
        result = { variant: "failed", ...GENERIC_FAILURE };
      }
    }
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden px-6 py-16 sm:px-8">
        <Image
          src="/images/bg-img2.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/85" />
        <PaymentStatusCard
          variant={result.variant}
          title={result.title}
          message={result.message}
        />
      </main>
      <Footer />
    </div>
  );
}

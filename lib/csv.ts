import path from "node:path";
import fs from "node:fs";

const DATA_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(DATA_DIR, "registrations.csv");

const HEADER = [
  "id",
  "full_name",
  "email",
  "phone",
  "gender",
  "country",
  "state_city",
  "employment_status",
  "education_level",
  "course",
  "format",
  "prior_experience",
  "job_placement_interest",
  "agreed_to_terms",
  "amount",
  "payment_status",
  "paystack_reference",
  "created_at",
];

function escapeCsvField(value: string | number) {
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, HEADER.join(",") + "\n", "utf8");
} else {
  // Keep the header in sync if it predates a column change (e.g. the Paystack fields).
  const contents = fs.readFileSync(CSV_PATH, "utf8");
  const [firstLine, ...rest] = contents.split(/\r?\n/);
  if (firstLine !== HEADER.join(",")) {
    fs.writeFileSync(CSV_PATH, [HEADER.join(","), ...rest].join("\n"), "utf8");
  }
}

export function appendRegistrationToCsv(row: {
  id: number | bigint;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  stateCity: string;
  employmentStatus: string;
  educationLevel: string;
  course: string;
  format: string;
  priorExperience: string;
  jobPlacementInterest: string;
  agreedToTerms: number;
  amount: number;
  paymentStatus: string;
  paystackReference: string;
  createdAt: string;
}) {
  const line =
    [
      row.id,
      row.fullName,
      row.email,
      row.phone,
      row.gender,
      row.country,
      row.stateCity,
      row.employmentStatus,
      row.educationLevel,
      row.course,
      row.format,
      row.priorExperience,
      row.jobPlacementInterest,
      row.agreedToTerms,
      row.amount,
      row.paymentStatus,
      row.paystackReference,
      row.createdAt,
    ]
      .map(escapeCsvField)
      .join(",") + "\n";
  fs.appendFileSync(CSV_PATH, line, "utf8");
}

export function getCsvPath() {
  return CSV_PATH;
}

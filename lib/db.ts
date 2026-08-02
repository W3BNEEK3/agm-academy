import path from "node:path";
import fs from "node:fs";
import Database from "better-sqlite3";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "registrations.db");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const globalForDb = globalThis as unknown as { db?: Database.Database };

export const db = globalForDb.db ?? new Database(DB_PATH);
if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    format TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

// Lightweight migration: add payment columns if this DB predates them.
const existingColumns = new Set(
  (db.prepare(`PRAGMA table_info(registrations)`).all() as { name: string }[]).map(
    (c) => c.name
  )
);
if (!existingColumns.has("amount")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN amount INTEGER`);
}
if (!existingColumns.has("payment_status")) {
  db.exec(
    `ALTER TABLE registrations ADD COLUMN payment_status TEXT NOT NULL DEFAULT 'pending'`
  );
}
if (!existingColumns.has("paystack_reference")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN paystack_reference TEXT`);
}
if (!existingColumns.has("gender")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN gender TEXT`);
}
if (!existingColumns.has("country")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN country TEXT`);
}
if (!existingColumns.has("state_city")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN state_city TEXT`);
}
if (!existingColumns.has("employment_status")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN employment_status TEXT`);
}
if (!existingColumns.has("education_level")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN education_level TEXT`);
}
if (!existingColumns.has("prior_experience")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN prior_experience TEXT`);
}
if (!existingColumns.has("job_placement_interest")) {
  db.exec(`ALTER TABLE registrations ADD COLUMN job_placement_interest TEXT`);
}
if (!existingColumns.has("agreed_to_terms")) {
  db.exec(
    `ALTER TABLE registrations ADD COLUMN agreed_to_terms INTEGER NOT NULL DEFAULT 0`
  );
}

export type PaymentStatus = "pending" | "paid" | "failed";

export type Registration = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  gender: string | null;
  country: string | null;
  state_city: string | null;
  employment_status: string | null;
  education_level: string | null;
  course: string;
  format: string;
  prior_experience: string | null;
  job_placement_interest: string | null;
  agreed_to_terms: number;
  amount: number | null;
  payment_status: PaymentStatus;
  paystack_reference: string | null;
  created_at: string;
};

export function insertPendingRegistration(data: {
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
  agreedToTerms: boolean;
  amount: number;
  paystackReference: string;
}) {
  const stmt = db.prepare(
    `INSERT INTO registrations (
       full_name, email, phone, gender, country, state_city,
       employment_status, education_level, course, format,
       prior_experience, job_placement_interest, agreed_to_terms,
       amount, payment_status, paystack_reference
     )
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)`
  );
  const result = stmt.run(
    data.fullName,
    data.email,
    data.phone,
    data.gender,
    data.country,
    data.stateCity,
    data.employmentStatus,
    data.educationLevel,
    data.course,
    data.format,
    data.priorExperience,
    data.jobPlacementInterest,
    data.agreedToTerms ? 1 : 0,
    data.amount,
    data.paystackReference
  );
  return result.lastInsertRowid;
}

export function markRegistrationPaid(paystackReference: string) {
  db.prepare(
    `UPDATE registrations SET payment_status = 'paid' WHERE paystack_reference = ?`
  ).run(paystackReference);
}

export function markRegistrationFailed(paystackReference: string) {
  db.prepare(
    `UPDATE registrations SET payment_status = 'failed' WHERE paystack_reference = ?`
  ).run(paystackReference);
}

export function getRegistrationByReference(
  paystackReference: string
): Registration | undefined {
  return db
    .prepare(`SELECT * FROM registrations WHERE paystack_reference = ?`)
    .get(paystackReference) as Registration | undefined;
}

export function getAllRegistrations(): Registration[] {
  return db
    .prepare(`SELECT * FROM registrations ORDER BY id DESC`)
    .all() as Registration[];
}

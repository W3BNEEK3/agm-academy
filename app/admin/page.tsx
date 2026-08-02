import type { Metadata } from "next";
import { Download } from "lucide-react";
import { getAllRegistrations } from "@/lib/db";

export const metadata: Metadata = {
  title: "Admin | Registrations",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Date(value.replace(" ", "T") + "Z").toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatNaira(amount: number | null) {
  return amount === null ? "N/A" : `₦${amount.toLocaleString("en-NG")}`;
}

const PAYMENT_BADGE: Record<string, string> = {
  paid: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  failed: "bg-red-100 text-red-700",
};

export default function AdminPage() {
  const registrations = getAllRegistrations();

  return (
    <div className="min-h-screen bg-slate-mist px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink sm:text-3xl">
              Registrations
            </h1>
            <p className="mt-1 text-sm text-ink/60">
              {registrations.length}{" "}
              {registrations.length === 1 ? "application" : "applications"}{" "}
              received.
            </p>
          </div>
          <a
            href="/admin/export"
            className="inline-flex items-center gap-2 rounded-md bg-royal-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 active:scale-[0.97]"
          >
            <Download size={16} />
            Download CSV
          </a>
        </div>

        <div className="mt-8 overflow-x-auto rounded-md bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10 text-xs font-semibold uppercase tracking-[0.04em] text-ink/50">
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Gender</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Course</th>
                <th className="px-5 py-4">Format</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Payment</th>
                <th className="px-5 py-4">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-5 py-10 text-center text-ink/50">
                    No applications yet.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg.id} className="border-b border-ink/5 last:border-0">
                    <td className="px-5 py-4 font-medium text-ink">
                      {reg.full_name}
                    </td>
                    <td className="px-5 py-4 text-ink/70">{reg.email}</td>
                    <td className="px-5 py-4 text-ink/70">{reg.phone}</td>
                    <td className="px-5 py-4 text-ink/70">{reg.gender ?? "N/A"}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink/70">
                      {reg.state_city && reg.country
                        ? `${reg.state_city}, ${reg.country}`
                        : reg.country ?? "N/A"}
                    </td>
                    <td className="px-5 py-4 text-ink/70">{reg.course}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${
                          reg.format === "Physical"
                            ? "bg-signal-yellow/20 text-ink"
                            : "bg-royal-blue/10 text-royal-blue"
                        }`}
                      >
                        {reg.format}
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink/70">
                      {formatNaira(reg.amount)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium capitalize ${
                          PAYMENT_BADGE[reg.payment_status] ??
                          "bg-ink/10 text-ink/60"
                        }`}
                      >
                        {reg.payment_status}
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink/50">
                      {formatDate(reg.created_at)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

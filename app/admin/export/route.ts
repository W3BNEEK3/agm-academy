import fs from "node:fs";
import { getCsvPath } from "@/lib/csv";

export async function GET() {
  const csvPath = getCsvPath();
  const contents = fs.existsSync(csvPath)
    ? fs.readFileSync(csvPath, "utf-8")
    : "id,full_name,email,phone,course,format,created_at\n";

  return new Response(contents, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="registrations-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}

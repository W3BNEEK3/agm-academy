import type { Metadata } from "next";
import { clashDisplay, generalSans } from "./fonts";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGM Academy",
  description:
    "AGM Academy teaches tech and digital skills to complete beginners, online and in person, no experience required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-0 flex flex-col overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

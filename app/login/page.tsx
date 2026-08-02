import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login | AGM Academy",
  description: "Log in to your AGM Academy student account.",
};

export default function LoginPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <Navbar />
      <main className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden px-6 py-16 sm:px-8">
        <Image
          src="/images/bg-img3.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/85" />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

import { HomeIntroMount } from "@/components/HomeIntroMount";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Courses } from "@/components/Courses";
import { Scholarship } from "@/components/Scholarship";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <HomeIntroMount />
      <Navbar />
      <main className="min-w-0 flex-1">
        <Hero />
        <WhyUs />
        <Courses />
        <Scholarship />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

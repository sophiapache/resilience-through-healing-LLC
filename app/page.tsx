// app/page.tsx
import Link from "next/link";

// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.98_0.03_80)] text-[oklch(0.30_0.05_100)] font-serif">
      <Header />
      <Hero />
      <IntroSection />
    </main>
  );
}

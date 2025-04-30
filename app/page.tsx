// app/page.tsx
import Link from "next/link";

// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.98_0.03_80)] text-[oklch(0.30_0.05_100)] font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-[oklch(0.25_0.06_70)]">
          yogaflow.
        </div>
        <nav className="space-x-6 text-sm font-medium text-[oklch(0.30_0.05_60)]">
          <Link href="/">Home</Link>
          <Link href="/aboutMe">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link
            href="/contact"
            className="px-4 py-2 border rounded-full border-[oklch(0.70_0.05_60)]"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[oklch(0.25_0.06_50)] leading-tight">
            Experience A Healthier, Happier Life Through Yoga
          </h1>
          <p className="text-base mb-6 text-[oklch(0.35_0.04_80)]">
            Embrace yoga’s transformative power to live a better, more balanced
            existence. Our yoga studio offers a wide range of classes to fit all
            skill levels, from beginners to advanced practitioners.
          </p>
          <button className="bg-[oklch(0.55_0.12_120)] text-white px-5 py-3 rounded-full text-sm hover:bg-[oklch(0.45_0.10_120)] transition-colors">
            Start 7 Day Free Trial
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
            <Image
              src="/yoga.jpg" // Place your image in public/yoga.jpg or change path
              alt="Yoga pose"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Tagline */}
      <div className="text-center mt-8 mb-12">
        <h2 className="text-xl font-medium text-[oklch(0.30_0.05_70)]">
          Flourish Healthily Through Yoga Discipline
        </h2>
      </div>
    </main>
  );
}

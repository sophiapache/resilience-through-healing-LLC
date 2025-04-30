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
          Resilience Through Healing.
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[oklch(0.30_0.05_60)]">
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
            Welcome to My Therapy Practice
          </h1>
          <p className="text-base mb-6 text-[oklch(0.35_0.04_80)]">
            Many people come to me feeling stuck, overwhelmed, or questioning,
            &quot;What&#39;s wrong with me?&quot; The weight of these
            emotions—shame, unworthiness, and isolation—can make it difficult to
            move forward. If this resonates with you, I want you to know:
            healing and empowerment are possible.
          </p>
          <button className="bg-[oklch(0.55_0.12_120)] text-white px-5 py-3 rounded-full text-sm hover:bg-[oklch(0.45_0.10_120)] transition-colors">
            Your Transformation Starts Here
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
            <Image
              src="/Claudia.jpeg" // Place your image in public/yoga.jpg or change path
              alt="Yoga pose"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f1] py-20 px-4 text-center">
        <p className="text-base text-[oklch(0.45_0.05_50)] font-medium mb-4">
          Team
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif text-[oklch(0.25_0.06_70)] font-semibold leading-tight mb-6">
          A Holistic Path to Wholeness
        </h2>
        <p className="max-w-3xl mx-auto text-base text-[oklch(0.4_0.03_60)]">
          Therapy isn’t about fixing what’s “wrong” or trying to return to a
          past version of yourself. It’s about unpacking your experiences,
          breaking free from old patterns, and stepping into the person you were
          always meant to be. Your past doesn’t define your future. Instead, it
          can serve as a guide to help you overcome fears and emotional
          blockages in both your mind and body. I’m here to help you:
          <ul className="space-y-10 mt-16 mb-16">
            <li className="flex items-center gap-3">
              {/* Bullet Icon */}
              <span className="inline-block">
                <svg
                  className="w-5 h-5 text-[oklch(0.45_0.05_50)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7L8 5z"
                  />
                </svg>
              </span>
              {/* Bullet Label */}
              <span className="font-semibold text-[oklch(0.25_0.06_70)]">
                Build a deeper connection with yourself and others
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="inline-block">
                <svg
                  className="w-5 h-5 text-[oklch(0.45_0.05_50)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7L8 5z"
                  />
                </svg>
              </span>
              <span className="font-semibold text-[oklch(0.25_0.06_70)]">
                Reclaim your self-worth and agency
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block">
                <svg
                  className="w-5 h-5 text-[oklch(0.45_0.05_50)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7L8 5z"
                  />
                </svg>
              </span>
              <span className="font-semibold text-[oklch(0.25_0.06_70)]">
                Move beyond limiting narratives
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block">
                <svg
                  className="w-5 h-5 text-[oklch(0.45_0.05_50)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7L8 5z"
                  />
                </svg>
              </span>
              <span className="font-semibold text-[oklch(0.25_0.06_70)]">
                Find clarity, hope, and self-compassion
              </span>
            </li>
          </ul>
          Through a holistic approach, I integrate mind, body, and spirit in the
          healing process. Talk therapy alone isn’t always enough, especially
          when past trauma overwhelms the nervous system. That’s why I
          incorporate body-based techniques to help regulate emotions and
          restore balance. Your transformation starts here. Let’s work together
          to create the life you want to live.
        </p>
      </section>
    </main>
  );
}

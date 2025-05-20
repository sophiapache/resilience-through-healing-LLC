import Header from "../components/Header";
import Hero from "../components/Hero";
import BulletPoints from "../components/BulletPoints";

export default function Home() {
  const bulletItems = [
    "Build a deeper connection with yourself and others",
    "Reclaim your self-worth and agency",
    "Move beyond limiting narratives",
    "Find clarity, hope, and self-compassion",
  ];
  return (
    <main
      className="min-h-screen bg-[oklch(0.98_0.03_80)] text-[oklch(0.30_0.05_100)] font-display
"
    >
      <Header />
      <Hero />
      <section className="bg-[#f8f5f1] py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-display text-[oklch(0.25_0.06_70)] font-semibold leading-tight mb-6">
          A Holistic Path to Wholeness
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-base text-[oklch(0.4_0.03_60)]">
          Therapy isn’t about fixing what’s “wrong” or trying to return to a
          past version of yourself. It’s about unpacking your experiences,
          breaking free from old patterns, and stepping into the person you were
          always meant to be. Your past doesn’t define your future. Instead, it
          can serve as a guide to help you overcome fears and emotional
          blockages in both your mind and body. I’m here to help you:
        </p>
        <span className="flex justify-center">
          <BulletPoints items={bulletItems} />
        </span>
        <p className="text-lg max-w-3xl mx-auto text-base text-[oklch(0.4_0.03_60)]">
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

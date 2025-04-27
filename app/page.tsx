// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.94_0.04_70)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-[oklch(0.40_0.13_145)] mb-6">
        Welcome to the Earthy Vibes 🌿
      </h1>
      <p className="text-lg text-[oklch(0.65_0.04_80)] max-w-xl mb-8">
        Explore the beauty of natural tones and thoughtful design. Rooted in
        simplicity, growing with intention.
      </p>
      <button className="px-6 py-3 rounded-lg text-white bg-[oklch(0.55_0.15_145)] hover:bg-[oklch(0.40_0.13_145)] transition-colors ease-in-out">
        Get Started
      </button>
    </main>
  );
}

import Link from "next/link";

const Header = () => {
  return (
    <main>
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
    </main>
  );
};

export default Header;

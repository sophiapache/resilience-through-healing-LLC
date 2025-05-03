const IntroSection = () => {
  return (
    <section className="bg-[#f8f5f1] py-20 px-4 text-center">
      <p className="text-base text-[oklch(0.45_0.05_50)] font-medium mb-4">
        Team
      </p>
      <h2 className="text-xl sm:text-5xl font-serif text-[oklch(0.25_0.06_70)] font-semibold leading-tight mb-6">
        A Holistic Path to Wholeness
      </h2>
      <p className="max-w-3xl mx-auto text-base text-[oklch(0.4_0.03_60)]">
        Therapy isn’t about fixing what’s “wrong” or trying to return to a past
        version of yourself. It’s about unpacking your experiences, breaking
        free from old patterns, and stepping into the person you were always
        meant to be. Your past doesn’t define your future. Instead, it can serve
        as a guide to help you overcome fears and emotional blockages in both
        your mind and body. I’m here to help you:
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
        healing process. Talk therapy alone isn’t always enough, especially when
        past trauma overwhelms the nervous system. That’s why I incorporate
        body-based techniques to help regulate emotions and restore balance.
        Your transformation starts here. Let’s work together to create the life
        you want to live.
      </p>
    </section>
  );
};

export default IntroSection;

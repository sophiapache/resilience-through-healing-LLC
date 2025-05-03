const BulletPoints = () => {
  return (
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
  );
};

export default BulletPoints;

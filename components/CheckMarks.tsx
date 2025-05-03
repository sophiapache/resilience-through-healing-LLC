type CheckMarksProps = {
  items: string[];
};

const CheckMarks = ({ items }: CheckMarksProps) => {
  return (
    <ul className="space-y-8 mt-10 mb-10">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-5">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className="font-semibold text-[oklch(0.25_0.06_70)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CheckMarks;

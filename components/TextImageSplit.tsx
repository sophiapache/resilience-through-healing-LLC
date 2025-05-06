"use client";
import Image from "next/image";

const TextImageSplit = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-[oklch(0.25_0.06_70)] mb-4">
            Rooted in Compassion
          </h2>
          <p className="text-lg text-[oklch(0.30_0.05_60)] mb-6">
            I believe healing begins with connection — to self, to body, and to
            a space of gentle witnessing.
          </p>
          <p className="text-[oklch(0.30_0.05_50)]">
            Through mindful support, we co-create a path that honors your story
            while allowing space for transformation.
          </p>
        </div>

        {/* Image + SVG Shadow */}
        <div className="relative flex justify-center items-center">
          {/* SVG background shape */}
          <svg
            className="absolute w-64 h-64 -top-6 -left-6 text-[oklch(0.90_0.02_70)] opacity-50"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.8,-63.5C56.8,-52.5,63.4,-37.3,66.1,-22.3C68.9,-7.3,67.8,7.6,62.3,20.6C56.8,33.7,46.9,44.8,34.9,52.8C22.9,60.7,8.8,65.5,-5.4,69.2C-19.5,72.9,-33.9,75.6,-45.6,69.5C-57.3,63.4,-66.4,48.6,-69.1,33.5C-71.9,18.3,-68.2,2.9,-61.6,-10.8C-55,-24.5,-45.4,-36.5,-34.4,-48C-23.5,-59.4,-11.7,-70.3,2.2,-73.5C16.1,-76.6,32.2,-72.5,44.8,-63.5Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Circular image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[oklch(0.85_0.02_80)] shadow-lg">
            <Image
              src="/ClaudiaHeadshot.jpeg"
              alt="Portrait or symbolic image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSplit;

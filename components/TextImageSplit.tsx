"use client";
import Image from "next/image";

const TextImageSplit = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative">
          {/* Circular image with SVG swirl */}
          <div className="relative w-44 h-44 md:w-60 md:h-60 float-right ml-8 mb-4 rounded-full overflow-hidden border-4 border-[oklch(0.85_0.02_80)] shadow-lg">
            <svg
              className="absolute -top-4 -left-4 w-full h-full text-[oklch(0.90_0.02_70)] opacity-40 z-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M44.8,-63.5C56.8,-52.5,63.4,-37.3,66.1,-22.3C68.9,-7.3,67.8,7.6,62.3,20.6C56.8,33.7,46.9,44.8,34.9,52.8C22.9,60.7,8.8,65.5,-5.4,69.2C-19.5,72.9,-33.9,75.6,-45.6,69.5C-57.3,63.4,-66.4,48.6,-69.1,33.5C-71.9,18.3,-68.2,2.9,-61.6,-10.8C-55,-24.5,-45.4,-36.5,-34.4,-48C-23.5,-59.4,-11.7,-70.3,2.2,-73.5C16.1,-76.6,32.2,-72.5,44.8,-63.5Z"
                transform="translate(100 100)"
              />
            </svg>

            <Image
              src="/ClaudiaHeadshot.jpeg"
              alt="Decorative portrait"
              fill
              className="object-cover z-10"
              priority
            />
          </div>

          {/* Wide flowing text */}
          <div>
            <h2 className="text-4xl font-bold text-[oklch(0.25_0.06_70)] mb-4">
              Rooted in Compassion
            </h2>
            <span className="text-lg text-[oklch(0.30_0.05_60)] mb-4 leading-relaxed">
              <p className="mb-4">
                When asked to write my story, I wasn’t sure I could come up with
                anything “exciting” enough.{" "}
                <span className="font-bold">
                  But I realized that our unique stories are enough—just as we
                  are.
                </span>{" "}
              </p>
              <p className="mb-4">
                For much of my life, I questioned whether I was{" "}
                <span className="italic">enough</span>. I strived for
                more—perfection, success, validation—only to realize that no
                amount of degrees or accomplishments could provide a lasting
                sense of self-worth.
              </p>{" "}
              <p className="mb-4">
                From a young age, I wanted to help others feel good in their
                skin—perhaps because I didn’t. At seven years old, I dreamed of
                being a hairdresser.{" "}
                <span className="font-bold">
                  Back then, anything seemed possible.
                </span>
              </p>
              <p className="mb-4">
                {" "}
                Over time, my path changed. I studied psychology, then detoured
                into aviation, earning my{" "}
                <span className="font-bold">
                  commercial pilot’s license
                </span>{" "}
                and teaching others to fly. I got married and raised two
                incredible daughters—
                <span className="font-bold">my greatest accomplishment</span>
                —who are intelligent, kind, and care deeply about the world.
              </p>{" "}
              <p className="mb-4">
                As my children grew, I returned to school at 50 to pursue my
                <span className="font-bold">
                  master’s in mental health counseling.
                </span>{" "}
                Going back to school alongside younger students wasn’t in my
                plans, but I told myself:{" "}
                <span className="italic">
                  The second half of life can be just as meaningful as the
                  first.
                </span>{" "}
                I became a therapist, meeting{" "}
                <span className="font-bold">incredible, resilient people</span>{" "}
                along the way.{" "}
              </p>
              <p className="mb-4">
                As a{" "}
                <span className="font-bold">
                  clinical director at a trauma facility
                </span>
                , I witnessed people at their lowest and highest moments. I
                walked with them through their healing journeys. Saying{" "}
                <span className="font-bold">I love what I do </span> is an
                understatement.
              </p>{" "}
              <p className="mb-4">
                A painful divorce pushed me to see life differently. Growth
                rarely comes without pain. Instead of chasing success, I now
                focus on{" "}
                <span className="font-bold">cherishing moments and people</span>
                . I embrace imperfection, knowing that{" "}
                <span className="italic">I was enough all along.</span>{" "}
              </p>
              <p className="mb-4">
                At 60, I’m still evolving.{" "}
                <span className="font-bold">
                  True beauty comes from within.
                </span>
              </p>
            </span>
            <p className="text-[oklch(0.30_0.05_50)] leading-relaxed text-xl italic">
              “People will forget what you said or did, but they will never
              forget how you made them feel.” – Maya Angelou
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSplit;

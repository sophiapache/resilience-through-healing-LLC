import Image from "next/image";

const Hero = () => {
  return (
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
          move forward. If this resonates with you, I want you to know: healing
          and empowerment are possible.
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
  );
};

export default Hero;

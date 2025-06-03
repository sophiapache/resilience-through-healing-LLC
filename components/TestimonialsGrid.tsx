import Image from "next/image";

export interface Testimonial {
  name?: string; // Optional
  text: string;
  image?: string; // Optional
}

interface TestimonialsGridProps {
  title?: string;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  title = "What People Are Saying",
  testimonials,
  className = "",
}) => {
  return (
    <section
      className={`bg-gradient-to-b from-[#f0e6d5] to-[#e8dcc8] px-6 py-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">{title}</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              {testimonial.image && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name || "User image"}
                    width={130}
                    height={130}
                    className="rounded-full object-cover"
                  />
                </div>
              )}

              <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>
              {testimonial.name && (
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;

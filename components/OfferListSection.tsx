import Image from "next/image";

type OfferItem = {
  title: string;
  descriptionBefore?: string;
  checkList?: React.ReactNode;
  descriptionAfter?: string;
};

type OfferListSectionProps = {
  imageSrc: string;
  title: string;
  items: OfferItem[];
};

const OfferListSection = ({
  imageSrc,
  title,
  items,
}: OfferListSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-[#f0e6d5] to-[#e8dcc8] px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={imageSrc}
            alt="Service image"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold text-[oklch(0.25_0.06_70)] mb-8">
            {title}
          </h2>

          <ul className="space-y-6">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-start bg-white shadow-sm rounded-lg p-4"
              >
                <div>
                  <h3 className="font-bold text-[oklch(0.25_0.06_70)]">
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.30_0.05_60)] text-sm mt-1">
                    {item.descriptionBefore}
                  </p>
                  <p className="text-[oklch(0.30_0.05_60)] text-sm mt-1">
                    {item.checkList}
                  </p>
                  <p className="text-[oklch(0.30_0.05_60)] text-sm mt-1">
                    {item.descriptionAfter}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OfferListSection;

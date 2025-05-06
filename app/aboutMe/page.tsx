import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BulletPoints from "../../components/BulletPoints";
import CheckMarks from "../../components/CheckMarks";
import TextImageSplit from "../../components/TextImageSplit";

function AboutMe() {
  const bulletItems = [
    "Trauma recovery (all forms)",
    "Sex addiction",
    "Body image and eating disorders",
  ];
  const checkBoxOneItems = [
    "Certified Eating Disorder Specialist (CEDS) – International Association of Eating Disorder Professionals",
    "Certified Sex Addiction Therapist (CSAT) – International Institute for Trauma andAddiction Professionals",
  ];
  const checkBoxTwoItems = [
    "Addictive and maladaptive behaviors",
    "Codependency and relationship challenges",
    "Anxiety and depression",
  ];
  const checkBoxThreeItems = [
    "EMDR (Eye Movement Desensitization and Reprocessing)",
    "Accelerated Resolution Therapy (ART)",
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavioral Therapy (DBT)",
    "Somatic and experiential therapies",
  ];
  return (
    <main>
      <Header />
      <Hero />
      <section className="bg-[oklch(0.97_0.02_70)] py-7 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-[oklch(0.25_0.06_70)] mb-3">
            Claudia Y. Pache, LMHC, MBA, CSAT, CEDS, RYT200, ART trained
          </h1>
          <p className="text-lg text-[oklch(0.30_0.05_50)] max-w-2xl mx-auto">
            I am a licensed Mental Health Counselor and Certified Clinical
            Trauma Therapist, specializing in:
            <BulletPoints items={bulletItems} />
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0.01_85)] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[oklch(0.25_0.06_70)] mb-2">
            My Specialties
          </h2>
          <p className="text-[oklch(0.30_0.05_50)] mb-12 max-w-2xl mx-auto text-lg">
            My approach goes beyond traditional talk therapy, integrating
            mind-body techniques like Trauma-Sensitive Yoga. I focus on
            empowerment and individualized care to meet each client where they
            are in their journey. There’s no one-size-fits-all therapy. Instead,
            we co-create a path that supports your unique needs and goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[oklch(0.25_0.06_70)] mb-2">
                I hold certifications as a:
              </h3>
              <p className="text-[oklch(0.30_0.05_50)]">
                <CheckMarks items={checkBoxOneItems} />
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[oklch(0.25_0.06_70)] mb-2">
                Beyond my specialties, I also work with:
              </h3>
              <p className="text-[oklch(0.30_0.05_50)]">
                <CheckMarks items={checkBoxTwoItems} />
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-xl p-8 shadow-md max-w-xl w-full">
              <h3 className="text-xl font-bold text-[oklch(0.25_0.06_70)] mb-2 text-center">
                I have extensive experience in world-class trauma treatment
                facilities and hold advanced training in multiple therapeutic
                modalities, including:
              </h3>
              <p className="text-[oklch(0.30_0.05_50)] text-center">
                <CheckMarks items={checkBoxThreeItems} />
              </p>
            </div>
          </div>
        </div>
        <section className="py-7 px-6 max-w-5xl mx-auto">
          <TextImageSplit />
        </section>
      </section>
    </main>
  );
}

export default AboutMe;

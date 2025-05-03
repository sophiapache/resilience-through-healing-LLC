import Header from "../../components/Header";
import Hero from "../../components/Hero";

function AboutMe() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="bg-[oklch(0.97_0.02_70)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[oklch(0.25_0.06_70)] mb-4">
            Claudia Y. Pache, LMHC, MBA, CSAT, CEDS, RYT200, ART trained
          </h1>
          <p className="text-lg text-[oklch(0.30_0.05_50)] max-w-2xl mx-auto">
            Hi, I'm [Your Name], a dedicated practitioner focused on healing and
            resilience. With years of experience in holistic wellness, my goal
            is to support your journey inward through mindfulness, movement, and
            compassionate guidance.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0.01_85)] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[oklch(0.25_0.06_70)] mb-2">
            My Approach
          </h2>
          <p className="text-[oklch(0.30_0.05_50)] mb-12 max-w-2xl mx-auto">
            I integrate various practices including yoga, breathwork, and
            somatic healing to support your personal growth. Whether you're
            seeking peace, recovery, or clarity, we'll work together to
            reconnect with your inner strength.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[oklch(0.25_0.06_70)] mb-2">
                Trauma-Informed
              </h3>
              <p className="text-[oklch(0.30_0.05_50)]">
                Sessions are held with deep care and awareness of trauma
                responses. Your nervous system's safety is central to the work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[oklch(0.25_0.06_70)] mb-2">
                Personalized Sessions
              </h3>
              <p className="text-[oklch(0.30_0.05_50)]">
                Every session is tailored to your body, needs, and current
                season of life—blending structure with intuition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;

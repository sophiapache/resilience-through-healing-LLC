import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <main className="bg-gradient-to-b from-[#f0e6d5] to-[#e8dcc8] space-y-3">
      <Header />
      <ContactForm
        title="Questions and Contact"
        descriptionBefore="I know taking the first step can feel overwhelming, but you don’t have to do this alone.
Whether you’re looking for therapy, coaching, or a space to explore deeper healing, I’m here to
help."
        descriptionAfter={
          <>
            <span className="block font-semibold text-gray-700 mb-1">
              Q: Who do I work with?
            </span>
            <span className="block text-gray-600 mb-4">
              A: Adults 18 and older.
            </span>

            <span className="block font-semibold text-gray-700 mb-1">
              Q: Where am I licensed to provide mental health counseling?
            </span>
            <span className="block text-gray-600 mb-4">
              A: I am licensed in the state of Florida and can provide coaching
              services anywhere in the United States.
            </span>

            <span className="block font-semibold text-gray-700 mb-1">
              Q: How long are sessions?
            </span>
            <span className="block text-gray-600">
              A: Sessions are 60 minutes. They can be in person (in Ocala, FL)
              or via telehealth.
            </span>

            <span className="block font-semibold text-gray-700 mb-1">
              Q: How much do sessions cost?
            </span>
            <span className="block text-gray-600">
              A: Sessions cost $200 per one hour session and $300 per two hour
              session. Call for pricing on Intensives. Sliding scale may be
              available. Contact to discuss.
            </span>
          </>
        }
        name="Claudia Pache"
        email="claudia.pache@gmail.com"
        phone="352-657-0276"
      />
    </main>
  );
}

export default Contact;

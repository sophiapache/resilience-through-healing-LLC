import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <main className="bg-[oklch(0.98_0.02_85)] space-y-3">
      <Header />
      <ContactForm
        title="Questions and Contact"
        descriptionBefore="description"
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
        name="name"
        email="email"
      />
    </main>
  );
}

export default Contact;

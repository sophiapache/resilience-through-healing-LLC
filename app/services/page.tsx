import OfferListSection from "../../components/OfferListSection";
import Header from "../../components/Header";
import CheckMarks from "../../components/CheckMarks";

function Services() {
  const checkMarkOneItems = [
    "Break free from old patterns",
    "Process past wounds and limitign beliefs",
    "Accelerate your healing journey",
    "Align with your personal values",
    "Foster emotional and physical well-being",
  ];
  const checkMarkTwoItems = [
    "50-60 min virtual or in-person sessions",
    "Address current and past issues",
    "Build emotional resilience and self-awareness",
    "Available for individuals and couples",
  ];
  return (
    <main>
      <Header />
      <OfferListSection
        imageSrc="/blob.png"
        title="What I Offer"
        items={[
          {
            title: "Immersive Therapy Workshops (2 Days)",
            descriptionBefore: "These deep-dive workshops allow you to:",
            checkList: <CheckMarks items={checkMarkOneItems} />,
            descriptionAfter:
              "Through specialized exercises and assignments, these workshops help you unblock defenses, gain clarity, and find inner peace.",
          },
          {
            title: "Individual Therapy and Coachings",
            checkList: <CheckMarks items={checkMarkTwoItems} />,
            descriptionAfter:
              "Each session is designed to support, guide, and empower you in your healing journey.",
          },
        ]}
      />
    </main>
  );
}

export default Services;

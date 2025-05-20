import Header from "../../components/Header";
import TestimonialsGrid from "../../components/TestimonialsGrid";

function Testimonials() {
  const testimonials = [
    {
      name: "",
      text: "I owe my utmost gratitude to Claudia. She has been an unwavering source of support in my healing journey, guiding me through and beyond the trauma and depression that once consumed me. From our very first session, she created a space of deep safety and trust, allowing me to open up about my darkest moments without fear of judgment.",
      image: "/TestimonialOne.png", // Make sure this image exists in your /public/images/ folder
    },
    {
      name: "",
      text: "Claudia is different. Any therapist can teach coping skills, but what she offers goes far beyond that. She truly sees you- even when you feel invisible. She doesn’t just help you manage your emotional pain; she helps you transform it. She embraced my strengths, creativity and resilience, even when I couldn’t. When I felt hopeless, she held onto hope for me until I was ready to feel it again. Her sessions are the perfect balance of professional and personal-grounding, nurturing and challenging me to grow in ways I never imagined.",
      image: "/TestimonialTwo.png",
    },
    {
      name: "Hannah D",
      text: "I was lost in depression and overwhelmed by my past, but today, I stand in a place I never thought possible. I am now off all medication, living independently, rediscovering joy, and building a life I am proud of. If you are searching for a therapist who will not only support you but truly believe in you and walk with you through the darkest times, Claudia is that person.",
      image: "/TestimonialThree.png",
    },
    {
      name: "",
      text: "I’ve had the privilege of working with Claudia for five years, and my life has truly transformed because of her support. Claudia has a unique ability to be both compassionate and firm, creating a safe, welcoming space in every session-whether in person or online.",
      image: "",
    },
    {
      name: "",
      text: "I was lost in depression and overwhelmed by my past, but today, I stand in a place I never thought possible. I am now off all medication, living independently, rediscovering joy, and building a life I am proud of. If you are searching for a therapist who will not only support you but truly believe in you and walk with you through the darkest times, Claudia is that person.",
      image: "",
    },
    {
      name: "",
      text: "What sets Claudia apart is her unwavering dedication to personal growth. She’s always learning and her open-mindedness make me feel truly supported every step of the way. I genuinely believe she’s as invested in my healing as I am.",
      image: "",
    },
    {
      name: "RB",
      text: "If you are considering working with Claudia, trust me- you’ll be making the best decision for your own growth and well-being.",
      image: "",
    },
  ];

  return (
    <main>
      <Header />
      <TestimonialsGrid title="Testimonials" testimonials={testimonials} />
    </main>
  );
}

export default Testimonials;

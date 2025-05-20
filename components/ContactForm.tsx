// ContactForm.tsx
import React from "react";

interface ContactFormProps {
  title: string;
  descriptionBefore?: string;
  descriptionAfter?: React.ReactNode;
  name: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  descriptionBefore,
  descriptionAfter,
  name,
  email,
  phone,
}) => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Left section with form */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-light">
          <span className="italic font-semibold">{title}</span>
        </h2>
        <p>{descriptionBefore}</p>

        {/* Display fields (styled like inputs) */}
        <div className="space-y-4">
          <div className="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-800">
            {name}
          </div>
          <div className="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-800">
            {email}
          </div>
          <div className="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-800">
            {phone}
          </div>
        </div>
        <p>{descriptionAfter}</p>
      </div>

      {/* Right section with image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/ContactClaudia.png"
          alt="Woman posing"
          className="rounded-full w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default ContactForm;

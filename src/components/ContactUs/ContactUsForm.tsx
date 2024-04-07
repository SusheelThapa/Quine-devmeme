import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    agreeToPrivacyPolicy: false,
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-800 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full   bg-gray-700 border-none rounded-md focus:border-teal-500 focus:border-2 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 w-full  bg-gray-700 border-none  rounded-md focus:border-teal-500 focus:border-2 focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreeToPrivacyPolicy"
              name="agreeToPrivacyPolicy"
              checked={formData.agreeToPrivacyPolicy}
              onChange={handleChange}
              className="mr-2 accent-teal-500"
              required
            />
            <span className="text-lg text-white">
              I agree to the Privacy Policy
            </span>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2 accent-teal-500"
              required
            />
            <span className="text-lg text-white">
              I agree to the Terms and Conditions
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-xl font-bold bg-teal-500 text-white py-2 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:border-teal-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

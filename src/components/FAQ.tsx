import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Is Sperow AI suitable for small clinics?",
    answer:
      "Yes. Sperow AI is designed for both independent doctors and growing clinics looking to digitize their clinical workflows and improve operational efficiency.",
  },
  {
    question: "What features does Sperow AI provide?",
    answer:
      "Sperow AI includes digital patient records, clinical documentation support, OP workflow management, digital prescriptions, consultation workflow optimization, and AI-powered assistance.",
  },
  {
    question: "Is patient data secure in Sperow AI?",
    answer:
      "Sperow AI is designed with secure digital record management and controlled access systems to help protect patient information.",
  },
  {
    question:
      "Can Sperow AI be used by multiple doctors in a clinic?",
    answer:
      "Yes. Clinics with multiple doctors can use Sperow AI to manage patient workflows, consultation records, and clinical operations efficiently.",
  },
  {
    question:
      "Can prescriptions be shared digitally with patients?",
    answer:
      "Yes. Sperow AI supports digital prescription management, allowing doctors to generate and share prescriptions digitally with patients for improved convenience and accessibility.",
  },
  {
    question:
      "Does Sperow AI help reduce clinical documentation time?",
    answer:
      "Yes. AI-powered workflow assistance helps reduce repetitive documentation tasks, allowing doctors to focus more on patient care and consultations.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know
            about Sperow AI.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqData.map(
            (item, index) => {
              const isActive =
                activeIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "shadow-xl shadow-blue-100"
                      : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg md:text-xl font-semibold text-slate-900">
                      {item.question}
                    </span>

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl transition-transform duration-300 ${
                        isActive
                          ? "rotate-45"
                          : ""
                      }`}
                    >
                      +
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-600 leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
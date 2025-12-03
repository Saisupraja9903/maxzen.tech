import React from "react";
import { Globe, BarChart2, Handshake } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Team Consultation",
    desc: "Collaborate with key stakeholders to align ideas, solve challenges, and drive project success.",
    icon: <Globe size={48} strokeWidth={1.5} className="text-red-500" />,
  },
  {
    id: "02",
    title: "Create a Plan",
    desc: "Strategically outline goals, timelines, and resources to ensure smooth project execution.",
    icon: <BarChart2 size={48} strokeWidth={1.5} className="text-red-500" />,
  },
  {
    id: "03",
    title: "Successful Outcomes",
    desc: "Deliver results that meet objectives, exceed expectations, and drive lasting impact.",
    icon: <Handshake size={48} strokeWidth={1.5} className="text-red-500" />,
  },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-white text-center">
      <p className="text-red-500 tracking-widest uppercase text-lg font-semibold mb-2">
        An Effective Business Journey
      </p>
      <h2 className="text-4xl font-bold  text-gray-900 mb-12">Our Process</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center group"
          >
            {/* Circle with number and icon */}
            <div className="relative flex flex-col items-center justify-center w-40 h-40 bg-red-50 rounded-full shadow-sm transition-transform duration-500 group-hover:-translate-y-3">
              {/* Top Red Number Circle */}
              <div className="absolute -top-4 w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full font-semibold text-lg shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mt-4">{step.icon}</div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;

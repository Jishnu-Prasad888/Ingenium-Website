// src/pages/ArchivePage.tsx
import { useState } from "react";
import { archive } from "../data/archive";
import type { ArchiveData } from "../data/archive";
import { ChevronDown, ChevronUp } from "lucide-react";
import { images } from "../utils/images";
const ArchivePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-gray-800 mb-10 text-center">
          Archive
        </h1>

        {archive.length === 0 ? (
          <p className="text-gray-600 text-center text-lg py-16">
            No archive available yet.
          </p>
        ) : (
          <div className="space-y-4">
            {archive.map((item: ArchiveData, index: number) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Accordion Body */}
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <ul className="space-y-2">
                      {item.entries.map((entry, i) => (
                        <li key={i}>
                          <a
                            href={entry.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {entry.version}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <footer className="bg-[#5C4033] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#D97F3C] to-[#FF8C42] flex items-center justify-center">
                <img src={images.logo} alt="logo" />
              </div>
              <span className="text-2xl font-serif4">Ingenium</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/70 mb-2">
                Your notes, your device, your control.
              </p>
              <p className="text-white/50 text-sm">
                Ingenium . Privacy-focused by design.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ArchivePage;

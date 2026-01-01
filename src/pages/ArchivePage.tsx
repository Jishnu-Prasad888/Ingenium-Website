import { useState } from "react";
import { archive } from "../data/archive";
import type { ArchiveData, VersionEntry } from "../data/archive";
import {
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react";
import { images } from "../utils/images";

const ArchivePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first (latest) by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Format date to be more readable
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F4E1D2]/30 to-[#EED6C4]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 border border-orange-200/50">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#5C4033]" />
            <span className="text-sm sm:text-base font-medium text-[#5C4033]">
              Version Archive · Release History
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-[#5C4033] mb-4">
            Release Archive
          </h1>
          <p className="text-[#5C4033]/70 text-base sm:text-lg max-w-2xl mx-auto">
            Browse through all previous versions and release notes. Each archive
            contains detailed changelogs and download links.
          </p>
        </div>

        {/* Archive List */}
        {archive.length === 0 ? (
          <div className="text-center py-16 sm:py-24 bg-white/50 rounded-2xl border border-orange-200/50 backdrop-blur-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-[#F4E1D2] flex items-center justify-center">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#5C4033]/60" />
            </div>
            <p className="text-[#5C4033]/60 text-lg sm:text-xl">
              No archive available yet.
            </p>
            <p className="text-[#5C4033]/40 text-sm sm:text-base mt-2">
              Check back later for version history
            </p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {archive.map((item: ArchiveData, index: number) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border ${
                  item.isLatest
                    ? "border-[#FF8C42]/40 hover:border-[#FF8C42]/60"
                    : "border-orange-200/30 hover:border-orange-300/50"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 transition-all duration-300 ${
                    item.isLatest
                      ? "bg-linear-to-r from-[#FF8C42]/5 to-orange-50/50 hover:from-[#FF8C42]/10 hover:to-orange-50"
                      : "bg-linear-to-r from-white to-orange-50/50 hover:to-orange-50"
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 text-left">
                    <div
                      className={`p-2 sm:p-3 rounded-xl ${
                        item.isLatest ? "bg-[#FF8C42]/20" : "bg-[#2F4F4F]/10"
                      }`}
                    >
                      {item.isLatest ? (
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C42]" />
                      ) : (
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F4F4F]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] group-hover:text-[#3B444B] transition-colors">
                          {item.title}
                        </h3>
                        {item.isLatest && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#FF8C42]/20 text-[#FF8C42] border border-[#FF8C42]/30">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mt-1">
                        {item.date && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#5C4033]/50" />
                            <span className="text-xs sm:text-sm text-[#5C4033]/60">
                              {item.date}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-[#5C4033]/50" />
                          <span className="text-xs sm:text-sm text-[#5C4033]/60">
                            {item.entries.length}{" "}
                            {item.entries.length === 1 ? "version" : "versions"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg transition-transform duration-300 ${
                        openIndex === index
                          ? "bg-[#5C4033]/10 rotate-180"
                          : "bg-orange-100/50 group-hover:bg-orange-100"
                      }`}
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#5C4033]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#5C4033]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Accordion Body */}
                {openIndex === index && (
                  <div className="px-5 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-white to-orange-50/30 border-t border-orange-200/30 animate-fade-in">
                    {item.description && (
                      <div className="mb-4">
                        <p className="text-[#5C4033]/70 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    )}

                    <div className="space-y-3">
                      {item.entries.map((entry: VersionEntry, i: number) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-200 transition-colors group/entry"
                        >
                          <div className="mb-2 sm:mb-0 flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  entry.version.startsWith("1.")
                                    ? "bg-[#D97F3C]"
                                    : entry.version.startsWith("0.9")
                                    ? "bg-[#2F4F4F]"
                                    : "bg-[#800000]"
                                }`}
                              ></div>
                              <div>
                                <span className="font-semibold text-[#5C4033]">
                                  {entry.version}
                                </span>
                                {entry.releaseDate && (
                                  <span className="ml-2 text-xs text-[#5C4033]/50">
                                    {formatDate(entry.releaseDate)}
                                  </span>
                                )}
                              </div>
                            </div>
                            {entry.changes && (
                              <p className="text-sm text-[#5C4033]/60 ml-4 mt-1">
                                {entry.changes}
                              </p>
                            )}
                          </div>
                          <a
                            href={entry.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg bg-[#F4E1D2] hover:bg-[#EED6C4] text-[#5C4033] font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 group-hover/entry:bg-[#EED6C4]"
                          >
                            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Download</span>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover/entry:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-10 sm:mt-16 bg-linear-to-r from-[#2F4F4F]/5 to-[#3B444B]/5 rounded-2xl p-5 sm:p-6 border border-[#2F4F4F]/10">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="p-2 sm:p-3 rounded-xl bg-[#2F4F4F]/10 flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F4F4F]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2">
                About Version Archive
              </h3>
              <p className="text-[#5C4033]/70 text-sm sm:text-base">
                This archive contains all previous releases of Ingenium. Each
                version includes release notes detailing new features,
                improvements, and bug fixes. Always download from official
                sources to ensure security and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#5C4033] text-white py-8 sm:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6 md:mb-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-linear-to-br from-[#D97F3C] to-[#FF8C42] flex items-center justify-center">
                <img
                  src={images.logo}
                  alt="logo"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
              <span className="text-xl sm:text-2xl font-serif4">Ingenium</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm sm:text-base mb-1 sm:mb-2">
                Your notes, your device, your control.
              </p>
              <p className="text-white/50 text-xs sm:text-sm">
                Ingenium . Privacy-focused by design.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArchivePage;

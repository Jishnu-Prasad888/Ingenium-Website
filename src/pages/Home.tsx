import { useState } from "react";
import { FolderOpen, Edit, Shield, ArrowRight, Download } from "lucide-react";
import DownloadModal from "../components/DownloadModal";
import { images } from "../utils/images";
import { links } from "../data/pageData";

const HomePage = () => {
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("offline");

  const features = [
    {
      id: "offline",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "100% Offline First",
      description:
        "Your data stays on your device. No internet required, ever. Complete privacy and control.",
      color: "from-[#2F4F4F] to-[#3B444B]",
    },
    {
      id: "organization",
      icon: <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Smart Organization",
      description:
        "Unlimited nested folders with intuitive hierarchy. Never lose track of your notes.",
      color: "from-[#800000] to-[#9C3B2E]",
    },
    {
      id: "editor",
      icon: <Edit className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Rich Markdown Editor",
      description:
        "Dual-mode editor with live preview. Format text instantly with toolbar shortcuts.",
      color: "from-[#D97F3C] to-[#FF8C42]",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-[#F4E1D2] to-[#EED6C4] w-full overflow-x-hidden">
        {/* Hero Section */}
        <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 pt-4 sm:pt-8 lg:pt-10 flex flex-col items-center text-center pb-8 sm:pb-12 lg:pb-40">
              {/* Logo */}
              <img
                src={images.logosvg}
                alt="logo"
                className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
              />

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif4 leading-tight tracking-tight">
                Ingenium
              </h1>

              <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl">
                Harmonising Imagination and Structure
              </p>

              {/* Description Card */}
              <div className="relative mt-6 sm:mt-8 lg:mt-10 w-full max-w-2xl rounded-2xl bg-linear-to-br from-orange-50 to-orange-100/60 p-6 sm:p-8 lg:p-10 shadow-sm ring-1 ring-orange-200/50 text-left">
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Ingenium delivers a complete offline note-taking ecosystem
                  that balances powerful features with simplicity. Organize
                  ideas in intuitive folders, craft rich notes with Markdown,
                  and capture content from anywhere — all with complete privacy.
                </p>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Your notes live only on your device, giving you total control
                  without ever needing an internet connection. Experience
                  frictionless note-taking that's permanently accessible,
                  beautifully organized, and entirely yours.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                {/* Soft background frame */}
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 rounded-2xl bg-orange-100/40 blur-xl" />

                <img
                  src={images.NotesEditorScreen}
                  alt="Notes Editor Screen Demo"
                  className="relative w-full h-auto rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Intro Section */}
        <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#2F4F4F]" />
              <span className="text-xs sm:text-sm font-medium text-[#5C4033]">
                100% Private · Zero Data Collection
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="block text-[#5C4033]">
                Organize Your Thoughts
              </span>
              <span className="block bg-linear-to-r from-[#800000] via-[#D97F3C] to-[#FF8C42] bg-clip-text text-transparent pt-4 sm:pt-6 lg:pt-10">
                Without Compromise
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#5C4033]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              A modern, privacy-focused note-taking app with powerful folder
              organization, rich markdown editing, and seamless sharing — all
              working completely offline.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                className="group w-full sm:w-auto bg-linear-to-r from-[#D97F3C] to-[#FF8C42] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105 transition-all"
                onClick={() => setDownloadModalOpen(true)}
              >
                <span>Start Taking Notes Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-[#5C4033] border-2 border-[#EED6C4] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#F4E1D2] transition-colors">
                <a
                  href={links.shareFeedback.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  Share Feedback
                </a>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#5C4033] mb-3 sm:mb-4">
                Everything You Need in a Note-Taking App
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5C4033]/70">
                Powerful features designed for productivity, without
                compromising your privacy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Feature Tabs */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left p-4 sm:p-6 rounded-2xl transition-all ${
                      activeFeature === feature.id
                        ? `bg-linear-to-r ${feature.color} text-white shadow-xl`
                        : "bg-[#F4E1D2] text-[#5C4033] hover:bg-[#EED6C4]"
                    }`}
                  >
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${
                          activeFeature === feature.id
                            ? "bg-white/20"
                            : "bg-white"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm ${
                            activeFeature === feature.id
                              ? "text-white/90"
                              : "text-[#5C4033]/70"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feature Preview */}
              <div className="bg-linear-to-br from-[#F4E1D2] to-[#EED6C4] rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  {activeFeature === "offline" && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#2F4F4F]" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C4033]">
                          Complete Privacy
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-[#5C4033]/80">
                        Your notes never leave your device. No data collection,
                        no third-party access. Everything is stored locally.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                        <div className="bg-[#F4E1D2] p-3 sm:p-4 rounded-lg">
                          <div className="text-sm sm:text-base md:text-lg font-semibold text-[#800000]">
                            Zero Permissions
                          </div>
                          <div className="text-xs sm:text-sm text-[#5C4033]/70">
                            No internet access required
                          </div>
                        </div>
                        <div className="bg-[#F4E1D2] p-3 sm:p-4 rounded-lg">
                          <div className="text-sm sm:text-base md:text-lg font-semibold text-[#800000]">
                            Local Storage
                          </div>
                          <div className="text-xs sm:text-sm text-[#5C4033]/70">
                            All data stays on device
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === "organization" && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000]" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C4033]">
                          Smart Folder System
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-[#5C4033]/80">
                        Create unlimited nested folders with drag-and-drop
                        organization. Visual breadcrumbs and quick navigation
                        make finding notes effortless.
                      </p>
                      <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
                        {[
                          "Projects/ClientA/MeetingNotes",
                          "Personal/Journal/2024",
                          "Work/HR/Documents",
                        ].map((path) => (
                          <div
                            key={path}
                            className="flex items-center space-x-2 text-xs sm:text-sm p-2 bg-[#F4E1D2] rounded"
                          >
                            <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#800000]" />
                            <span className="text-[#5C4033] truncate">
                              {path}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === "editor" && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Edit className="w-6 h-6 sm:w-8 sm:h-8 text-[#D97F3C]" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C4033]">
                          Rich Markdown Editor
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-[#5C4033]/80">
                        Write in plain markdown with live preview. Quick
                        formatting toolbar, syntax highlighting, and full-screen
                        focus mode for distraction-free writing.
                      </p>
                      <div className="mt-4 sm:mt-6 bg-[#2F4F4F] text-white p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm">
                        <div className="text-[#FF8C42]"># Meeting Notes</div>
                        <div className="text-[#778899]">## Action Items</div>
                        <div className="ml-3 sm:ml-4">
                          <div className="text-[#EED6C4]">
                            - [ ] Prepare Q4 report
                          </div>
                          <div className="text-[#EED6C4]">
                            - [x] Schedule team meeting
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="download"
          className="py-12 sm:py-16 lg:py-20 bg-linear-to-r from-[#2F4F4F] to-[#3B444B]"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Organize Your Thoughts?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
                Get started here
              </p>

              <button
                className="group w-full sm:w-auto bg-linear-to-r from-[#FF8C42] to-[#D97F3C] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 mx-auto hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => setDownloadModalOpen(true)}
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Download Ingenium Free</span>
              </button>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60">
                Available for Android for now. No registration required.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                <span className="text-xl sm:text-2xl font-serif4">
                  Ingenium
                </span>
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

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
};

export default HomePage;

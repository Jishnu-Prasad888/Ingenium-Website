import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { supporters as supportersData } from "../data/supporters";
import { devs as devsData } from "../data/supporters";
import { images } from "../utils/images";
const SupportersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const supportersPerPage = 4;

  const indexOfLast = currentPage * supportersPerPage;
  const indexOfFirst = indexOfLast - supportersPerPage;
  const currentSupporters = supportersData.slice(indexOfFirst, indexOfLast);
  const currentDevs = devsData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(supportersData.length / supportersPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  console.log(currentDevs);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Support the Project Button - Centered at the top */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Support the Project
          </button>
        </div>

        {/* Meet the Devs Section */}
        <div className="flex justify-between items-center mb-10 -pt-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-gray-800">
            Meet the Devs
          </h1>
        </div>

        {devsData.length === 0 ? (
          <p className="text-gray-600 text-center py-16 text-lg">
            Become the first to support the project!
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentDevs.map((supporter) => (
                <ProfileCard key={supporter.id} supporter={supporter} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Project Supporters Section */}
        <div className="flex justify-between items-center mb-8 mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-gray-800">
            Project Supporters
          </h1>
        </div>

        {supportersData.length === 0 ? (
          <p className="text-gray-600 text-center py-16 text-lg">
            Become the first to support the project!
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentSupporters.map((supporter) => (
                <ProfileCard key={supporter.id} supporter={supporter} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                X
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                We appreciate your support. Please fill out the form to support
                the project.
              </p>
              <a
                href="https://forms.gle/ZyL12dqcWE8LeR4U8"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
              >
                Support via Form
              </a>
            </div>
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

export default SupportersPage;

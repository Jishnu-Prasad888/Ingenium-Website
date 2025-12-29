import Ingenium from "../components/Ingenium";
import MasonryGrid from "../components/ShowScreenShots";
import { images } from "../utils/images";
export default function ExplorePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Screenshots gallery */}
          <div className="w-full">
            <MasonryGrid />
          </div>

          {/* App replica */}
          <div className="w-full flex flex-col">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-gray-800 mb-8 text-center pt-9">
              Explore the Interface
            </h1>
            <Ingenium />
          </div>
        </div>
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
}

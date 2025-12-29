import React, { useState, useRef, useEffect } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  description: string;
}

import { images } from "../utils/images";

const ImageViewer: React.FC = () => {
  // Sample images - replace with your actual images
  const screenShots: ImageData[] = [
    {
      id: 1,
      src: images.FolderExplorerScreen,
      alt: "Folder Explorer Screen",
      description:
        "Your main workspace for staying organised. Browse all your notes and folders from the root level, create new ones, and neatly structure everything using subfolders.",
    },
    {
      id: 2,
      src: images.NotesEditorScreen,
      alt: "Notes Editor Screen",
      description:
        "Write the way you think. The editor supports Markdown and rich formatting like headings, bold and italic text, underlines, and checkboxes, giving you full control over how your notes look.",
    },
    {
      id: 3,
      src: images.NotesListScreen,
      alt: "Notes List Screen",
      description:
        "All your notes, instantly accessible. Quickly search and sort through everything you’ve written to find exactly what you need, when you need it.",
    },
    {
      id: 4,
      src: images.PreviewScreen,
      alt: "Preview Screen",
      description:
        "A clean, distraction-free reading experience. Preview your notes without editing tools and focus purely on your ideas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const imageRef = useRef<HTMLDivElement>(null);

  const selectedImage =
    currentIndex !== null ? screenShots[currentIndex] : null;

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % screenShots.length);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handlePrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + screenShots.length) % screenShots.length
      );
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
    if (zoom <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleImageLoad = (id: number) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif4 text-gray-800 mb-8 text-center">
          Spotlight on Screens{" "}
        </h1>

        {/* Masonry Grid */}
        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screenShots.map((image, index) => (
            <div
              key={image.id}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
              onClick={() => openModal(index)}
            >
              {imageErrors[image.id] ? (
                <div className="w-full aspect-[3/4] flex flex-col items-center justify-center bg-gray-300 text-gray-600">
                  <ImageIcon className="w-12 h-12 mb-2" />
                  <p className="text-sm">{image.alt}</p>
                  <p className="text-xs text-gray-500 mt-1">Image not found</p>
                </div>
              ) : (
                <>
                  {!imageLoaded[image.id] && (
                    <div className="w-full aspect-[3/4] flex items-center justify-center bg-gray-200 animate-pulse">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-11/12 mx-auto my-2 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    style={{ opacity: imageLoaded[image.id] ? 1 : 0 }}
                    loading="lazy"
                    onError={() => handleImageError(image.id)}
                    onLoad={() => handleImageLoad(image.id)}
                  />
                </>
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-amber-900/45 flex items-center justify-center"
          onClick={closeModal} // Only clicking outside modal closes
        >
          {/* Modal content wrapper */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto p-4"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Zoom controls */}
            <div className="absolute top-4 left-4 z-50 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                aria-label="Reset zoom"
              >
                <RotateCw className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Image container */}
            <div
              ref={imageRef}
              className="flex-1 w-full flex items-center justify-center overflow-hidden relative"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain select-none"
                style={{
                  transform: `scale(${zoom}) translate(${
                    position.x / zoom
                  }px, ${position.y / zoom}px)`,
                  cursor:
                    zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  transition: isDragging ? "none" : "transform 0.2s ease",
                }}
                draggable={false}
              />
            </div>

            {/* Description */}
            <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 mt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {selectedImage.alt}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="mt-3 text-sm sm:text-base text-gray-500 font-medium">
                {currentIndex + 1} / {screenShots.length}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;

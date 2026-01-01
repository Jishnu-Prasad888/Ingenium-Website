import { useState, useEffect } from "react";
import { ExternalLink, Download, CheckCircle, X } from "lucide-react";
import { images } from "../utils/images";
import { links } from "../data/pageData";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareText?: string; // text for LinkedIn post
}

export default function DownloadModal({
  isOpen,
  onClose,
  shareText,
}: DownloadModalProps) {
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    if (!isOpen) setStep(1);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[92%] max-w-md rounded-xl bg-white p-6 shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <div className="flex flex-col gap-2 items-center justify-center">
                <img src={images.logosvg} alt="logo" className="w-16 h-16" />
                <div className="flex items-baseline gap-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Support
                  </h2>
                  <h2 className="font-serif4 font-semibold text-xl">
                    Ingenium
                  </h2>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                If you find this useful, consider supporting the project.
              </p>
            </div>

            {/* Support actions */}
            <div className="divide-y rounded-lg border">
              <SupportLink
                href="https://forms.gle/ZyL12dqcWE8LeR4U8"
                icon={images.chai}
                label="Buy me a chai"
              />

              <SupportLink
                href={`https://www.linkedin.com/sharing/share-offsite/?url=&summary=${encodeURIComponent(
                  shareText ||
                    "Found a great app that lets you organize your thoughts offline!"
                )}`}
                icon={images.linkedin}
                label="Share on LinkedIn"
              />

              <SupportLink
                href="https://github.com/Jishnu-Prasad888/Ingenium/tree/main"
                icon={images.github}
                label="Star on GitHub"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              <Download size={18} />
              <a href={links.latestDownload.link} target="_blank">
                Continue to download
              </a>
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-5 text-center">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Download starting
              </h2>
            </div>

            <p className="text-sm text-gray-600">
              Your download will begin shortly. Thanks for supporting Ingenium.
            </p>

            <a
              href={links.shareFeedback.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <ExternalLink size={16} />
              Leave feedback
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function SupportLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition"
    >
      <img src={icon} alt="" className="h-6 w-6" />
      <span className="flex-1 text-left">{label}</span>
      <ExternalLink size={14} className="text-gray-400" />
    </a>
  );
}

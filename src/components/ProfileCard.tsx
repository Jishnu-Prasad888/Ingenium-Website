// components/ProfileCard.tsx
import type { Supporter } from "../data/supporters";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // use Twitter icon for X

interface ProfileCardProps {
  supporter: Supporter;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ supporter }) => {
  return (
    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Profile Image */}
      <img
        src={supporter.profilePic || "https://i.pravatar.cc/150?img=1"}
        alt={supporter.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
      />

      {/* Info */}
      <div className="flex flex-col justify-center">
        <span className="font-semibold text-gray-900 text-lg">
          {supporter.name}
        </span>
        <span className="text-gray-500 text-sm">{supporter.email}</span>

        {/* Socials */}
        <div className="flex gap-3 mt-2">
          {supporter.linkedin && (
            <a
              href={supporter.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {supporter.github && (
            <a
              href={supporter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {supporter.x && (
            <a
              href={supporter.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
              title="X"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

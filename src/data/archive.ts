export interface VersionEntry {
  version: string;        // e.g., "1.0.0"
  link: string;           // URL to release notes or download
  changes?: string;       // Optional detailed changes/features
  releaseDate?: string;   // Optional specific release date
}

export interface ArchiveData {
  title: string;          // e.g., "Version 1"
  entries: VersionEntry[];
  date?: string;          // Overall release period/date
  description?: string;   // Brief description of the release
  isLatest?: boolean;     // Mark as latest version
}

export const archive: ArchiveData[] = [
  {
    title: "Version 1",
    date: "December 2025",
    description: "Initial stable release with core note-taking and organisation features",
    isLatest: true,
    entries: [
      { 
        version: "1.0.0", 
        link: "https://github.com/Jishnu-Prasad888/Ingenium/releases/tag/v1.0.0",
        changes: "Initial release with folder organization, markdown editor, and offline-first architecture",
        releaseDate: "2025-12-29"
      },
      { 
        version: "1.1.0", 
        link: "https://github.com/Jishnu-Prasad888/Ingenium/releases/tag/v1.1.0",
        changes: "Bug fixes and ability to move notes between folders",
        releaseDate: "2026-1-1"
      },
    ],
  },
];

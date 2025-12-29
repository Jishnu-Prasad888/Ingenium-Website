export interface VersionEntry {
  version: string; // e.g., "1.0.0"
  link: string;    // URL to release notes or download
}

export interface ArchiveData {
  title: string;   // e.g., "Version 1"
  entries: VersionEntry[];
}

export const archive: ArchiveData[] = [
    //   {
    //     title: "Version 1",
    //     entries: [
    //       { version: "1.0.0", link: "https://example.com/1.0.0" },
    //       { version: "1.1.0", link: "https://example.com/1.1.0" },
    //     ],
    //   },
];

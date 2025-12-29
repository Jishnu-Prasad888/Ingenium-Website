import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Edit2,
  Trash2,
  Plus,
  Menu,
  FileText,
  FolderOpen,
  ArrowLeft,
  ExternalLink,
  X,
  Save,
  Share2,
  ArrowUp,
  ArrowDown,
  ArrowUpAZ,
  ArrowDownZA,
} from "lucide-react";

type Screen = "home" | "note-view" | "note-preview" | "folder";
type SortBy = "date" | "name" | "modified";

interface Note {
  id: string;
  title: string;
  date: string;
  preview: string;
  folder: string;
}

interface Folder {
  id: string;
  name: string;
  created: string;
  parent: string;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>("/");
  const [showNotesList, setShowNotesList] = useState(true);
  const [showFoldersList, setShowFoldersList] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [open, setOpen] = useState(false);

  const notes: Note[] = [
    {
      id: "1",
      title: "Untitled Note",
      date: "27/12/2025",
      preview: "# Obsidian Feature Test Document...",
      folder: "/",
    },
    {
      id: "2",
      title: "My first note",
      date: "27/12/2025",
      preview: "# Markdown Renderer Full Test Document",
      folder: "/",
    },
    {
      id: "3",
      title: "Hello",
      date: "27/12/2025",
      preview: "## Hello",
      folder: "/",
    },
  ];

  const folders: Folder[] = [
    { id: "folder1", name: "Folder 1", created: "12/27/2025", parent: "/" },
    {
      id: "folder2",
      name: "Folder 2",
      created: "12/28/2025",
      parent: "folder1",
    },
  ];

  const handleNoteClick = (noteId: string) => {
    setSelectedNote(noteId);
    setCurrentScreen("note-view");
  };

  const handleFolderClick = (folderId: string) => {
    setSelectedFolder(folderId);
    setCurrentScreen("folder");
  };

  const handleBack = () => {
    if (currentScreen === "folder") {
      setCurrentScreen("home");
      setSelectedFolder("/");
    } else {
      setCurrentScreen("home");
      setSelectedNote(null);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Bottom Navigation Component
  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0 bg-yellow-100/90 backdrop-blur py-3 px-6 flex justify-around border-t border-yellow-200">
      <button className="p-2 hover:bg-yellow-200/50 rounded-lg transition">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      <button className="p-2 hover:bg-yellow-200/50 rounded-lg transition">
        <FileText className="w-6 h-6 text-gray-700" />
      </button>
      <button className="p-2 hover:bg-yellow-200/50 rounded-lg transition">
        <FolderOpen className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );

  // Home Screen
  const HomeScreen = () => (
    <div className="relative flex flex-col h-full bg-gradient-to-b from-orange-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 flex flex-col items-center">
        <h1 className="text-5xl font-serif mb-2">Ingenium</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Harmonising Imagination and Structure
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search ...."
            className="w-full bg-orange-100/60 rounded-2xl px-4 py-3 pr-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="px-6 mb-4 flex justify-end">
        <div className="relative">
          {/* Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-orange-100/60 px-4 py-2 rounded-xl
                     flex items-center gap-2 text-sm
                     text-slate-700 hover:bg-orange-100/80
                     transition"
          >
            <span className="font-medium">Sort by</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Options */}
          {open && (
            <div
              className="absolute right-1 mt-2 w-48 rounded-xl
                       bg-[#FAF6F2] border border-orange-200/60
                       shadow-lg overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-orange-100/50 cursor-pointer">
                <ArrowUp className="w-4 h-4 text-orange-600" />
                Date
              </div>

              <div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-orange-100/50 cursor-pointer">
                <ArrowDown className="w-4 h-4 text-orange-600" />
                Date
              </div>

              <div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-orange-100/50 cursor-pointer">
                <ArrowUpAZ className="w-4 h-4 text-orange-600" />A – Z
              </div>

              <div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-orange-100/50 cursor-pointer">
                <ArrowDownZA className="w-4 h-4 text-orange-600" />Z – A
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Folder Path */}
      <div className="px-6 mb-4">
        <p className="text-sm text-gray-600">Folder : /</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {/* Notes Section */}
        <div className="mb-6">
          <button
            onClick={() => setShowNotesList(!showNotesList)}
            className="flex items-center justify-between w-full mb-3"
          >
            <h2 className="text-xl font-semibold">Notes (1)</h2>
            {showNotesList ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>

          {showNotesList && (
            <div className="space-y-3">
              <div
                onClick={() => handleNoteClick("1")}
                className="bg-orange-100/60 rounded-2xl p-4 cursor-pointer hover:bg-orange-100/80 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-amber-900">Untitled Note</h3>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">27/12/2025</p>
                <p className="text-sm text-gray-700">
                  # Obsidian Feature Test Document...
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        {/* Folders Section */}
        <div className="mb-6">
          <button
            onClick={() => setShowFoldersList(!showFoldersList)}
            className="flex items-center justify-between w-full mb-3"
          >
            <h2 className="text-xl font-semibold">Folders (1)</h2>
            {showFoldersList ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>

          {showFoldersList && (
            <div className="space-y-3">
              <div
                onClick={() => handleFolderClick("folder1")}
                className="bg-orange-100/60 rounded-2xl p-4 cursor-pointer hover:bg-orange-100/80 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <FolderOpen className="w-8 h-8 text-amber-700" />
                    <div>
                      <h3 className="text-lg font-medium">Folder 1</h3>
                      <p className="text-sm text-gray-600">
                        Created: 12/27/2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 hover:bg-orange-200/50 rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 hover:bg-orange-200/50 rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-gray-600 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-20 left-0 right-0 px-6 flex gap-3">
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <span className="text-sm">Create a new folder</span>
          <Plus className="w-4 h-4" />
        </button>
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <span className="text-sm">Create a new note</span>
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <BottomNav />
    </div>
  );

  // Note View Screen
  const NoteViewScreen = () => (
    <div className="relative flex flex-col h-full bg-gradient-to-b from-orange-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-5xl font-serif mb-2">Ingenium</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Harmonising Imagination and Structure
        </p>
      </div>

      {/* Note Card */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="bg-orange-100/60 rounded-3xl p-6 mb-6">
          <div className="border-b-2 border-amber-900 pb-4 mb-4">
            <h2 className="text-3xl text-amber-900 font-medium">
              Untitled Note
            </h2>
          </div>

          <div className="flex justify-between items-center mb-6 text-sm text-gray-700">
            <span>Folder: /</span>
            <span>Last save: 13s ago</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <span>Created: 27/12/2025</span>
          </div>

          <div className="bg-cream-100 rounded-2xl p-6 space-y-6">
            <div>
              <ol className="list-decimal list-inside space-y-2">
                <li className="text-gray-800">Sub-item</li>
                <li className="text-gray-800">Sub-item</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Task List</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-400"
                  />
                  <span className="text-gray-800">Incomplete task</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 rounded border-gray-400"
                  />
                  <span className="text-gray-800 line-through">
                    Completed task
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-2 flex-wrap">
            <button className="px-6 py-2 bg-cream-200 rounded-xl border-2 border-amber-900 hover:bg-cream-300 transition">
              Edit
            </button>
            <button
              onClick={togglePreview}
              className="px-6 py-2 bg-cream-200 rounded-xl border-2 border-amber-900 hover:bg-cream-300 transition flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="px-6 py-2 bg-cream-200 rounded-xl border-2 border-amber-900 hover:bg-cream-300 transition">
              H1
            </button>
            <button className="px-6 py-2 bg-cream-200 rounded-xl border-2 border-amber-900 hover:bg-cream-300 transition">
              H2
            </button>
            <button className="px-6 py-2 bg-cream-200 rounded-xl border-2 border-amber-900 hover:bg-cream-300 transition">
              H3
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="absolute bottom-20 left-0 right-0 px-6 flex gap-3">
        <button
          onClick={handleBack}
          className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <Trash2 className="w-4 h-4" />
        </button>
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <Save className="w-4 h-4" />
        </button>
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <BottomNav />
    </div>
  );

  // Preview Modal
  const PreviewModal = () => (
    <div className="absolute inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-6">
        <div className="relative flex items-center mb-6">
          {/* Centered title */}
          <h2 className="absolute left-1/2 -translate-x-1/2 font-serif4 font-semibold text-4xl">
            Ingenium
          </h2>

          {/* Right-aligned close button */}
          <button
            onClick={togglePreview}
            className="ml-auto p-2 hover:bg-gray-200 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8 pb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Unordered List</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span>Item one</span>
                  <ul className="ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <div>
                        <span>Nested item</span>
                        <ul className="ml-6 mt-2">
                          <li className="flex items-start">
                            <span className="mr-3">•</span>
                            <span>Nested deeper</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Item two</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Ordered List</h2>
            <ol className="space-y-2">
              <li>
                <span className="mr-3">1.</span>
                <span>First item</span>
              </li>
              <li>
                <span className="mr-3">2.</span>
                <div>
                  <span>Second item</span>
                  <ol className="ml-6 mt-2 space-y-1">
                    <li>
                      <span className="mr-3">1.</span>
                      <span>Sub-item</span>
                    </li>
                    <li>
                      <span className="mr-3">2.</span>
                      <span>Sub-item</span>
                    </li>
                  </ol>
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Task List</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-400"
                />
                <span>Incomplete task</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-5 h-5 rounded border-gray-400"
                />
                <span className="line-through">Completed task</span>
              </label>
              <ul className="ml-8 space-y-1">
                <li>• [&gt;] Deferred task</li>
                <li>• [-] Cancelled task</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Folder Screen
  const FolderScreen = () => (
    <div className="relative flex flex-col h-full bg-gradient-to-b from-orange-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-5xl font-serif mb-2">Ingenium</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Harmonising Imagination and Structure
        </p>
      </div>

      {/* Search and Back */}
      <div className="px-6 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search ...."
            className="w-full bg-orange-100/60 rounded-2xl px-4 py-3 pr-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="px-6 mb-4 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="bg-yellow-100/80 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button className="bg-orange-100/60 px-4 py-2 rounded-xl flex items-center gap-2 text-sm hover:bg-orange-100/80 transition">
          <Menu className="w-4 h-4" />
          Date
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="px-6 mb-4">
        <p className="text-sm text-gray-600">Folder : /Folder 1</p>
      </div>

      {/* Folders */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="mb-6">
          <button className="flex items-center justify-between w-full mb-3">
            <h2 className="text-xl font-semibold">Folders (1)</h2>
            <ChevronDown className="w-5 h-5" />
          </button>

          <div className="space-y-3">
            <div className="bg-orange-100/60 rounded-2xl p-4 cursor-pointer hover:bg-orange-100/80 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <FolderOpen className="w-8 h-8 text-amber-700" />
                  <div>
                    <h3 className="text-lg font-medium">Folder 2</h3>
                    <p className="text-sm text-gray-600">Created: 12/28/2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 hover:bg-orange-200/50 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 hover:bg-orange-200/50 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ChevronRight className="w-5 h-5 text-gray-600 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-20 left-0 right-0 px-6 flex gap-3">
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <span className="text-sm">Create a new folder</span>
          <Plus className="w-4 h-4" />
        </button>
        <button className="flex-1 bg-orange-100/80 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-100 transition">
          <span className="text-sm">Create a new note</span>
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <BottomNav />
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-full max-w-md h-[800]  overflow-hidden rounded-3xl shadow-2xl bg-white">
        {currentScreen === "home" && <HomeScreen />}
        {currentScreen === "note-view" && <NoteViewScreen />}
        {currentScreen === "folder" && <FolderScreen />}
        {showPreview && <PreviewModal />}
      </div>
    </div>
  );
};

export default App;

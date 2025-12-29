import NotesEditorScreen from "../assets/images/NotesEditorScreen.jpeg";
import FolderExplorerScreen from "../assets/images/FolderExplorerScreen.jpeg";
import PreviewScreen from "../assets/images/PreviewScreen.jpeg";
import NotesListScreen from "../assets/images/NotesListScreen.jpeg";
import logo from "../assets/images/logo.png";
import logosvg from "../assets/images/logosvg.svg"
import github from "../assets/images/github.png"
import chai from "../assets/images/tea.png"
import linkedin from "../assets/images/linkedin.png"
import JishnuProfilePic from "../assets/images/devs/jishnu.png"

export const images = {
  NotesEditorScreen,
  FolderExplorerScreen,
  PreviewScreen,
  NotesListScreen,
  logo,
  logosvg,
  github,
  linkedin,
  chai,

  ScreenShots : [
      NotesEditorScreen,
  FolderExplorerScreen,
  PreviewScreen,
  NotesListScreen,
  ],

  devs :[
    JishnuProfilePic
  ]

} as const;


export type ImageKey = keyof typeof images;

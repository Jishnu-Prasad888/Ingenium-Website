import JishnuProfilePic from "../assets/images/devs/jishnu.png";

export interface Supporter {
  id: number;
  name: string;
  email?: string;
  linkedin?: string;
  github?: string;
  x?: string;
  profilePic?:string
}

export interface dev {
  id: number;
  name: string;
  email: string;
  linkedin?: string;
  github?: string;
  x?: string;
  profilePic?:string
}


export const supporters: Supporter[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     linkedin: "https://linkedin.com/in/alice",
//     github: "https://github.com/alice",
//     x: "https://twitter.com/alice",
//     profilePic: "https://i.pravatar.cc/150?img=5",
//   },

];


export const devs: dev[] = [
  {
    id: 1,
    name: "Jishnu Prasad",
    email: "thisisjishnuprasad888@gmail.com",
    linkedin: "https://www.linkedin.com/in/jishnu-prasad-ba90a9328/",
    github: "https://github.com/Jishnu-Prasad888",
    profilePic: JishnuProfilePic,
  },
];


// src/components/Team/TeamData.js
import swarupaImg from "../../assets/team/swarupa-aich.jpg"; // ensure file exists or set null
import abhishekImg from "../../assets/team/Abhishek-pic.jpg";
import suvamImg from "../../assets/team/Suvam-pic.jpg";
import amitImg from "../../assets/team/Amit-pic.jpg";
import arghyadeepImg from "../../assets/team/Arghyadeep-pic.jpg";
import niladriImg from "../../assets/about/founder.jpg";
import soumyadeepImg from "../../assets/about/cofounder.jpg";
import trishaImg from "../../assets/team/Trisha-pic.jpg";
import zakirImg from "../../assets/team/Zakir-pic.jpg";
import tuliImg from "../../assets/team/Tuli-pic.jpg"; 

const TeamData = [
  // Educators
  { id: 1, name: "Dr. Niladri Deb", role: "Faction Biology Educator", img: niladriImg, group: "educators" },
  { id: 2, name: "Er. Soumyadeep Nandi", role: "Faction Physics Educator", img: soumyadeepImg, group: "educators" },
  { id: 3, name: "Trisha Saha", role: "Faction Juniors Mathematics Educator", img: trishaImg, group: "educators" },
  { id: 4, name: "Arghyadeep Majumder", role: "Faction Juniors Science Educator", img: arghyadeepImg, group: "educators" },

  // Operations
  { id: 5, name: "Swarupa Aich", role: "Expansion Head", img: swarupaImg, group: "operations" },
  { id: 6, name: "Abhishek Dey", role: "Operations Coordinator", img: abhishekImg, group: "operations" },
  { id: 7, name: "Suvam Das", role: "Operations Coordinator", img: suvamImg, group: "operations" },
  { id: 8, name: "Amit Choudhury", role: "Test Coordinator", img: amitImg, group: "operations" },

  // Content / Web & Tech
  { id: 9, name: "Tuli Mukherjee", role: "Academic Content Associate", img: tuliImg, group: "webtech" },
  { id: 10, name: "Zakir", role: "Facility Support Staff", img: zakirImg, group: "webtech" },
  { id: 11, name: "Purbanka Ghosh", role: "Academic Content Associate", img: null, group: "webtech" },
  { id: 12, name: "Saunak Debnath", role: "Video Editor - Faction Olympiads", img: null, group: "webtech" },
 
  
];

export default TeamData;

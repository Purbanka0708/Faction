import scienceImg from "../../../assets/courses/Science.jpg";
import mathImg from "../../../assets/courses/mathematics.jpg";
import foundationBioImg from "../../../assets/courses/Foundation Bio.jpg";
import foundationPhyImg from "../../../assets/courses/Foundation Physics.jpg";
import neetBioImg from "../../../assets/courses/NEET bio.jpg";
import neetPhyImg from "../../../assets/courses/NEET Physics.jpg";
import jeePhyImg from "../../../assets/courses/JEE Physics.jpg";

export const coursesData = {
  class_5_8: {
    title: "Class 5–8",
    mode: "Offline",
    subjects: [
      {
        id: "c58-sci",
        subject: "Science",
        courses: [
          {
            id: 1,
            title: "Class 5–8 Science",
            duration: "Academic Year",
            tag: "Science",
            image: scienceImg,
          },
        ],
      },
      {
        id: "c58-math",
        subject: "Mathematics",
        courses: [
          {
            id: 2,
            title: "Class 5–8 Mathematics",
            duration: "Academic Year",
            tag: "Mathematics",
            image: mathImg,
          },
        ],
      },
    ],
  },

  foundation: {
    title: "Foundation Courses",
    mode: "Offline",
    streams: [
      {
        id: "fd-neet",
        stream: "NEET",
        courses: [
          {
            id: 3,
            title: "NEET Foundation Program",
            duration: "1 Year",
            tag: "Foundation",
            image: foundationBioImg,
          },
        ],
      },
      {
        id: "fd-jee",
        stream: "JEE",
        courses: [
          {
            id: 4,
            title: "JEE Foundation Program",
            duration: "1 Year",
            tag: "Foundation",
            image: foundationPhyImg,
          },
        ],
      },
    ],
  },

  neet: {
    title: "NEET Preparation",
    mode: "Offline",
    subjects: [
      {
        id: "neet-bio",
        subject: "Biology",
        courses: [
          {
            id: 5,
            title: "NEET Biology",
            duration: "2 Years",
            tag: "NEET",
            image: neetBioImg,
          },
        ],
      },
      {
        id: "neet-phy",
        subject: "Physics",
        courses: [
          {
            id: 6,
            title: "NEET Physics",
            duration: "2 Years",
            tag: "NEET",
            image: neetPhyImg,
          },
        ],
      },
    ],
  },

  jee: {
    title: "JEE (Main & Advanced)",
    mode: "Offline",
    subjects: [
      {
        id: "jee-phy",
        subject: "Physics",
        courses: [
          {
            id: 7,
            title: "JEE Physics (Main + Advanced)",
            duration: "2 Years",
            tag: "JEE",
            image: jeePhyImg,
          },
        ],
      },
    ],
  },
};

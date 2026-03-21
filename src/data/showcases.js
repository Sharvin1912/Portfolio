import professorImage from "../../content/Images/P2ProfessorImage.jpg";

const showcases = {
  id: "research",
  enabled: true,
  title: "Research",
  summary: "",
  organization: "Electromagnetic Wave Energy Harvesting",
  organizationSubheading: "Humanoid, Biorobotics & Smart Systems (HBS) Lab, University of Texas at Dallas",
  period: "Aug 2024 - Present",
  researchPoints: [
  "Working on the development of a novel low-frequency wave energy harvesting system targeting efficient power generation from irregular and ultra-low-frequency ocean conditions.", 
  "The research aims to create a compact, robust, and scalable solution using iterative design optimization, prototype development, and system-level characterization to enhance energy conversion performance of the harvesting device thus addressing key limitations of conventional energy harvesting systems, with potential applications in offshore sensing and autonomous marine devices.",
  ],
  mentor: {
    label: "Mentor",
    name: "Dr. Yonas Tadesse",
    position: "Professor of Mechanical Engineering, UTD",
    profileHref: "https://profiles.utdallas.edu/yonas.tadesse",
    image: professorImage,
  },
  labLink: {
    label: "University HBS Lab Site",
    href: "https://labs.utdallas.edu/hbslab/",
  },
};

export default showcases;

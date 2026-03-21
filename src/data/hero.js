import profilePhoto from "../../content/Images/P1Profile Photo.png";

const hero = {
  id: "hero",
  enabled: true,
  availability: "READY FOR WORK",
  heading: "SHARVIN TAGUNDE",
  role: "MECHANICAL ENGINEER",
  subheading:
    "MS Mechanical Engineering candidate at UT Dallas with a 3.75 GPA, active graduate research, and 18+ months of industry internship experience. Skilled in CAD, FEA, DFM, and engineering optimization - with a track record of taking designs from whiteboard to working prototype across clean-tech, robotics, and industrial applications.",
  actions: [
    {
      id: "view-projects",
      label: "View Projects",
      href: "#/?section=projects",
      variant: "primary",
      icon: "arrow-right",
      iconPosition: "end",
    },
    {
      id: "download-resume",
      label: "Resume",
      href: "https://drive.google.com/file/d/1kB3hBWnUFLn_e0xXnBb3xU3w7DVUo-Ps/view?usp=drive_link",
      variant: "ghost",
      icon: "download",
      iconPosition: "start",
    },
  ],
  quickLinks: [
    { id: "mail", label: "Mail", href: "mailto:tagundesharvin@gmail.com", icon: "mail" },
    { id: "contact", label: "Contact", href: "#/?section=contact", icon: "phone" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sharvin-t19", icon: "linkedin" },
    { id: "github", label: "GitHub", href: "https://github.com/Sharvin1912", icon: "github" },
  ],
  profileImage: {
    src: profilePhoto,
    alt: "Sharvin Tagunde profile photo",
  },
};

export default hero;

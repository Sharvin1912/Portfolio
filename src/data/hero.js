import profilePhoto from "../../content/Images/P1Profile Photo.png";

const hero = {
  id: "hero",
  enabled: true,
  availability: "READY FOR WORK",
  heading: "SHARVIN TAGUNDE",
  role: "MECHANICAL ENGINEER",
  subheading:
    "Mechanical engineer focused on turning concepts into manufacturable products through solid design thinking, simulation-informed decisions, and practical prototyping. I enjoy solving real-world engineering problems with reliable, efficient, and production-ready solutions.",
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
      href: "https://drive.google.com/",
      variant: "ghost",
      icon: "download",
      iconPosition: "start",
    },
  ],
  quickLinks: [
    { id: "mail", label: "Mail", href: "mailto:tagundesharvin@gmail.com", icon: "mail" },
    { id: "contact", label: "Contact", href: "#/?section=contact", icon: "phone" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/username", icon: "linkedin" },
    { id: "github", label: "GitHub", href: "https://github.com/username", icon: "github" },
  ],
  profileImage: {
    src: profilePhoto,
    alt: "Sharvin Tagunde profile photo",
  },
};

export default hero;

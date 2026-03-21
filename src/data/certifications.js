const certificationFiles = import.meta.glob("../../content/Certifications/C*.{pdf,PDF}", {
  eager: true,
  import: "default",
});

function getCodeFromPath(path) {
  const fileName = path.split("/").pop() || "";
  const match = fileName.match(/^(C\d+)/i);
  return match ? match[1].toUpperCase() : "";
}

const credentialByCode = Object.entries(certificationFiles).reduce((acc, [path, url]) => {
  const code = getCodeFromPath(path);
  if (code) acc[code] = url;
  return acc;
}, {});

const certifications = {
  id: "certifications",
  enabled: true,
  title: "Certifications",
  summary: "Formal learning milestones that support my engineering practice.",
  items: [
    {
      id: "c1",
      enabled: true,
      name: "AutoCAD: Drafting Blueprints & Schematics",
      issuer: "Coursera",
      date: "2026",
      credentialUrl: "https://drive.google.com/file/d/1mAXVCn3FasjrAyf5_DDBFxU5uryVODxx/view?usp=drive_link",
      badgeImage: "/assets/certifications/cert-1.svg",
    },
    {
      id: "c2",
      enabled: false,
      name: "AI for Mechanical Engineers",
      issuer: "University of Michigan",
      date: "2026",
      credentialUrl: credentialByCode.C2 || "https://drive.google.com/",
      badgeImage: "/assets/certifications/cert-2.svg",
    },
  ],
};

export default certifications;

const iconFiles = import.meta.glob("../../content/Tools Icons/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

function getFileName(path) {
  return path.split("/").pop() || "";
}

function getSerialIndex(fileName) {
  const match = fileName.match(/icon\s*(\d+)/i);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

const orderedIconUrls = Object.entries(iconFiles)
  .sort(([pathA], [pathB]) => {
    const nameA = getFileName(pathA);
    const nameB = getFileName(pathB);
    const idxA = getSerialIndex(nameA);
    const idxB = getSerialIndex(nameB);
    if (idxA !== idxB) return idxA - idxB;
    return nameA.localeCompare(nameB);
  })
  .map(([, url]) => url);

const toolNames = [
  "SolidWorks",
  "Ansys",
  "MATLAB",
  "Abaqus CAE",
  "PTC Creo",
  "AutoCAD",
  "Fusion 360",
  "SolidCAM",
  "MS Excel",
  "Python",
  "NI LabView",
  "ERP Next",
  "ChatGPT",
  "Claude AI",
  "Ultimaker Cura",
];

const fallbackIcons = [
  "/assets/shared/icons/css.svg",
  "/assets/shared/icons/node.svg",
  "/assets/shared/icons/ts.svg",
  "/assets/shared/icons/react.svg",
  "/assets/shared/icons/js.svg",
];

const softwareTools = toolNames.map((name, index) => ({
  id: `s${index + 1}`,
  name,
  icon: orderedIconUrls[index] || fallbackIcons[index % fallbackIcons.length],
}));

const skills = {
  id: "skills",
  enabled: true,
  title: "Skills",
  summary: "Core tools, certifications, and technical capabilities used across engineering workflows.",
  toolsGrid: {
    desktopColumns: 5,
    laptopColumns: 4,
    tabletColumns: 3,
  },
  softwareTools,
  technicalSkills: [
    "Product Design",
    "Design for Manufacturability (DFM)",
    "Rapid Prototyping",
    "Machine Design",
    "Manufacturing Processes",
    "3D Printing",
    "Geometric Dimensioning and Tolerancing (GD&T)",
    "Root Cause Analysis",
    "Computational Fluid Dynamics (CFD)",
    "Ansys Fluent",
    "Finite Element Analysis (FEA)",
    "Engineering Optimization",
    "Design of Experiments (DOE)",
    "Thermal Analysis",
    "Robotics and Automation",
    "MATLAB SIMULINK",
    "Project Management",
    "Lean / Agile Methodologies",
    "Technical Documentation",
  ],
};

export default skills;

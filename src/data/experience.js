const logoModules = import.meta.glob("../../content/Images/E*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

function getRailLogo(prefix) {
  const filePath = Object.keys(logoModules).find((path) =>
    path.split("/").pop().toLowerCase().startsWith(prefix.toLowerCase())
  );
  return filePath ? logoModules[filePath] : "";
}

const experience = {
  id: "experience",
  enabled: true,
  title: "Experience",
  summary: "A focused timeline of engineering leadership, product delivery, and practical execution.",
  items: [
    {
      id: "e1",
      role: "The University of Texas at Dallas",
      company: "",
      railLabel: "UTD",
      railLogo: getRailLogo("E1"),
      period: "Aug 2025 - Present",
      location: "",
      subroles: [
        {
          title: "Graduate Researcher (HBS Lab)",
          points: [
            "Contributed to lab-driven mechanical design studies with iterative prototyping and test-backed design refinement.",
            "Prepared technical documentation and structured findings to support reproducibility and publication-readiness.",
          ],
        },
        {
          title: "Student Assistant (Mechanical Engineering Grader)",
          points: [
            "Evaluated coursework and lab submissions while maintaining consistent grading standards across multiple sections.",
            "Supported students with clarifications on assignments, core concepts, and expected technical deliverable quality.",
          ],
        },
      ],
    },
    {
      id: "e2",
      role: "Product Design Intern",
      company: "Small Spark Concepts",
      railLabel: "PDT",
      railLogo: getRailLogo("E2"),
      period: "Sep 2023 - May 2024",
      location: "Pune, India",
      points: [
        "Created production-ready CAD models and assemblies with DFM-aware decisions to reduce rework during fabrication.",
        "Coordinated cross-functional reviews to improve manufacturability, tolerance stack-up quality, and project turnaround.",
      ],
    },
    {
      id: "e3",
      role: "Engineering Design Intern",
      company: "OM Engineering",
      railLabel: "FAP",
      railLogo: getRailLogo("E3"),
      period: "Mar 2020 - Aug 2020",
      location: "Pune, India",
      points: [
        "Delivered end-to-end mechanical project solutions including concept development, simulation inputs, and technical reports.",
        "Managed timelines, stakeholder communication, and documentation quality across multiple parallel assignments.",
      ],
    },
  ],
};

export default experience;

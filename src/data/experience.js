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
  summary: "A focused timeline of engineering, product delivery, and practical execution.",
  items: [
    {
      id: "e1",
      role: "Student Assistant (Grader)",
      company: "The University of Texas at Dallas",
      railLabel: "UTD-SA",
      railLogo: getRailLogo("E1"),
      period: "Aug 2025 - Present",
      location: "Dallas, TX",
      points: [
        "Graded UG/graduate coursework in Introduction to Robotics, Aerosol Measurement & Control, Finite Element Techniques, and Applied Engineering Mathematics; also supervised Robotics lab sessions.",
        "Reviewed derivations, numerical methods, and MATLAB implementations, and supported solution checks/error tracking to keep assessments fair, timely, and technically consistent.",
      ],
    },
    {
      id: "e2",
      role: "Product Design Intern",
      company: "Small Spark Concepts",
      railLabel: "SSC",
      railLogo: getRailLogo("E2"),
      period: "Sep 2023 - May 2024",
      location: "Pune, India",
      points: [
        "Enhanced air filter mold designs by applying Design for Manufacturing (DFM) principles, leading to improved manufacturability and cost efficiency. Utilized CAD modelling and 3D printing for rapid prototyping and iteration.",
        "Optimized manufacturing workflows by integrating Lean and Agile methodologies, employing Value Stream Mapping (VSM) and Kanban to enhance process efficiency and minimize waste.",
        "Developed a structured part numbering system for automotive air filters, streamlining inventory management and production planning. Gained expertise in flexible manufacturing techniques and part family design, improving scalability in production.",
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
        "Designed and optimized machine setups for various industrial applications by developing detailed CAD models and conducting interference studies and static analyses, ensuring manufacturability and structural integrity.",
        "Enhanced manufacturing accuracy and efficiency by creating production-ready technical drawings, incorporating GD&T standards for precise fabrication and assembly. Led process planning initiatives for diverse machine tools and components, optimizing machining sequences, reducing production lead times, and improving assembly feasibility.",
        "Collaborated cross-functionally with machinists and engineers to troubleshoot design challenges, improving component fitment and streamlining manufacturing workflows.",
      ],
    },
  ],
};

export default experience;

const projects = {
  id: "projects",
  enabled: true,
  title: "Projects",
  summary: "Open source and production work with reusable architecture.",
  featured: [
    {
      id: "p1",
      name: "Multi-Objective Optimization of Pin Fin Heat Sink for High Power Chip Cooling",
      description:
        "FailGuru is a modern learning platform built around one powerful idea: real growth comes from real failure. Instead of abstract theory, it captures life lessons from genuine experiences and transforms them into practical, actionable insight.",
      thumbnail: "/assets/projects/project-1.svg",
      stack: "Frontend, Backend",
      infoTags: ["Optimization", "CFD","Ansys Fluent", "Machine Learning"],
      summaryPoints: [
        "Built the official product interface with modular React architecture and scalable UI sections.",
        "Implemented interaction patterns and content layout tuned for readability and performance.",
        "Applied Fluent for thermal simulation and optimization of pin fin heat sink design parameters.",
      ],
      tags: ["React", "Vite", "CSS Modules"],
      links: {
        details: "https://example.com",
        live: "https://example.com",
        repo: "https://github.com/username/portfolio-system",
      },
      detailContent: {
        intro:
          "FailGuru is designed as a learning-first product that transforms lived experiences into structured growth resources for students and early-career professionals.",
        bullets: [
          "Created reusable UI foundations to keep product pages consistent and fast to extend.",
          "Built modular content blocks for stories, lessons, and premium insights.",
          "Improved readability and flow for long-form educational content.",
        ],
        media: [
          "/assets/projects/project-1.svg",
          "/assets/projects/showcase-1.svg",
        ],
      },
    },
  ],
  more: [
    {
      id: "p2",
      name: "ThermoMechanical Simulation & Design of a Bulge Forming Apparatus",
      description:
        "A reusable interface framework with strict visual tokens, scalable component patterns, and consistent interaction states designed for product teams shipping across multiple surfaces.",
      thumbnail: "/assets/projects/project-2.svg",
      stack: "Design System, Frontend",
      infoTags: ["FEA", "Abaqus CAE", "Simulation-Driven Design",],
      summaryPoints: [
        "Defined reusable layout primitives and style tokens to standardize UI delivery across teams.",
        "Reduced design-to-dev mismatch through constrained spacing, typography, and component variants.",
        "Applied Fluent for thermal simulation and optimization of pin fin heat sink design parameters.",
      ],
      tags: ["Design System", "Storybook"],
      links: {
        details: "https://example.com",
        live: "https://example.com",
        repo: "https://github.com/username/component-library",
      },
      detailContent: {
        intro:
          "DesignForge focuses on component quality, cross-page consistency, and rapid team delivery through shared visual language.",
        bullets: [
          "Defined token-driven spacing and typography system for predictable layouts.",
          "Documented component variants to reduce implementation ambiguity.",
          "Improved handoff quality between design and frontend development.",
        ],
        media: [
          "/assets/projects/project-2.svg",
          "/assets/projects/showcase-2.svg",
        ],
      },
    },
    {
      id: "p3",
      name: "Docs Hub",
      description:
        "Technical documentation interface with content-first navigation, structured writing templates, and improved discoverability for engineering and research workflows.",
      thumbnail: "/assets/projects/project-3.svg",
      stack: "Documentation, UX",
      infoTags: ["Validation", "Process", "Analysis"],
      summaryPoints: [
        "Built a documentation experience with information hierarchy optimized for technical readers.",
        "Improved discoverability and onboarding through content grouping and clear navigation pathways.",
      ],
      tags: ["MDX", "UX"],
      links: {
        details: "https://example.com",
        live: "https://example.com",
        repo: "https://github.com/username/docs-hub",
      },
      detailContent: {
        intro:
          "Docs Hub is a content-focused interface built for technical teams who need structure, clarity, and fast information retrieval.",
        bullets: [
          "Implemented hierarchy-first layouts to support scanning and deep reading.",
          "Organized topic pathways for onboarding and advanced technical references.",
          "Enhanced discoverability through structured navigation and content grouping.",
        ],
        media: [
          "/assets/projects/project-3.svg",
          "/assets/projects/showcase-1.svg",
        ],
      },
    },
    {
      id: "p4",
      name: "Lab Tracker",
      description:
        "A lightweight progress and reporting dashboard for academic project milestones, mentor checkpoints, and experiment records with a clear status-first interface.",
      thumbnail: "/assets/projects/showcase-2.svg",
      stack: "Research, Data UI",
      infoTags: ["Testing", "Data Logging", "Reporting"],
      summaryPoints: [
        "Tracked experiment status, review checkpoints, and milestone history in one unified dashboard.",
        "Created a clean reporting view that supports mentor review and project planning cadence.",
      ],
      tags: ["React", "Dashboard"],
      links: {
        details: "https://example.com",
        live: "https://example.com",
        repo: "https://github.com/username/lab-tracker",
      },
      detailContent: {
        intro:
          "Lab Tracker centralizes research progress, reporting checkpoints, and experiment summaries into one clean operational view.",
        bullets: [
          "Built milestone-oriented dashboard workflows for mentors and project teams.",
          "Standardized experiment logging for better continuity and traceability.",
          "Designed report snapshots for status reviews and weekly planning sessions.",
        ],
        media: [
          "/assets/projects/showcase-2.svg",
          "/assets/projects/project-2.svg",
        ],
      },
    },
  ],
};

export default projects;

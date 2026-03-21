const p1PreviewModules = import.meta.glob("../../content/Project media Files/P1/P1Preview*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p1MediaModules = import.meta.glob("../../content/Project media Files/P1/P1I*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p1ReportModules = import.meta.glob("../../content/Project media Files/Final Report Optimization Project.pdf", {
  eager: true,
  import: "default",
});

const p2PreviewModules = import.meta.glob("../../content/Project media Files/P2/P2Preview*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p2MediaModules = import.meta.glob("../../content/Project media Files/P2/P2I*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p2ReportModules = import.meta.glob("../../content/Project media Files/P2/MDM Assignment 2.pdf", {
  eager: true,
  import: "default",
});

const p2VideoModules = import.meta.glob("../../content/Project media Files/P2/P2VideoSimulation*.{mp4,webm,ogg,gif}", {
  eager: true,
  import: "default",
});

const p2EquationModules = import.meta.glob("../../content/Project media Files/P2/P2Equation*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const p2EquationImageModules = import.meta.glob("../../content/Project media Files/P2/P2EquationImage*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p3PreviewModules = import.meta.glob("../../content/Project media Files/P3/P3Preview*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p3MediaModules = import.meta.glob("../../content/Project media Files/P3/P3I*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p3VideoModules = import.meta.glob("../../content/Project media Files/P3/P3Animation*.{mp4,webm,ogg,gif}", {
  eager: true,
  import: "default",
});

const p3ReportPdfModules = import.meta.glob("../../content/Project media Files/P3/CAD SORO PROJECT PPT.pdf", {
  eager: true,
  import: "default",
});

const p4PreviewModules = import.meta.glob("../../content/Project media Files/P4/P4Preview*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p4MediaModules = import.meta.glob("../../content/Project media Files/P4/P4I*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const p4VideoModules = import.meta.glob("../../content/Project media Files/P4/P4Video*.{mp4,webm,ogg,gif}", {
  eager: true,
  import: "default",
});

const p4ReportModules = import.meta.glob("../../content/Project media Files/P4/P4Soft Robotics Report.pdf", {
  eager: true,
  import: "default",
});

const p4PptModules = import.meta.glob("../../content/Project media Files/P4/PPT Report.pdf", {
  eager: true,
  import: "default",
});

function sortByImageIndex(paths, prefix) {
  return [...paths].sort((a, b) => {
    const aName = a.split("/").pop() || "";
    const bName = b.split("/").pop() || "";
    const matcher = new RegExp(`${prefix}(\\d+)`, "i");
    const aMatch = aName.match(matcher);
    const bMatch = bName.match(matcher);
    const aNum = aMatch ? Number(aMatch[1]) : 999;
    const bNum = bMatch ? Number(bMatch[1]) : 999;
    return aNum - bNum;
  });
}

const p1Preview = Object.values(p1PreviewModules)[0] || "/assets/projects/project-1.svg";
const p1Media = sortByImageIndex(Object.keys(p1MediaModules), "P1I").map((key) => p1MediaModules[key]);
const p1Report = "https://drive.google.com/file/d/1eBza4QV875B1h0kQ30HIEDJC6loDVne3/view?usp=drive_link";
const p1FigureCaptions = [
  "3D model diagram of the heat sink geometry",
  "Optimization flow chart for DOE, surrogate modeling, NSGA-II, and CFD verification",
  "Pareto front with MCDM selected solutions and ideal point",
  "CFD simulation domain showing enclosure, inlet, outlet, and pin-fin assembly",
  "Temperature contour over the selected pin-fin heat sink design",
  "Downstream thermal plume and flow development contour",
  "Problem formulation and validation-selection framework",
  "Mathematical problem formulation setup",
  "Optimization variables and constraint mapping",
];
const p1Figures = p1Media.map((src, index) => ({
  src,
  title: p1FigureCaptions[index] || `Project visual ${index + 1}`,
}));

const p2Preview = Object.values(p2PreviewModules)[0] || "/assets/projects/project-2.svg";
const p2Media = sortByImageIndex(Object.keys(p2MediaModules), "P2I").map((key) => p2MediaModules[key]);
const p2Report = "https://drive.google.com/file/d/1_OOouYKFDJenG0JQsCC7u9FpSYZ40vTO/view?usp=drive_link";
const p2Video = Object.values(p2VideoModules)[0] || "";
const p2EquationImage = Object.values(p2EquationImageModules)[0] || "";
const p2EquationVector = Object.values(p2EquationModules)[0] || "";
const p2Equation = p2EquationImage || p2EquationVector;
const p2FigureCaptions = [
  "Axisymmetric geometry and boundary condition setup for the bulge-forming simulation",
  "Von Mises Stress Contour",
  "Displacement Contour",
  "Reaction Force During Punch Stroke",
  "Reaction Force vs Time Plot",
  "Detailed part drawing of key bulge test apparatus components",
  "Assembly drawing with front/top views and isometric model",
  "Bulge test mechanism and load-path schematic from report setup",
];
const p2Figures = p2Media.map((src, index) => ({
  src,
  title: p2FigureCaptions[index] || `Project visual ${index + 1}`,
}));

const p3Preview = Object.values(p3PreviewModules)[0] || "/assets/projects/project-3.svg";
const p3Media = sortByImageIndex(Object.keys(p3MediaModules), "P3I").map((key) => p3MediaModules[key]);
const p3Videos = [...Object.keys(p3VideoModules)].sort().map((key) => p3VideoModules[key]);
const p3ReportPdf = Object.values(p3ReportPdfModules)[0] || "";
const p3Report = "https://docs.google.com/presentation/d/17Nu_ChA3mptLuJ15UmIfm254NC8GwCMh/edit?usp=drive_link&ouid=115863256821398900370&rtpof=true&sd=true";
const p3FigureCaptions = [
  "Hydrogen fuel-cell working concept used as inspiration for the power system",
  "Primary CAD assembly concept of the microbot",
  "Annotated prototype design with major sub-assemblies",
  "3D printed prototype of the selected microbot concept",
  "Engineering drawing: base plate",
  "Engineering drawing: leg component",
  "Engineering drawing: leg attachment component",
];
const p3Figures = p3Media.map((src, index) => ({
  src,
  title: p3FigureCaptions[index] || `Project visual ${index + 1}`,
}));

const p4Media = sortByImageIndex(Object.keys(p4MediaModules), "P4I").map((key) => p4MediaModules[key]);
const p4Preview = Object.values(p4PreviewModules)[0] || p4Media[4] || p4Media[0] || "/assets/projects/project-4.svg";
const p4Videos = [...Object.keys(p4VideoModules)].sort().map((key) => p4VideoModules[key]);
const p4Report = "https://drive.google.com/file/d/19WVV96G2S2j5u-RnrJ_8J_f8HT09Jp_8/view?usp=drive_link";
const p4Ppt = Object.values(p4PptModules)[0] || "";
const p4NamedCaptions = {
  0: "Failure-zone concept under rapid internal loading",
  1: "Soft actuator motivation reference",
  2: "Part Geometry",
  3: "CAD Model",
  4: "3D Printed ABS Mold",
  5: "Steady state Temperature Contour from ANSYS Simulation",
  6: "Maximum Principal Elastic Strain Contour from ANSYS Simulation",
  7: "Principal Stress vs Time Plot",
  8: "Principal Strain vs Time Plot",
  9: "Stress Vs Strain Plot showing elastic behavior within the actuation window",
  10: "Deformation Vs Time Plot showing rapid expansion behavior during the pressure ramp",
  11: "Cured Mold with Mold Star Silicone variant",
  12: "Cured Mold with Ecoflex 00-30 Silicone variant",
  13: "Final Molds with Mold Star (left) and Ecoflex (right) after trimming and support removal",
  14: "Assembled actuator ready for testing in the rig",
  15: "Experimental setup for pneumatic testing with Arduino control and pressure regulation",

};
const p4Figures = p4Media.map((src, index) => ({
  src,
  title: p4NamedCaptions[index] || `P4 Image ${index + 1}`,
}));

const projects = {
  id: "projects",
  enabled: true,
  title: "Projects",
  summary: "Mechanical design, simulation, & prototyping projects focused on practical engineering impact.",
  featured: [
    {
      id: "p1",
      name: "Multi-Objective Optimization of Pin Fin Heat Sink for High Power Chip Cooling",
      description:
        "Surrogate-assisted NSGA-II optimization for pin-fin heat sink geometry to balance thermal resistance, pressure drop, and mass under a 10 W load.",
      thumbnail: p1Preview,
      thumbnailPosition: "55% 35%",
      stack: "Thermal Optimization, CFD, ML Surrogates",
      infoTags: ["ANSYS Fluent", "CFD", "NSGA-II", "Surrogate Modeling", "GPR", "ANN", "Thermal Optimization", "Pareto Analysis"],
      summaryPoints: [
        "Used DOE + surrogate models (GPR/ANN) to replace expensive full-scale evaluations during optimization.",
        "Ran mixed-variable NSGA-II with geometry + material choice to generate a robust Pareto front.",
        "Validated selected TOPSIS/LINMAP/VIKOR solutions in ANSYS Fluent with low prediction error.",
      ],
      tags: ["ANSYS", "CFD", "NSGA-II", "Surrogate Modeling",],
      links: {
        details: p1Report,
        live: p1Report,
        repo: p1Report,
      },
      detailContent: {
        subtitle: "Surrogate-Assisted NSGA-II for Multi-Objective Thermal-Fluid Design",
        layout: "p1-structured",
        keywords: [
          { label: "ANSYS Fluent", important: true },
          { label: "CFD", important: true },
          { label: "NSGA-II", important: true },
          { label: "Surrogate Modeling", important: true },
          { label: "ANN", important: true },
          { label: "Thermal Optimization", important: true },
          { label: "Pareto Analysis", important: true },
        ],
        summary:
          "A surrogate-assisted optimization pipeline was developed to design a pin-fin heat sink for forced-convection cooling under a 10 W load, balancing thermal resistance, pressure drop, and mass with strong agreement between optimization and CFD validation.",
        problemStatement:
          "Direct CFD evaluation across the full geometry-material search space is computationally expensive. The project needed a practical way to identify feasible heat sink designs that maintain thermal safety while minimizing hydraulic penalty and mass.",
        problemFormulation: {
          equation: "min F(x,m) = [Rth(x,m), DeltaP(x), M(x,m)]",
          variables: [
            "x = [D, H, S, tb]",
            "m in {Aluminum, Silicon}",
          ],
          objective: "Minimize thermal resistance, pressure drop, and heat-sink mass simultaneously.",
          constraints: [
            "2 <= D <= 6 mm, 10 <= H <= 30 mm",
            "5 <= S <= 15 mm, 2 <= tb <= 6 mm",
            "Tbase <= Tmax and geometric feasibility constraints",
          ],
        },
        methodologyPoints: [
          "Generated DOE data using Latin Hypercube Sampling over diameter, fin height, spacing, base thickness, and material.",
          "Trained and benchmarked surrogate models (Polynomial, RBF, GPR, ANN) using RMSE/MAE/R2.",
          "Used best surrogates inside mixed-variable NSGA-II to obtain Pareto-optimal designs.",
          "Applied TOPSIS, LINMAP, and VIKOR to select representative compromise solutions.",
          "Validated selected solutions in ANSYS Fluent under a 10 W chip heat-load condition.",
        ],
        resultHighlights: [
          { label: "CFD Validation Error", value: "All key objectives remained below 6%", tone: "positive" },
          { label: "TOPSIS Selection", value: "Rth 0.686 K/W | Delta P 1.825 Pa | Mass 34.91 g", tone: "positive" },
          { label: "VIKOR Trade-off", value: "Lower Rth but higher Delta P and mass vs. balanced options", tone: "tradeoff" },
        ],
        figureSlots: {
          summary: p1Figures[0],
          problem: p1Figures[6],
          formulationLeft: p1Figures[7],
          formulationRight: p1Figures[8],
          methodology: p1Figures[1],
          pareto: p1Figures[2],
          resultsTopLeft: p1Figures[3],
          resultsTopRight: p1Figures[4],
          resultsBottom: p1Figures[5],
        },
        keyResults: [
          { metric: "TOPSIS (Rth / Delta P / Mhs)", value: "0.686 K/W / 1.825 Pa / 34.91 g" },
          { metric: "LINMAP (Rth / Delta P / Mhs)", value: "0.735 K/W / 1.849 Pa / 33.49 g" },
          { metric: "VIKOR (Rth / Delta P / Mhs)", value: "0.562 K/W / 2.491 Pa / 48.31 g" },
          { metric: "CFD validation error band", value: "< 6% across objectives" },
          { metric: "Best material trend", value: "Silicon selected across MCDM choices" },
        ],
        takeaways: [
          "Surrogate-assisted optimization significantly reduced compute cost while preserving reliability.",
          "NSGA-II captured the thermal-hydraulic-mass trade space with clear decision-ready Pareto solutions.",
          "CFD confirmation validated practical feasibility of selected designs under thermal constraints.",
        ],
        figures: p1Figures,
        media: p1Media,
        reportLink: {
          label: "Open Full Report",
          href: p1Report,
        },
      },
    },
  ],
  more: [
    {
      id: "p2",
      name: "ThermoMechanical Simulation & Design of a Bulge Forming Apparatus",
      description:
        "Abaqus-based thermo-mechanical study for a bulge-forming setup, combining Johnson-Cook material modeling, reaction-force evaluation, power estimation, and apparatus design sizing.",
      thumbnail: p2Preview,
      thumbnailPosition: "50% 30%",
      stack: "Abaqus, Thermo-Mechanical FEA",
      infoTags: ["Abaqus", "Johnson-Cook Model", "Metal Forming", "FEA"],
      summaryPoints: [
        "Evaluated bulge-forming behavior at two temperatures and two strain-rate conditions using axisymmetric FEA.",
        "Extracted operating load from reaction-force results and validated design sizing for a hydraulic-actuated setup.",
        "Estimated heating/forming power and consolidated part-level drawings for a practical apparatus concept.",
      ],
      tags: ["Abaqus", "FEA", "Manufacturing Design"],
      links: {
        details: p2Report,
        live: p2Report,
        repo: p2Report,
      },
      detailContent: {
        layout: "p2-structured",
        keywords: [
          { label: "Abaqus", important: true },
          { label: "Thermo-Mechanical FEA", important: true },
          { label: "Johnson-Cook Plasticity", important: true },
          { label: "Reaction Force Analysis", important: true },
          { label: "Hydraulic System Sizing", important: true },
          { label: "Power Estimation", important: true },
          { label: "Bulge Forming", important: true },
        ],
        summary:
          "This project develops and validates a bulge-forming apparatus workflow by combining analytical sizing, Abaqus simulation, and design calculations. The study evaluates forming response across temperature and strain-rate conditions, then translates the extracted force demands into hydraulic and mechanical design requirements.",
        problemStatement:
          "The challenge was to determine a realistic forming load and power requirement for a heated aluminum blank, then size an apparatus capable of delivering that load reliably while maintaining manufacturable geometry and practical operating conditions.",
        stepsDetails: [
          "Calculated tool-tip diameter and penetration depth for target bulge deformation.",
          "Defined Aluminum 6061 material with temperature and strain-rate dependent Johnson-Cook parameters.",
          "Built axisymmetric model in Abaqus and applied contact, BCs, and CAX4T coupled thermo-mechanical elements.",
          "Ran four operating cases using two temperatures (473 K, 673 K) and two strain rates (10^-3, 10^1 s^-1).",
          "Extracted maximum reaction force and selected operating load for apparatus sizing.",
          "Computed heating and forming power from process conditions and cycle assumptions.",
          "Sized hydraulic and lever-arm components, then prepared detail and assembly drawings.",
        ],
        materialModel: {
          name: "Johnson Cook Model",
          formulaImage: {
            src: p2Equation,
            title: "Johnson-Cook constitutive relation",
            scale: 1.0,
            maxHeight: "240px",
          },
          equation: "sigma_y = (A + B * epsilon_p^n) * (1 + C ln(epsilon_dot / epsilon_dot_0)) * [1 - ((T - Tref)/(Tmelt - Tref))^m]",
          notes: [
            "Material selected: Aluminum 6061 (temperature and strain-rate dependent forming behavior).",
            "Elastic constants: E = 68.9 x 10^9 Pa, nu = 0.33.",
            "Modeling approach balances fidelity and stable convergence for thermo-mechanical forming analysis.",
          ],
          constants: [
            { constant: "A", value: "324 x 10^6 Pa", parameter: "Yield stress" },
            { constant: "B", value: "114 x 10^6 Pa", parameter: "Strain hardening modulus" },
            { constant: "n", value: "0.42", parameter: "Strain hardening exponent" },
            { constant: "C", value: "0.002", parameter: "Strain-rate sensitivity coefficient" },
            { constant: "m", value: "1.34", parameter: "Thermal softening exponent" },
            { constant: "Tref", value: "298 K (25 C)", parameter: "Reference temperature" },
            { constant: "Tmelt", value: "855 K (582 C)", parameter: "Melting temperature" },
          ],
        },
        simulationSetup: [
          "Axisymmetric part definitions with Y-axis symmetry to reduce computational cost.",
          "Two-step process: holder-force application followed by punch stroke/deformation step.",
          "Frictional contact used for blank interactions, with rigid tooling assumptions for die/punch/holder.",
          "Target displacement driven from penetration calculation (U2 approximately 0.0095 m).",
          "Strain-rate-controlled punch velocity and step time tuned to avoid numerical instability.",
          "CAX4T coupled temperature-displacement elements used for thermal-forming response.",
        ],
        simulationCaseNote: "Case 1: Temperature 473 K and Strain Rate 10^-3 s^-1",
        reactionForceTable: [
          { case: "Case 1", temperature: "473", strainRate: "10^-3", maxForce: "7761.41" },
          { case: "Case 2", temperature: "473", strainRate: "10^1", maxForce: "7842.58", highlight: true },
          { case: "Case 3", temperature: "673", strainRate: "10^-3", maxForce: "4079.74" },
          { case: "Case 4", temperature: "673", strainRate: "10^1", maxForce: "4129.02" },
        ],
        selectedLoad: "7842.58 N (7.85 kN) based on Case 2",
        powerSummary: [
          { label: "Heating Power", value: "29.53 W", tone: "positive" },
          { label: "Forming Power", value: "78.43 W", tone: "positive" },
          { label: "Total Cycle Power", value: "108 W", tone: "positive" },
        ],
        designCalculationBlocks: [
          {
            title: "Hydraulic Cylinder Selection",
            paragraphs: [
              "To apply the required force, a hydraulic cylinder is selected because it provides high force at low speeds and is suitable for forming operations.",
              "The force applied by the hydraulic cylinder is given by F = P*A. Using a standard cylinder that can impart appropriate pressure, the required force can be generated.",
              "The following dimensions for the hydraulic cylinder are selected:",
            ],
            bullets: [
              "Bore Diameter (d) = 75 mm",
              "Cylinder Piston Area (A) = 4.42 x 10^-3 m^2",
              "Required Pressure (P) = 3.5 MPa",
              "Piston Stroke Length = 0.01 m (to ensure full punch depth of 0.095 m)",
            ],
          },
          {
            title: "Designing the Pivot Arm",
            paragraphs: [
              "The pivot arm transfers force from the hydraulic cylinder to the punch. As the pivot arm works like a lever, the force-balance equation is used for design.",
              "AISI 1020 Steel is selected for the pivot arm with a rectangular cross section beam for strength.",
            ],
          },
          {
            title: "Force Balance Equation",
            equation: "Fcylinder x L1 = Fpunch x L2",
            bullets: [
              "Fcylinder = force provided by hydraulic cylinder",
              "L1 = cylinder attachment distance from the pivot",
              "Fpunch = force provided by punch",
              "L2 = punch attachment distance from the pivot",
            ],
            lines: [
              "For balanced force distribution, use L1 = 0.09 m and L2 = 0.05 m.",
              "Fcylinder = (7.85 x 0.09) / 0.05 = 14.13 kN.",
              "Hence the hydraulic cylinder must provide at least 14.13 kN to complete the forming operation.",
              "Since P = F/A, required pressure is 3.19 MPa, which is below the selected 3.5 MPa rating.",
            ],
          },
        ],
        figureSlots: {
          concept: p2Figures[7] || { src: p2Preview, title: "Concept render of the bulge-forming apparatus" },
          setup: p2Figures[0],
          result1: p2Figures[1],
          result2: p2Figures[2],
          result3: p2Figures[3],
          result4: p2Figures[4],
          designDetails: p2Figures[5],
          designAssembly: p2Figures[6],
        },
        simulationVideo: {
          src: p2Video,
          title: "Bulge-forming simulation sequence",
          type: "video/mp4",
          playbackRate: 0.75,
        },
        takeaways: [
          "Peak forming load occurs at 473 K and high strain rate (10^1 s^-1), defining the design load case.",
          "Thermal softening at 673 K lowers load demand substantially, while higher strain rate increases resistance.",
          "Integrated simulation + sizing workflow produced a feasible apparatus concept backed by force and power calculations.",
        ],
        reportLink: {
          label: "Open Full Report",
          href: p2Report,
        },
      },
    },
    {
      id: "p3",
      name: "Design of a Bio-Inspired Hydrogen Powered Robot for Remote Terrain Exploration",
      description:
        "Image-focused CAD + rapid prototyping project for a hydrogen-themed bio-inspired microbot, including concept design, exploded assembly study, animation, and 3D printed validation.",
      thumbnail: p3Preview,
      thumbnailPosition: "50% 48%",
      stack: "CAD, 3D Printing, Prototype",
      infoTags: ["CAD", "3D Printing", "SolidWorks Animation", "Prototyping"],
      summaryPoints: [
        "Developed a microbot concept inspired by biological locomotion for remote-terrain exploration.",
        "Built CAD assemblies, exploded configurations, and motion animations to verify mechanism intent.",
        "Fabricated and reviewed a physical prototype to validate assembly and manufacturability.",
      ],
      tags: ["CAD", "3D Printing", "Prototype"],
      links: {
        details: p3Report,
        live: p3Report,
        repo: p3Report,
      },
      detailContent: {
        layout: "p3-structured",
        keywords: [
          { label: "Bio-Inspired Robot", important: true },
          { label: "Hydrogen Power Theme", important: true },
          { label: "CAD Modeling", important: true },
          { label: "Exploded Assembly", important: true },
          { label: "3D Printing (ABS)", important: true },
          { label: "Prototype Validation", important: true },
        ],
        summary:
          "This project focused on designing a hydrogen-themed bio-inspired microbot primarily through CAD development and physical prototyping. The scope prioritized visual design quality, mechanism decomposition, and build-ready geometry rather than deep analytical modeling.",
        prototypeOverview: [
          "The design approach started with a radial six-leg architecture to distribute loads symmetrically and keep the robot stable on uneven terrain. A modular CAD strategy was used so leg, servo-link, and base parts could be iterated independently while preserving assembly references.",
          "Clearance-driven joint design was prioritized to avoid interference during leg swing and to keep motion reliable after printing.",
        ],
        prototypeMethodology: [
          "Material focus: ABS-based prototyping for durability and impact tolerance during repeated assembly checks.",
          "Manufacturing constraint: geometry planned to stay within classroom 3D-printer build-volume limits.",
          "Assembly clarity: slot/hole fits and tolerances were tuned to reduce post-processing and improve alignment of moving joints.",
        ],
        animationOverview: [
          "SolidWorks assembly and motion tools were used to review exploded configuration and leg movement before fabrication.",
          "The animation pass helped verify part order, working clearances, & mechanism behavior in a visual, easy-to-communicate format.",
        ],
        figureSlots: {
          summaryVisual: p3Figures[0],
          prototypeLeft: p3Figures[1],
          prototypeRight: p3Figures[2],
          printedPrototype: p3Figures[3],
          drawing1: p3Figures[4],
          drawing2: p3Figures[5],
          drawing3: p3Figures[6],
        },
        animations: [
          {
            src: p3Videos[0] || "",
            title: "Exploded Assembly Animation",
            type: "video/mp4",
            playbackRate: 1.6,
          },
          {
            src: p3Videos[1] || "",
            title: "Working Motion Animation",
            type: "video/mp4",
            playbackRate: 1.6,
          },
        ],
        printedPrototypeNotes: [
          "Printed ABS parts required minor support cleanup and edge finishing before final fit-up.",
          "Assembly showed good modular alignment; hinge/joint points needed light tolerance tuning for smoother motion.",
        ],
        takeaways: [
          "The microbot architecture translated cleanly from concept CAD to printable prototype geometry.",
          "Exploded and motion visuals improved design communication and assembly clarity.",
        ],
        reportLink: {
          label: "Open Project Deck / Report",
          href: p3Report,
        },
      },
    },
    {
      id: "p4",
      name: "Explosion-Driven Actuation in Soft Robotics",
      description:
        "Explosion-driven soft actuator study combining simulation, mold design, silicone fabrication, and interval-based pneumatic testing for rapid high-force deployment use cases.",
      thumbnail: p4Preview,
      thumbnailPosition: "50% 42%",
      stack: "Soft Robotics, FEA, 3D Printing",
      infoTags: ["ANSYS", "Soft Robotics", "Creo Parameteric", "3D Printing"],
      summaryPoints: [
        "Modeled a chambered soft actuator and evaluated deformation, stress, strain, and thermal response under internal pressure loading.",
        "Built mold-oriented CAD, printed ABS tools, and cast silicone variants to validate manufacturability and actuation behavior.",
        "Integrated pneumatic hardware and Arduino-solenoid control to test timed pressure release in physical prototypes.",
      ],
      tags: ["Soft Robotics", "Simulation", "Prototype"],
      links: {
        details: p4Report,
        live: p4Report,
        repo: p4Report,
      },
      detailContent: {
        layout: "p4-structured",
        keywords: [
          { label: "Explosion-Driven Actuation", important: true },
          { label: "Soft Robotics", important: true },
          { label: "ANSYS Mechanical/Thermal", important: true },
          { label: "PTC Creo + 3D Printing", important: true },
          { label: "Arduino Solenoid Control", important: true },
        ],
        motivation: [
          "This work explores rapid internal-pressure actuation for soft robots in situations where conventional actuators are too slow or too bulky.",
          "The objective was a lightweight, high-power actuator pathway suitable for single-use or short-burst deployment scenarios.",
        ],
        applicationPoints: [
          "Rapid deployment systems such as life vests and emergency inflation devices.",
          "Jumping or ejection mechanisms for exploration robots.",
          "Rescue/disaster tools requiring high-force burst motion.",
          "Single-use medical expansion tools for blockage-clearing concepts.",
        ],
        methodologySteps: [
          "Selected Ecoflex silicone actuator concept with hollow chamber and inlet constraints.",
          "Applied hyperelastic material modeling and pressure loading workflow in ANSYS.",
          "Evaluated principal stress, principal strain, deformation, temperature rise, and heat flux.",
          "Developed CAD geometry for split mold fabrication and silicone casting.",
          "3D printed ABS mold parts and tested multiple silicone options before final selection.",
          "Validated actuation using manual pressure first, then interval control via Arduino + solenoid.",
        ],
        prototypeSummary: [
          "A mold-first CAD approach was used so the soft actuator could be fabricated in a repeatable way rather than only simulated.",
          "Design decisions were driven by manufacturability, sealing quality, and reliable chamber inflation behavior.",
        ],
        prototypeDetails: [
          "Bisected mold strategy was used to simplify printing and demolding of the internal cavity.",
          "ABS printed parts were used as tooling for silicone casting and iterative fit checks.",
          "Ecoflex 00-10, Ecoflex 00-30, and Mold Star trials were compared for stiffness and response.",
          "A support frame was added to improve alignment during final assembly of the full hollow model.",
        ],
        simulationSummary: [
          "Simulations used a pressure ramp and transient thermal boundary conditions to approximate burst-like loading behavior.",
          "The analysis tracked deformation growth and stress-strain trend while checking thermal safety margin in the actuation window.",
        ],
        boundaryConditions: [
          "Internal pressure ramp: 30,000 Pa over 1 s",
          "Fixed supports at inlet locations",
          "Initial temperature: 200 C",
          "External convection: 22 C",
          "Heat generation: 1000 W",
          "Time step: 0.001 s (1 s total)",
        ],
        resultHighlights: [
          { label: "Peak Deformation", value: "~0.08 m at 30 kPa loading", tone: "positive" },
          { label: "Peak Principal Stress", value: "~3.88 MPa (within elastic range)", tone: "positive" },
          { label: "Thermal Response", value: "~70 C peak, heat flux ~15,000 W/m2", tone: "tradeoff" },
        ],
        moldSummary: [
          "Casting trials showed that stiffer silicones reduced desired compliance, so a softer blend was preferred for visible actuation.",
          "Post-cure handling and mold release observations were used to refine geometry and assembly stability.",
        ],
        assemblySummary: [
          "The final setup combined compressed air, solenoid valving, and Arduino timing control for repeat interval actuation tests.",
          "Physical trials at multiple pressure levels were used to compare displacement trend and repeatability.",
        ],
        setupComments: [
          "Compressed-air regulation and tubing were set up to deliver controlled pulses to the silicone chamber without pressure shock.",
          "The solenoid valve was switched through an Arduino relay line for consistent timing and repeatable actuation cycles.",
          "Leak checks and seal checks were completed before each run to avoid measurement drift from pressure loss.",
        ],
        assemblyCode: [
          "// Relay-driven pulse control for pneumatic actuation",
          "const int RELAY_PIN = 7; // Relay module connected to digital pin 7",
          "",
          "void setup() {",
          "  pinMode(RELAY_PIN, OUTPUT);",
          "  digitalWrite(RELAY_PIN, LOW); // Keep valve off initially",
          "}",
          "",
          "void loop() {",
          "  digitalWrite(RELAY_PIN, HIGH); // Valve ON: pressurize chamber",
          "  delay(3000);",
          "",
          "  digitalWrite(RELAY_PIN, LOW); // Valve OFF: release/hold interval",
          "  delay(5000);",
          "}",
        ],
        figureSlots: {
          motivationTop: p4Figures[0],
          motivationBottom: p4Figures[1],
          modelLeft: p4Figures[2],
          modelCenter: p4Figures[3],
          modelRight: p4Figures[4],
          simulationLeft: p4Figures[5],
          simulationRight: p4Figures[6],
          result1: p4Figures[7],
          result2: p4Figures[8],
          result3: p4Figures[9],
          result4: p4Figures[10],
          moldLeft: p4Figures[11],
          moldRight: p4Figures[12],
          moldBottom: p4Figures[13],
          assemblyRig: p4Figures[14],
          assemblyCloseup: p4Figures[15],
        },
        assemblyVideo: {
          src: p4Videos[0] || "",
          title: "Interval-based Pneumatic actuation test",
          type: "video/mp4",
          playbackRate: 1.15,
        },
        takeaways: [
          "Explosion-inspired rapid pressure actuation is feasible for short-duration high-force soft robotics tasks.",
          "Simulation and fabrication results align on strong deformation capability with manageable stress levels.",
          "Material selection and thermal margin are key constraints for reliable repeated operation.",
          "A mold-first prototype workflow accelerated concept-to-test validation for the actuator geometry.",
        ],
        reportLink: {
          label: "Open Full Report",
          href: p4Report,
        },
      },
    },
  ],
};

export default projects;

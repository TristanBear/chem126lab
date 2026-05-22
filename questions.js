// Quiz questions sourced from Post lab 2.pdf
// Covers: chromatography, IR/FTIR/ATR, electroanalysis recap, choosing an analytical technique.

const QUESTIONS = [
  // ============ CHROMATOGRAPHY ============
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Separation techniques are useful when:",
    choices: [
      "The analyte and interferences are identical in every way",
      "There is a significant difference in at least one chemical or physical property between the analyte and the interferences",
      "Only when ions are involved",
      "Only when gases are involved"
    ],
    answer: 1,
    explain: "Separation techniques exploit a difference in some chemical or physical property between analyte and interference (size, density, partitioning, charge, volatility, etc.)."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which separation technique is based on differences in SIZE?",
    choices: [
      "Distillation",
      "Centrifugation",
      "Filtration / dialysis / size-exclusion chromatography",
      "Precipitation"
    ],
    answer: 2,
    explain: "Filtration, dialysis, and size-exclusion chromatography are size-based separations. Centrifugation uses mass/density; distillation uses change of physical state."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which separation technique relies on a CHANGE IN CHEMICAL STATE?",
    choices: [
      "Filtration",
      "Distillation",
      "Precipitation, electrodeposition, or volatilization",
      "Centrifugation"
    ],
    answer: 2,
    explain: "Precipitation, electrodeposition, and volatilization separate species by converting them to a different chemical form/phase."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Partition chromatography is a type of:",
    choices: ["Gas-only chromatography", "Liquid chromatography", "Mass spectrometry", "Distillation"],
    answer: 1,
    explain: "The slides list partition, adsorption (liquid-solid), ion exchange, and size exclusion as the main types of LIQUID chromatography."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "As column length is increased in column chromatography, band separation:",
    choices: [
      "Stays exactly the same",
      "Improves, but band broadening also increases",
      "Decreases linearly",
      "Becomes zero"
    ],
    answer: 1,
    explain: "Longer columns give more theoretical plates and better band separation, but bands also broaden as they travel further."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Ion exchange is best described as:",
    choices: [
      "An irreversible chemical reaction",
      "A reversible chemical reaction where a solution ion swaps with a similarly charged ion attached to an immobile solid resin",
      "A purely physical filtering by size",
      "A type of distillation"
    ],
    answer: 1,
    explain: "Ion exchange is a reversible reaction in which an ion from solution exchanges with a like-charged ion bound to a solid resin."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The ionizable group on a STRONG ACID cation-exchange resin is:",
    choices: ["–COOH", "–SO3H (sulfonic acid)", "–NH2", "–OH"],
    answer: 1,
    explain: "Strong-acid cation resins use sulfonic acid (–SO3H) groups; H+ is available for exchange over the entire pH range."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The ionizable group on a WEAK ACID cation-exchange resin is:",
    choices: [
      "–SO3H",
      "–COOH (carboxylic acid)",
      "Quaternary ammonium",
      "Secondary amine"
    ],
    answer: 1,
    explain: "Weak-acid cation resins use –COOH groups; they behave like weak organic acids — higher affinity for H+ and easier to regenerate to the H-form."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Strong base anion-exchange resins:",
    choices: [
      "Are weakly ionized and only work near neutral pH",
      "Are highly ionized and usable over the entire pH range; can convert an acid solution to pure water",
      "Cannot be regenerated",
      "Only work above pH 12"
    ],
    answer: 1,
    explain: "Strong base anion resins (typically quaternary ammonium) are fully ionized and work over the whole pH range — combined with strong-acid cation resins they can deionize water."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Weak base anion-exchange resins show MINIMUM exchange capacity at:",
    choices: ["Below pH 2", "At any pH equally", "Above pH ~7", "Exactly pH 5"],
    answer: 2,
    explain: "Weak base resins' ionization is strongly pH-dependent — exchange capacity drops sharply above pH ~7 (the basic group is no longer protonated)."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Size-exclusion chromatography (SEC) separates molecules by:",
    choices: [
      "Charge",
      "Partitioning into a polar stationary phase",
      "Molecular size, via a sieving mechanism (not partitioning)",
      "Chemical affinity for ligands"
    ],
    answer: 2,
    explain: "SEC separates by molecular size — large molecules are excluded from the pores and elute first; small molecules wander throughout the pore maze and elute last."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In SEC, which species elutes FIRST?",
    choices: [
      "The smallest molecules",
      "Molecules larger than the average pore size (excluded; not retained)",
      "Only charged species",
      "Only neutral species"
    ],
    answer: 1,
    explain: "Excluded (larger-than-pore) molecules cannot enter the pores and travel only in the void volume — they elute first."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Gel filtration is size-exclusion chromatography that uses:",
    choices: ["Hydrophilic packing", "Hydrophobic packing", "Ion-exchange beads", "Reversed-phase silica"],
    answer: 0,
    explain: "Gel FILTRATION uses hydrophilic packing (aqueous mobile phase) — typically for biomolecules. Gel PERMEATION uses hydrophobic packing (organic mobile phase) — typically for polymers."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Gel permeation is size-exclusion chromatography that uses:",
    choices: ["Hydrophilic packing", "Hydrophobic packing", "Anion-exchange beads", "Bare silica"],
    answer: 1,
    explain: "Gel permeation uses hydrophobic packing (organic mobile phase) — common for synthetic polymer fingerprinting."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which of the following is a DISADVANTAGE of SEC?",
    choices: [
      "Excellent resolution",
      "Relatively low resolution, long analysis times, and expensive columns",
      "It cannot be used as a sample preparation step",
      "It cannot separate molecular-weight fractions"
    ],
    answer: 1,
    explain: "Disadvantages of SEC: relatively low resolution, long analyses, expensive columns, and results that are sometimes hard to interpret. Advantages: separates by MW, good for sample prep / fingerprinting."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which of the following is the best use case for ION-EXCHANGE chromatography?",
    choices: [
      "Separating gases by polarity",
      "Preparing high-purity water; separating and purifying metals (e.g. U from other actinides)",
      "Drying organic solvents",
      "Imaging single cells"
    ],
    answer: 1,
    explain: "Ion exchange shines for water deionization, removing/concentrating charged species, and analytical separations of metals or proteins."
  },

  // ============ IR / FTIR / ATR ============
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Infrared spectroscopy is most useful for:",
    choices: [
      "Determining isotopic mass directly",
      "Investigating the structure of organic compounds and giving qualitative (and some quantitative) information on molecular species",
      "Counting individual nuclei",
      "Measuring atomic number"
    ],
    answer: 1,
    explain: "IR probes vibrational modes — it is one of the most useful techniques for identifying functional groups and probing organic structure."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The Jacquinot (throughput) advantage of FTIR comes from:",
    choices: [
      "Use of multiple detectors at once",
      "Few optics and no slits, giving high intensity at the detector",
      "Use of a He–Ne laser for calibration",
      "Simultaneous measurement of all wavelengths"
    ],
    answer: 1,
    explain: "FTIR has no dispersing slits and few optical elements, so much more light reaches the detector — the Jacquinot (throughput) advantage."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The Fellgett (multiplex) advantage of FTIR comes from:",
    choices: [
      "High light throughput",
      "Simultaneously measuring every spectral element, saving time",
      "Using a He–Ne laser for calibration",
      "Having a deeper sample compartment"
    ],
    answer: 1,
    explain: "Fellgett (multiplex) advantage: every wavenumber is collected at every instant of the interferogram, so a full spectrum is acquired in one scan."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The Connes (precision) advantage of FTIR is due to:",
    choices: [
      "High light throughput",
      "Multiplex acquisition",
      "Use of a He–Ne laser for internal wavelength calibration and mirror-velocity control",
      "Use of a black-body source"
    ],
    answer: 2,
    explain: "The He–Ne laser inside an FTIR controls the mirror motion and provides a built-in wavelength standard — giving the high wavenumber precision known as the Connes advantage."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A strong, broad IR absorption in the 3200–3600 cm-1 region is most diagnostic for:",
    choices: ["C=C", "O–H (and N–H)", "C–Cl", "C–O"],
    answer: 1,
    explain: "O–H and N–H stretches fall in the ~3200–3600 cm-1 region. O–H of alcohols/acids is broad due to hydrogen bonding."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A strong IR absorption near 1700 cm-1 is most diagnostic for:",
    choices: ["C=O", "O–H", "C–H", "C–N"],
    answer: 0,
    explain: "Carbonyl (C=O) stretches dominate the ~1650–1820 cm-1 region — a key indicator of acids, esters, ketones, aldehydes, amides, anhydrides."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Which IR sampling technique is best for OPAQUE or thick samples and for aqueous solutions?",
    choices: [
      "Standard transmission",
      "Attenuated Total Reflectance (ATR)",
      "KBr pellet only",
      "Nujol mull only"
    ],
    answer: 1,
    explain: "ATR requires little to no sample prep and is well suited to opaque, thick, or aqueous samples — the IR probes only the surface ~ a few µm via an evanescent wave."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "In ATR, the part of the IR field that actually probes the sample is:",
    choices: [
      "A transmitted IR beam passing fully through the sample",
      "An evanescent wave (near-field standing wave) that decays exponentially from the crystal surface into the sample",
      "Visible light reflected from the sample",
      "A focused electron beam"
    ],
    answer: 1,
    explain: "An evanescent wave is a near-field standing wave with intensity that decays exponentially with distance from the crystal/sample interface; it probes only the surface layer."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The depth of penetration in ATR depends on:",
    choices: [
      "Wavelength, refractive indices of the crystal and sample, and angle of incidence",
      "Only sample mass",
      "Only sample color",
      "The volume of the IR cell"
    ],
    answer: 0,
    explain: "Penetration depth in ATR is a function of wavelength λ, refractive indices n1 (crystal) and n2 (sample), and the angle of incidence θ."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A higher-refractive-index ATR crystal (e.g. Ge, n≈4.0) versus ZnSe (n≈2.4) gives:",
    choices: [
      "Deeper sample penetration",
      "Shallower sample penetration",
      "Identical penetration at every wavenumber",
      "No spectrum at all"
    ],
    answer: 1,
    explain: "Higher crystal refractive index → shallower penetration depth. At 1000 cm-1, Ge gives ~0.66 µm penetration vs ZnSe's ~2.01 µm."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The penetration depth in ATR is defined as the distance at which the electric field falls to:",
    choices: [
      "Half its surface value",
      "e^-1 (~37%) of its surface value",
      "One tenth of its surface value",
      "Zero"
    ],
    answer: 1,
    explain: "dp is defined as the distance from the surface at which the evanescent field amplitude drops to 1/e (~37%) of its value at the boundary."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Which of the following does NOT directly affect ATR signal strength?",
    choices: [
      "Number of reflections inside the crystal",
      "Quality of contact between the sample and the crystal",
      "Wavelength of the IR beam",
      "The color of the room lights"
    ],
    answer: 3,
    explain: "ATR signal depends on wavelength, refractive indices, angle of incidence, number of reflections, and sample contact quality — not on ambient lighting."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Inside an FTIR spectrometer, the He–Ne laser is used to:",
    choices: [
      "Act as the IR source",
      "Control the velocity of the moving mirror and provide internal wavelength calibration",
      "Heat the sample",
      "Cool the detector"
    ],
    answer: 1,
    explain: "The He–Ne laser monitors the mirror position/velocity in the interferometer and provides a precise wavelength reference — the source of the Connes precision advantage."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An IR spectrum shows a strong, broad O–H absorption AND a strong C=O near 1710 cm-1. The most likely functional-group class is:",
    choices: ["Alcohol", "Carboxylic acid", "Ether", "Nitrile"],
    answer: 1,
    explain: "The combination of a broad O–H stretch (often very broad, ~2500–3300 cm-1 for acids) and a C=O near 1700 cm-1 is the textbook signature of a carboxylic acid."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A sharp IR absorption near ~2200 cm-1 typically indicates:",
    choices: ["C–H", "C≡N or C≡C", "C=O", "N–H"],
    answer: 1,
    explain: "Triple-bond stretches (C≡N nitriles, C≡C alkynes) fall in the relatively quiet 2100–2260 cm-1 region."
  },

  // ============ ELECTROANALYSIS RECAP ============
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Any potentiometric experiment requires at minimum:",
    choices: [
      "Only one working electrode",
      "Two electrodes: a reference electrode and an indicator (working) electrode",
      "Three working electrodes",
      "No electrodes — just a buret"
    ],
    answer: 1,
    explain: "Potentiometry uses a reference electrode of constant known potential and an indicator electrode whose potential depends on analyte activity."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Which of the following is NOT a property of an IDEAL reference electrode?",
    choices: [
      "Potential is well known and constant",
      "Returns to its original potential after small currents are drawn",
      "Responds rapidly to changes in analyte activity",
      "Obeys the Nernst equation"
    ],
    answer: 2,
    explain: "An ideal reference electrode is INSENSITIVE to the analyte — it must NOT respond to analyte activity. That's the indicator electrode's job."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The 'asymmetry potential' of a glass pH electrode is:",
    choices: [
      "Always exactly zero by construction",
      "A small residual potential due to differences between the two sides of the membrane, which should be minimized and stay constant",
      "The same as the diffusion potential",
      "Exactly canceled by every calibration"
    ],
    answer: 1,
    explain: "Even with identical solutions on both sides, real glass membranes show a small asymmetry potential. A good electrode keeps it small and constant; calibration accounts for the rest."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The ALKALINE error in pH measurement using a glass electrode is caused by:",
    choices: [
      "High [H+]",
      "High concentrations of alkali ions (e.g. Na+) replacing H+ in the outer gel layer",
      "Membrane dehydration",
      "A loose pH-meter cable"
    ],
    answer: 1,
    explain: "At very high pH (low H+), the glass starts responding to other singly-charged cations (especially Na+) that ion-exchange in the outer gel layer — making the measured pH read low."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The ACID error in glass-electrode pH measurement is observed at:",
    choices: ["pH > 12", "pH < ~2", "pH 7 exactly", "Any neutral pH"],
    answer: 1,
    explain: "Below about pH 2, the membrane no longer follows the Nernst slope exactly — partly due to absorption of acid molecules into the gel layer, which lowers the H+ activity seen by the membrane."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The 'low-ionic-strength error' for dilute HCl arises because:",
    choices: [
      "H+ and Cl- have equal mobilities",
      "H+ diffuses about five times faster than Cl-, producing a junction potential across the boundary",
      "HCl crystallizes on the membrane",
      "The buffer evaporates"
    ],
    answer: 1,
    explain: "In dilute HCl, H+ diffuses much faster than Cl- (about 5×), which produces a non-negligible liquid-junction potential that biases the pH measurement."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The membrane in a solid-state fluoride ion-selective electrode is typically:",
    choices: [
      "Silicate glass",
      "A single crystal (e.g. LaF3, often doped with Eu2+)",
      "A liquid ion-exchanger",
      "A bare Pt wire"
    ],
    answer: 1,
    explain: "The F- ISE uses a LaF3 single-crystal membrane (typically Eu2+-doped to introduce vacancies that conduct F-). Potential is set by ion exchange of F- at the crystal surface."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Why is TISAB (Total Ionic Strength Adjustment Buffer) added before a fluoride ISE measurement?",
    choices: [
      "To adjust the pH only",
      "To fix the ionic strength, buffer pH near 5–5.5, and chelate Al(III)/Fe(III) so that free fluoride is released",
      "To sterilize the sample",
      "To precipitate the fluoride"
    ],
    answer: 1,
    explain: "TISAB does three jobs: high ionic strength (so activity coefficients are roughly equal across samples and standards), pH buffer near 5–5.5, and chelation of Al/Fe to free fluoride from complexes."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Selectivity in a single-crystal ISE membrane comes from:",
    choices: [
      "The color of the crystal",
      "Ions matching the size and charge requirements of the defect sites in the crystal lattice",
      "Only the temperature of the room",
      "The size of the cell"
    ],
    answer: 1,
    explain: "Selectivity in crystalline ISEs is dictated by how well candidate ions fit the lattice defects through which charge migrates — size and charge must match."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The typical working concentration range of an ion-selective electrode is approximately:",
    choices: [
      "1 M to 10-2 M only",
      "0.1–1 M (top) down to about 10-5–10-10 M (bottom)",
      "10 M to 10-100 M",
      "Exactly 1 µM only"
    ],
    answer: 1,
    explain: "Per the slides, most ISEs work from a maximum of about 0.1–1 M down to a lower limit of roughly 10-5 to 10-10 M, depending on the electrode."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In a single-compartment voltammetry cell shown in the slides, the counter electrode is typically:",
    choices: [
      "A glass pH electrode",
      "A Pt wire",
      "A LaF3 crystalline membrane",
      "Another Ag/AgCl reference"
    ],
    answer: 1,
    explain: "A Pt wire is the standard counter (auxiliary) electrode in a single-compartment cell, with a separate Ag/AgCl reference and the working electrode."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "On a cyclic voltammogram, Epc and Epa refer to:",
    choices: [
      "Anodic and cathodic peak HEIGHTS",
      "The cathodic peak POTENTIAL and the anodic peak POTENTIAL respectively",
      "The scan rate and frequency",
      "The cell volume and area"
    ],
    answer: 1,
    explain: "Epc = potential where the cathodic peak appears; Epa = potential where the anodic peak appears. ipc and ipa are the corresponding peak currents."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "A major advantage of anodic stripping voltammetry (ASV) over coulometry or electroplating for trace metal analysis is:",
    choices: [
      "Larger sample volumes are required",
      "Unprecedented sensitivity — concentrations as low as ~10-12 M can be measured",
      "It cannot be used at ultratrace levels",
      "It requires no working electrode"
    ],
    answer: 1,
    explain: "ASV preconcentrates the metal on the electrode, then strips it off in a fast anodic scan — giving detection limits down to ~10-12 M, comparable to graphite-furnace AAS and better than flame AAS."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Why does cyclic voltammetry of ascorbic acid in fruit juice show only an anodic peak (no reduction peak on reverse scan)?",
    choices: [
      "Ascorbic acid is not electroactive",
      "The electrochemical oxidation of ascorbic acid is irreversible — the oxidized product does not reduce back on the timescale of the scan",
      "There is no reference electrode used",
      "Only NMR can detect ascorbic acid"
    ],
    answer: 1,
    explain: "Ascorbic acid oxidizes irreversibly to dehydroascorbic acid (with rapid follow-up chemistry), so the reverse cathodic peak is absent — yet the anodic peak height still tracks concentration."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In linear sweep voltammetry of an unstirred solution, the current eventually:",
    choices: [
      "Increases without limit",
      "Decreases, because diffusion alone cannot maintain a constant supply of analyte to the electrode",
      "Stays exactly constant indefinitely",
      "Becomes negative regardless of scan direction"
    ],
    answer: 1,
    explain: "Without stirring, the diffusion layer thickens with time, so the rate of analyte arrival at the electrode falls and the current eventually decreases."
  },

  // ============ CHOOSING AN ANALYTICAL TECHNIQUE ============
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which sequence describes the analytical approach to solving a problem?",
    choices: [
      "Buy any kit and run it",
      "Identify and define the problem → design the experiment → conduct it and gather data → analyze the data → propose a solution",
      "Mix everything together and see what happens",
      "Always use the cheapest method, then quit"
    ],
    answer: 1,
    explain: "The slides list five steps: identify/define the problem, design the experimental procedure, conduct the experiment and gather data, analyze the data, propose a solution."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which of the following is NOT a question to ask when choosing an analytical technique?",
    choices: [
      "Is my analyte organic, inorganic, or a macromolecule?",
      "Do I need quantitative or qualitative data?",
      "What is the concentration of my analyte?",
      "What is the analyst's astrological sign?"
    ],
    answer: 3,
    explain: "Relevant questions: analyte type, qualitative vs quantitative, concentration, sample amount, separation needed, speciation vs total. Astrology is not on the list."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For a NON-volatile organic analyte that is easily destroyed by heat, the best chromatographic technique to use is:",
    choices: ["GC", "HPLC", "SEC for proteins", "Ion exchange for amino acids"],
    answer: 1,
    explain: "HPLC is the chromatographic technique of choice when the analyte is non-volatile or thermally labile (GC requires volatility and thermal stability)."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For a VOLATILE organic analyte that is thermally stable, the best chromatographic technique to use is:",
    choices: ["GC", "HPLC", "Size-exclusion chromatography", "Ion chromatography"],
    answer: 0,
    explain: "GC is the natural choice when the analyte can be vaporized without decomposition — fast, high resolution, lots of detector options."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which of the following is the best technique to use for QUALITATIVE structural information about an organic molecule?",
    choices: ["IR alone", "NMR (with MS as a partner)", "Flame AAS", "ICP-OES"],
    answer: 1,
    explain: "NMR and MS give the deepest structural information for organics. IR is great for functional-group identification but doesn't give full structure."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "IR spectroscopy of an organic analyte is best used to:",
    choices: [
      "Determine exact molecular weight",
      "Identify functional groups",
      "Determine isotope ratios",
      "Count individual metal atoms"
    ],
    answer: 1,
    explain: "Per the decision flow, IR is the qualitative tool of choice for identifying functional groups in organic analytes."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "If you need the TOTAL amount of an inorganic element in a sample, the best technique class to use is:",
    choices: [
      "Spectroscopic methods (FAAS, GFAAS, ICP-OES, ICP-MS)",
      "Potentiometry only",
      "Voltammetry only",
      "Size-exclusion chromatography"
    ],
    answer: 0,
    explain: "Spectroscopic methods quantify the total elemental amount. Electroanalysis is the right tool when you also need speciation (which oxidation state, complexed vs free)."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "If you need SPECIATION information for an inorganic analyte (e.g. oxidation state, free vs complexed), the best technique class to use is:",
    choices: [
      "ICP-OES",
      "Electroanalytical methods (potentiometry / voltammetry)",
      "Combustion analysis",
      "Bomb calorimetry"
    ],
    answer: 1,
    explain: "Electroanalysis can distinguish oxidation states and free vs complexed forms — spectroscopic methods typically report only the total."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Flame AAS is best when you need:",
    choices: [
      "Multielement isotopic analysis at trace level",
      "High-throughput, low-cost analysis of a few elements; easy to use and widely accepted",
      "Identification of functional groups",
      "Determination of oxidation state"
    ],
    answer: 1,
    explain: "Flame AAS: easy, widely accepted, low cost, high throughput when only a few elements are needed. Not great for huge multielement panels or ultratrace work."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Compared with Flame AAS, GFAAS (graphite-furnace AAS) generally offers:",
    choices: [
      "Lower detection limits (better sensitivity) but lower sample throughput",
      "Higher throughput and higher detection limits",
      "True multielement multiplexed analysis",
      "Speciation information"
    ],
    answer: 0,
    explain: "GFAAS pre-concentrates a small sample in a heated graphite tube — better sensitivity (lower LOD) than flame, but slower per sample."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "ICP-OES is the best choice when you need:",
    choices: [
      "Functional-group information",
      "Multielement analysis with exceptional throughput (~40 elements per minute per sample)",
      "Single-element analysis only once a year",
      "Isotopic ratios specifically"
    ],
    answer: 1,
    explain: "ICP-OES excels at multielement analysis with very high throughput. For isotopic info or ultratrace metals you go to ICP-MS."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "ICP-MS is the best choice when you need:",
    choices: [
      "Functional-group identification of an organic molecule",
      "Trace and ultratrace multielement analysis, and the ability to do isotopic analysis",
      "The color of a solution",
      "The density of a solid"
    ],
    answer: 1,
    explain: "ICP-MS provides exceptional multielement capability at trace/ultratrace concentrations and is the workhorse for isotopic analysis."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For separating PROTEINS by molecular size, the best chromatographic technique to use is:",
    choices: ["GC", "Size-exclusion chromatography / gel filtration", "ICP-MS", "IR spectroscopy"],
    answer: 1,
    explain: "Gel filtration (aqueous SEC) is the standard chromatographic mode for size-based protein separation and as a sample-prep step before MS or activity assays."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "The slide's remark that 'today's instrument might be considered a museum piece tomorrow' implies that students should:",
    choices: [
      "Memorize only one current model",
      "Learn the underlying PRINCIPLES of instrumentation, because principles seldom change even as instruments evolve",
      "Avoid using any instruments",
      "Buy the newest hardware every year"
    ],
    answer: 1,
    explain: "Instruments evolve quickly (~3-year model cycle), but the physics/chemistry underneath does not. Mastering principles makes you adaptable across generations of hardware."
  },

  // ============ MORE CHROMATOGRAPHY ============
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The general OBJECTIVE of column chromatography is:",
    choices: [
      "To make a sample colorless",
      "To separate the components of a mixture as they pass through the column at different rates due to differential interactions with the stationary phase",
      "To convert ions into neutral atoms",
      "To distill volatile species into a condenser"
    ],
    answer: 1,
    explain: "Column chromatography separates the components of a mixture by exploiting their differential interaction with the stationary phase as the mobile phase carries them through — species elute at different times."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In PARTITION liquid chromatography, separation is driven by:",
    choices: [
      "Different sizes of the analyte molecules",
      "Different distribution (partitioning) of analytes between the mobile and stationary phases",
      "Different charges of the analytes",
      "Different boiling points of the analytes"
    ],
    answer: 1,
    explain: "Partition chromatography separates by the equilibrium distribution of an analyte between two phases — typically liquid mobile and a liquid-coated stationary phase."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Adsorption (liquid–solid) chromatography separates analytes based on:",
    choices: [
      "Their solubility in a supercritical fluid",
      "Their differential adsorption onto a solid stationary phase (often a polar oxide like silica or alumina)",
      "Their ionic radius",
      "Their mass spectrum"
    ],
    answer: 1,
    explain: "Adsorption (liquid–solid) chromatography uses a solid stationary phase; analytes are retained according to how strongly they adsorb to it."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Ion-exchange chromatography of PROTEINS chiefly exploits differences in:",
    choices: [
      "Mass alone",
      "Net charge of the proteins at the chosen pH and their differing affinities for the resin",
      "Vapor pressure",
      "Refractive index of each protein"
    ],
    answer: 1,
    explain: "Proteins carry net positive or negative charge depending on pH vs pI; ion-exchange resins retain proteins selectively by these net-charge interactions."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Regenerating a WEAK-acid cation resin back to its H-form requires:",
    choices: [
      "More acid than regenerating a strong-acid resin",
      "Less acid than regenerating a strong-acid resin (the weak-acid resin has higher affinity for H+)",
      "Exactly the same amount of acid",
      "No acid at all — only heat"
    ],
    answer: 1,
    explain: "Per the slides, weak-acid resins have much higher affinity for H+, so regeneration to the H-form needs less acid than for the strong-acid resin."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The exchange CAPACITY of a weak-acid cation resin:",
    choices: [
      "Is independent of pH",
      "Depends in part on solution pH (only ionized –COO- groups exchange)",
      "Increases at very low pH",
      "Is the same as that of a strong-acid resin"
    ],
    answer: 1,
    explain: "Weak-acid resins (-COOH) ionize only above a certain pH, so their exchange capacity is strongly pH-dependent."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "A combined STRONG-ACID cation + STRONG-BASE anion resin bed is used industrially primarily to:",
    choices: [
      "Acidify water",
      "Produce deionized (high-purity) water by removing both cationic and anionic species",
      "Sterilize water against microbes",
      "Add Na+ and K+ to water"
    ],
    answer: 1,
    explain: "Cation resin in H-form + anion resin in OH-form together exchange all dissolved cations and anions and recombine them as water — producing demineralized / deionized water."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Polystyrene standards of known molecular weight are commonly run in SEC because they:",
    choices: [
      "Are universal tracers for every chromatographic mode",
      "Cover a wide MW range and serve as calibration standards for SEC (especially gel permeation)",
      "Are charged molecules ideal for ion exchange",
      "Strongly absorb in the IR fingerprint region"
    ],
    answer: 1,
    explain: "Narrow-distribution polystyrene standards across many decades of MW are used to calibrate retention time against molecular weight in gel-permeation SEC."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "SEC is most useful as a SAMPLE-PREP step because:",
    choices: [
      "It always gives the highest resolution of any LC mode",
      "It can quickly separate gross molecular-weight fractions before downstream analysis (e.g. removing salts or aggregates)",
      "It is the cheapest LC technique",
      "It requires no mobile phase"
    ],
    answer: 1,
    explain: "SEC has modest resolution but is excellent for cleanly removing high- or low-MW species (e.g. desalting proteins, sizing fractions) before MS, activity assays, or HPLC."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In SEC, a molecule that is APPRECIABLY SMALLER than the average pore size will:",
    choices: [
      "Be excluded and elute in the void volume",
      "Penetrate the pore maze and be retained the longest among species smaller than fully excluded",
      "React chemically with the packing",
      "Not elute at all"
    ],
    answer: 1,
    explain: "Small molecules wander through the pore maze, so they spend the longest in the column and elute LAST. Excluded (oversized) molecules elute first."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "One common use of SEC explicitly mentioned in the slides is:",
    choices: [
      "Single-element atomic analysis",
      "Fingerprint analysis of synthetic polymers (MW distribution)",
      "Determining oxidation states of metals",
      "Quantifying ions in drinking water"
    ],
    answer: 1,
    explain: "The slides list 'fingerprint analysis of polymers' as a major SEC application — characterizing molecular-weight distribution of synthetic materials."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which of the following is the best LC mode to use for separating a mixture of inorganic ANIONS (e.g. F-, Cl-, NO3-)?",
    choices: [
      "Size-exclusion chromatography",
      "Ion-exchange (ion) chromatography",
      "Partition chromatography on bare silica",
      "Reversed-phase only at neutral pH"
    ],
    answer: 1,
    explain: "Inorganic ions are routinely separated by ion chromatography — a specialized form of ion-exchange LC with conductivity detection."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In gel PERMEATION chromatography (GPC), the mobile phase used is typically:",
    choices: [
      "An aqueous salt solution",
      "An organic solvent (because the packing is hydrophobic)",
      "A mass spectrometer ion source",
      "A volatile gas only"
    ],
    answer: 1,
    explain: "Gel permeation uses a hydrophobic packing and an organic mobile phase — common for synthetic polymer characterization. Gel filtration uses aqueous mobile phase with hydrophilic packing for biomolecules."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In the slide example, COLUMN chromatography of a TOTAL LIPID EXTRACT is performed to:",
    choices: [
      "Convert lipids to ions",
      "Separate lipid classes from one another before downstream characterization or use",
      "Polymerize the lipids",
      "Measure their conductivity"
    ],
    answer: 1,
    explain: "Total lipid extracts are complex mixtures; column chromatography is used to separate them into lipid classes (e.g. neutral lipids, phospholipids) before further analysis."
  },

  // ============ MORE IR / FTIR / ATR ============
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Two strong IR absorptions near ~1550 cm-1 AND ~1350 cm-1 are most diagnostic of:",
    choices: [
      "A simple carbonyl group",
      "A nitro group (NO2) — asymmetric and symmetric N=O stretches",
      "A C–H stretch",
      "An O–H stretch"
    ],
    answer: 1,
    explain: "Nitro compounds show two strong NO2 stretches: asymmetric ~1500–1570 cm-1 and symmetric ~1300–1390 cm-1 — together they nail the assignment."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "In the IR functional-group flowchart on the slides, the FIRST question typically asked when interpreting a spectrum is:",
    choices: [
      "Is the sample colored?",
      "Is C=O present (near 1700 cm-1)?",
      "Is the molecule charged?",
      "Is the sample a gas?"
    ],
    answer: 1,
    explain: "The decision tree starts by asking whether C=O is present — it's a strong, easily identified peak that immediately narrows the options to acid / ester / ketone / aldehyde / amide / anhydride."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An IR spectrum showing TWO C=O peaks close together (a 'doublet') is most consistent with:",
    choices: ["A simple ketone", "An anhydride", "An alcohol", "An amine"],
    answer: 1,
    explain: "Anhydrides characteristically show two C=O stretches (symmetric and asymmetric) that are close in wavenumber but resolvable — a textbook diagnostic."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A compound has a C=O peak around 1735 cm-1, no O–H, no N–H, but shows a strong C–O stretch. Best class assignment is:",
    choices: ["Aldehyde", "Carboxylic acid", "Ester", "Amine"],
    answer: 2,
    explain: "Ester: C=O present (often a bit higher than ketones), no O–H or N–H, plus a distinct C–O stretch (~1200 cm-1)."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An IR spectrum has a C=O near 1730 cm-1 AND two weak aldehyde C–H stretches around 2720 and 2820 cm-1. The class is:",
    choices: ["Aldehyde", "Carboxylic acid", "Ester", "Ketone"],
    answer: 0,
    explain: "Two weak C–H peaks near 2720 / 2820 cm-1 (the 'aldehyde doublet') alongside C=O is the diagnostic for an aldehyde."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The cleanest way to distinguish a KETONE from an ALDEHYDE in an IR spectrum is to look for:",
    choices: [
      "C=O alone (both have one)",
      "The two weak CHO C–H stretches near 2720 / 2820 cm-1 (present for aldehydes only)",
      "C–Cl stretch",
      "N–H stretch"
    ],
    answer: 1,
    explain: "Both have a C=O. The aldehyde signature is the pair of weak C–H stretches near 2720 and 2820 cm-1 that are absent in ketones."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An IR spectrum with a C=O near 1660 cm-1 AND an N–H stretch is most consistent with:",
    choices: ["Aldehyde", "Amide", "Ether", "Nitrile"],
    answer: 1,
    explain: "Amides: C=O is typically at lower wavenumber than esters/ketones (~1640–1690 cm-1) and the N–H stretch shows up around 3300 cm-1."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A strong absorption around ~1050–1300 cm-1 (and the absence of stronger diagnostic peaks) suggests the molecule contains:",
    choices: ["C=C", "C–O (e.g. ether, alcohol, ester)", "C–H only", "N–H only"],
    answer: 1,
    explain: "C–O single-bond stretches sit around ~1050–1300 cm-1 — important for distinguishing ethers, alcohols, and esters."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "AROMATIC ring C=C stretches typically appear in the IR around:",
    choices: ["~3300 cm-1", "~1450–1600 cm-1", "~2200 cm-1", "~1700 cm-1"],
    answer: 1,
    explain: "Aromatic C=C ring vibrations appear as several medium-intensity bands in the ~1450–1600 cm-1 region."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An IR absorption in the ~600–800 cm-1 region (with no other diagnostic peaks present) is most consistent with:",
    choices: [
      "C–X (halide) stretch",
      "O–H stretch",
      "C=O stretch",
      "N–H stretch"
    ],
    answer: 0,
    explain: "C–X single-bond stretches (C–Cl, C–Br, C–I) fall in the low-wavenumber region around 600–800 cm-1."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The IR spectrum of BUTANOIC ACID (neat) shown in the slides displays peaks corresponding to:",
    choices: [
      "C=N and C–N stretches",
      "A broad H-bonded O–H, C–H, C=O, CH2 deformations, and C–O",
      "Only N–H and N=O stretches",
      "Only C≡C and C–Cl"
    ],
    answer: 1,
    explain: "Butanoic acid (a carboxylic acid) shows the classic broad H-bonded O–H, aliphatic C–H, a strong C=O near 1710 cm-1, CH2 deformations, and a C–O stretch."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "ATR is classified as which type of FTIR sampling technique?",
    choices: [
      "Transmission technique",
      "Reflectance method",
      "Mull preparation",
      "Solid-state NMR"
    ],
    answer: 1,
    explain: "The slides group FTIR sampling into Transmission Techniques and Reflectance Methods — ATR sits in the latter."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Increasing the NUMBER OF INTERNAL REFLECTIONS inside an ATR crystal generally:",
    choices: [
      "Has no effect on the spectrum",
      "Increases the effective path length and signal of the absorption",
      "Changes the He–Ne laser frequency",
      "Cools the detector"
    ],
    answer: 1,
    explain: "Each internal reflection samples the evanescent field; more reflections → longer effective path length → larger absorbance signal."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "From the slide's ATR penetration-depth table, at 1000 cm-1 the penetration depth with a Ge crystal (n=4.0) is approximately:",
    choices: ["0.05 µm", "0.66 µm", "5.0 µm", "50 µm"],
    answer: 1,
    explain: "Ge (n=4.0) at 1000 cm-1: penetration depth ≈ 0.66 µm — much shallower than ZnSe."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "From the slide's ATR penetration-depth table, at 1000 cm-1 the penetration depth with a ZnSe (or KRS-5) crystal (n=2.4) is approximately:",
    choices: ["0.10 µm", "0.66 µm", "2.01 µm", "20 µm"],
    answer: 2,
    explain: "ZnSe / KRS-5 (n=2.4) at 1000 cm-1: penetration depth ≈ 2.01 µm — about 3× deeper than Ge."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Penetration depth in ATR INCREASES when:",
    choices: [
      "The wavenumber is higher (shorter wavelength)",
      "The wavenumber is lower (longer wavelength)",
      "The crystal refractive index is increased",
      "The angle of incidence is increased far above the critical angle"
    ],
    answer: 1,
    explain: "dp scales with λ — so lower wavenumber (longer wavelength) gives deeper penetration. Higher crystal RI and larger incidence angles reduce dp."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Partial PEAK SHIFTS observed when comparing ATR spectra collected on different crystal materials are mainly due to:",
    choices: [
      "Random instrumental drift only",
      "Differences in the prisms' refractive indices, which cause wavelength-dependent (anomalous-dispersion) shifts",
      "Changes in the sample's molecular weight",
      "Aging of the IR source"
    ],
    answer: 1,
    explain: "Different ATR crystals (Ge vs ZnSe vs diamond) have different refractive indices and dispersion, so observed peak positions shift slightly relative to a transmission spectrum."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A poor-quality ATR spectrum on a working spectrometer is most often caused by:",
    choices: [
      "Bad sample/crystal CONTACT (insufficient pressure or rough sample)",
      "The room being too dark",
      "Using a Ge crystal",
      "Running the He–Ne laser"
    ],
    answer: 0,
    explain: "Reliable ATR requires intimate optical contact between sample and crystal — bad contact (air gaps, deformable solids not pressed enough) is the usual cause of weak/distorted spectra."
  },

  // ============ MORE ELECTROANALYSIS RECAP ============
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The pH-glass-electrode cell potential at 25 °C is written in the slides as:",
    choices: [
      "Ecell = K + 0.0592 × pH",
      "Ecell = K − 0.0592 × pH",
      "Ecell = K − 0.0296 × pH",
      "Ecell = K − pH"
    ],
    answer: 1,
    explain: "At 25 °C the response is Ecell = K − 0.0592 pH; the slope is −59.2 mV per pH unit (for an n=1 H+ response)."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In a combination pH electrode, the potential E1 corresponds to:",
    choices: [
      "The asymmetry potential of the membrane",
      "The pH-dependent potential at the OUTER gel layer, proportional to the sample pH",
      "The reference-electrode potential",
      "The diffusion potential across the diaphragm"
    ],
    answer: 1,
    explain: "E1 is the pH-responsive potential at the outer gel layer of the glass membrane — the one you actually want to vary with sample pH. The other E2–E6 should stay constant."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Which combination-electrode potential is the ASYMMETRY potential of the glass membrane?",
    choices: ["E1", "E2", "E3", "E5"],
    answer: 1,
    explain: "E2 is labeled the 'asymmetry potential' in the slide's combination-electrode diagram — a small offset present even with identical inner and outer solutions."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Which combination-electrode potential is the DIAPHRAGM (junction) diffusion potential?",
    choices: ["E1", "E4", "E5", "E6"],
    answer: 3,
    explain: "E6 is the diffusion potential across the reference-electrode diaphragm/junction. Ideally it stays small and constant."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "An IDEAL combination pH electrode requires that the inner and outer gel layers:",
    choices: [
      "Have very different Nernst slopes so they amplify the signal",
      "Produce potentials having IDENTICAL slopes so they cancel cleanly",
      "Have different ionic strengths permanently",
      "Be kept at different temperatures during measurement"
    ],
    answer: 1,
    explain: "If the inner and outer gel layers respond with the same slope, only the difference (the sample-side variation) shows up — ideal for clean pH measurement."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The composition of a typical pH-responsive silicate glass membrane is approximately:",
    choices: [
      "100% SiO2",
      "SiO2 ~72%, Na2O ~22%, CaO ~6%",
      "SiO2 ~30%, Na2O ~60%, CaO ~10%",
      "Pure Na2O"
    ],
    answer: 1,
    explain: "Standard pH glass: ~72% SiO2, ~22% Na2O, ~6% CaO — a silicate framework with Na+ and Ca2+ as charge balancers."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Inside the dry INTERIOR of a glass pH membrane, the current is carried primarily by:",
    choices: ["H+ ions", "Na+ ions", "Ca2+ ions", "SiO4^4- units"],
    answer: 1,
    explain: "H+ ions carry current near the hydrated surface, while Na+ carries current through the dry interior of the membrane."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Ca2+ ions within a pH glass membrane:",
    choices: [
      "Carry current near the surface",
      "Carry current in the dry interior",
      "Are immobile and do NOT carry current",
      "Replace Na+ at high pH"
    ],
    answer: 2,
    explain: "Ca2+ in the silicate framework is immobile — it does NOT carry current. H+ at the surface and Na+ in the interior do."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Storing a pH glass electrode DRY between uses primarily causes:",
    choices: [
      "Reference-electrode poisoning",
      "Dehydration of the hydrated gel layer, leading to erratic readings until rehydrated",
      "Alkali error at low pH",
      "Acid error at high pH"
    ],
    answer: 1,
    explain: "The hydrated gel layer at the surface is essential for proper response — drying destroys it. Always store the pH electrode wet (typically in 3 M KCl or pH 7 buffer per maker's instructions)."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Per the slides, common sources of error in potentiometric measurement include all of the following EXCEPT:",
    choices: [
      "Interfering ions",
      "A finite (non-zero) current drawn through the cell during measurement",
      "Differences in the analyte's activity coefficient between sample and standard",
      "The MASS of the working electrode"
    ],
    answer: 3,
    explain: "Listed sources: interfering ions; finite current drawn during measurement; activity-coefficient differences between sample and standard; liquid-junction potentials. Electrode mass is not on the list."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The PRECISION of a potentiometric measurement is mainly limited by:",
    choices: [
      "The viscosity of the solvent",
      "Variations in temperature and the sensitivity of the potentiometer",
      "The color of the reference filling solution",
      "The cell volume only"
    ],
    answer: 1,
    explain: "Per the slides, potentiometry precision is limited by temperature variations and the sensitivity of the potentiometer measuring the small potential differences."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In the slide diagram of a single-compartment voltammetry cell, the reference electrode shown is:",
    choices: [
      "A Standard Hydrogen Electrode",
      "An Ag/AgCl reference electrode",
      "A separate saturated calomel electrode in another compartment",
      "A glass pH electrode"
    ],
    answer: 1,
    explain: "The slide labels the reference electrode in the single-compartment cell as Ag/AgCl (the workhorse reference for routine voltammetry). The counter is a Pt wire and the working electrode is also in the same compartment."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In anodic stripping voltammetry, sensitivity can be increased by:",
    choices: [
      "Using a smaller electrode and a shorter deposition time",
      "Using a LARGER electrode AND a LONGER deposition time, which concentrates more metal atoms on the electrode",
      "Removing the reference electrode",
      "Skipping the deposition step entirely"
    ],
    answer: 1,
    explain: "Per the slides, sensitivity in ASV can be 'further increased by using larger electrodes and longer deposition times, effectively concentrating more metal atoms onto the electrode.'"
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "According to the slides, ASV detection limits for trace metals are:",
    choices: [
      "Worse than flame AAS",
      "Superior to flame AAS and comparable to graphite-furnace AAS",
      "Worse than potentiometry by orders of magnitude",
      "Equal to those of NMR for the same metals"
    ],
    answer: 1,
    explain: "ASV detection limits (~10-12 M) beat flame AAS and are comparable to graphite-furnace AAS — exceptionally low for an ultratrace metal technique."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Differential-pulse linear-sweep voltammetry (DP-LSV) is preferred over plain LSV mainly because:",
    choices: [
      "It eliminates the working electrode",
      "It greatly improves sensitivity and resolution by subtracting capacitive (background) current via the pulse-difference measurement",
      "It uses no potentiostat",
      "It is faster than every other electrochemical technique"
    ],
    answer: 1,
    explain: "DP-LSV measures the current just before and at the end of each pulse and takes the difference — this rejects the slowly varying capacitive current and dramatically improves S/N and peak resolution."
  },

  // ============ MORE CHOOSING A TECHNIQUE ============
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For QUANTITATIVE analysis of an organic analyte with a strong UV-Vis chromophore and no interferences, the best technique to use is:",
    choices: ["NMR", "UV-Vis spectroscopy", "Flame AAS", "ICP-MS"],
    answer: 1,
    explain: "UV-Vis is simple, fast, and quantitative for organics with strong absorbance — and is one of the first techniques the slides suggest for organic quantitation."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For trace QUANTITATIVE analysis of an organic species that emits strongly when excited by UV, the best technique to use is:",
    choices: ["IR", "Fluorescence spectroscopy", "Flame AAS", "GFAAS"],
    answer: 1,
    explain: "Fluorescence is far more sensitive than UV absorption for the right analytes; the slides list it alongside UV-Vis for organic quantitation."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Per the decision flow, if you have an organic analyte WITH a major interference (or many samples to run), the next step is usually:",
    choices: [
      "Skip the analysis",
      "Add a separation step — chromatography (GC for volatile, HPLC for non-volatile / thermolabile)",
      "Switch to ICP-OES",
      "Heat the sample to dryness"
    ],
    answer: 1,
    explain: "Chromatographic separation is the standard answer when interferences or sample throughput become an issue — pick GC vs HPLC based on volatility/thermal stability."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For separating PROTEINS by net CHARGE, the best LC mode to use is:",
    choices: [
      "Size-exclusion chromatography",
      "Ion-exchange chromatography",
      "GC",
      "Adsorption chromatography of small molecules"
    ],
    answer: 1,
    explain: "Ion-exchange chromatography separates proteins by their net charge at the chosen pH — a workhorse step in protein purification."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "ELECTROPHORESIS is listed in the slides as a technique used primarily for:",
    choices: [
      "Organic small-molecule quantitation",
      "Macromolecule separation (proteins, nucleic acids) by charge and/or size in a gel matrix",
      "Functional-group identification",
      "Inorganic elemental analysis"
    ],
    answer: 1,
    explain: "Electrophoresis appears under the macromolecule section — used to separate proteins / nucleic acids by their migration in an electric field through a gel."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "MALDI-TOF and HPLC-ESI-MS are listed in the slides under techniques for:",
    choices: [
      "Functional-group identification only",
      "Macromolecule analysis, especially proteins and other large biomolecules",
      "Inorganic speciation only",
      "Volatile-gas analysis only"
    ],
    answer: 1,
    explain: "MALDI-TOF and HPLC-ESI-MS appear in the macromolecule section — both are mass-spectrometry workflows tailored for large biomolecules."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Ion chromatography is listed in the slides under techniques applicable to:",
    choices: [
      "Only volatile organics",
      "Inorganic analytes (quantitative / qualitative)",
      "Functional-group identification of organics",
      "Only macromolecule separation"
    ],
    answer: 1,
    explain: "Ion chromatography sits in the inorganic-analyte section, alongside spectroscopic and electroanalytical methods."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "The slide's KITCHEN-KNIFE analogy for choosing an analytical technique is meant to convey:",
    choices: [
      "One knife (one technique) does every job equally well",
      "Different techniques are designed for different jobs — pick the tool that fits the purpose",
      "The most expensive knife is always best",
      "Cooks should avoid using knives"
    ],
    answer: 1,
    explain: "Like kitchen knives, analytical techniques each have specific strengths — paring vs chef vs bread knife. You pick the right one for the job at hand."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "'Fit for purpose' in analytical chemistry means choosing a method that:",
    choices: [
      "Has the highest sensitivity available, regardless of cost or sample need",
      "Meets the actual requirements of the problem (sensitivity, sample amount, cost, time)",
      "Uses the largest instrument in the lab",
      "Was invented most recently"
    ],
    answer: 1,
    explain: "Fit-for-purpose means matching the chosen method to the real problem — overkill is wasteful, and under-spec'd methods fail. The slides emphasize this trade-off."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which of the following is NOT a question the slides explicitly suggest asking when planning an analysis?",
    choices: [
      "How many samples do I need to analyze?",
      "How much time do I have for the analysis?",
      "How much money do I have for the instrument?",
      "What time of day should I run the sample?"
    ],
    answer: 3,
    explain: "The 'other questions' slide lists number of samples, time available, and budget — but not the time of day."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Per the slides, the typical refresh cycle for new instrument models in analytical chemistry is approximately:",
    choices: ["Every 3 months", "Every 3 years", "Every 30 years", "Never"],
    answer: 1,
    explain: "The slides note that new instrument models 'usually appear every 3 years' — though the underlying principles stay mostly stable."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "According to the slides, places to get up-to-date information about analytical instrumentation include:",
    choices: [
      "Websites, catalogs, exhibitions / conferences, and ads in scientific magazines",
      "Only printed encyclopedias",
      "Only personal social-media feeds",
      "Only personal e-mail"
    ],
    answer: 0,
    explain: "The slides list websites, catalogs, exhibitions/conferences, and ads in scientific magazines as the standard information sources."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "The slide remark 'what we have discussed is the tip of the iceberg' refers to the fact that:",
    choices: [
      "The instruments are cold",
      "The techniques covered are only the most widely used — many specialized instruments exist for specific industries",
      "Iceberg refers to a particular cryogenic technique",
      "Iceberg refers to the thermal mass of the sample"
    ],
    answer: 1,
    explain: "The slides note that the techniques covered are the most widely used, but specialized equipment exists for specific industries that the course doesn't cover."
  }
];

// Expose for the browser
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}

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
  }
];

// Expose for the browser
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}

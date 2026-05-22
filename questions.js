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
  },

  // ============ STILL MORE CHROMATOGRAPHY ============
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The fatty-acid composition study of Scenedesmus obliquus (a microalga) cited in the slides demonstrates use of chromatography to:",
    choices: [
      "Identify functional groups via IR alone",
      "Quantify the relative abundance of different fatty acids in a complex biological extract",
      "Image the algal cells",
      "Measure conductivity of the medium"
    ],
    answer: 1,
    explain: "The cited application uses chromatography (typically GC after derivatization to fatty acid methyl esters) to give a fatty-acid composition profile of the microalga."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The 'outer membrane vesicle heterogeneity' application cited in the slides uses SEC to:",
    choices: [
      "Identify a single membrane lipid",
      "Analyze the size heterogeneity of bacterial outer-membrane vesicles",
      "Crystallize membrane proteins",
      "Measure cell conductivity"
    ],
    answer: 1,
    explain: "SEC separates vesicles by hydrodynamic size — useful for characterizing the population heterogeneity of OMVs (small extracellular vesicles)."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Per the slides, ion exchange chromatography can be used to separate URANIUM from plutonium and other ACTINIDES because:",
    choices: [
      "They have different boiling points",
      "Different actinides form different complexes / charge states that give them different affinities for the resin",
      "They differ in color",
      "They differ in radioactivity directly"
    ],
    answer: 1,
    explain: "Actinide separations by IEC exploit differences in ionic charge and complexation behavior (e.g. with chloride or nitrate) — different oxidation states / complexes elute at different times."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In SEC, a molecule that is INTERMEDIATE in size compared to the average pore:",
    choices: [
      "Is fully excluded and elutes at the void volume",
      "Penetrates the pores partially and elutes between the void volume and the totally-included peak",
      "Stays at the top of the column",
      "Reacts chemically with the resin"
    ],
    answer: 1,
    explain: "SEC separates by progressively greater pore access: large = excluded (early), small = fully included (late). Intermediate-size species elute in between, which is how SEC fractionates by size."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Industrial production of DEIONIZED (DI) water typically uses a 'mixed bed' of:",
    choices: [
      "Two cation resins (H-form + Na-form)",
      "Strong-acid cation resin in H-form + strong-base anion resin in OH-form, in the same column",
      "Two anion resins (OH-form + Cl-form)",
      "A cation resin plus a precipitating agent like AgNO3"
    ],
    answer: 1,
    explain: "The mixed bed exchanges all dissolved cations for H+ and all dissolved anions for OH-; the H+ and OH- then recombine as water — producing demineralized water in a single pass."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In a STRONG-BASE anion-exchange resin, the fixed functional group on the polymer matrix is typically:",
    choices: [
      "Sulfonic acid (–SO3H)",
      "A quaternary ammonium group (e.g. –N(CH3)3+ ) that is fully ionized over the entire pH range",
      "A neutral –OH only",
      "A carboxylate (–COO-)"
    ],
    answer: 1,
    explain: "Strong-base anion resins use quaternary ammonium groups: permanently positively charged, so anion exchange capacity is independent of pH."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Why does ion-exchange chromatography work poorly for NEUTRAL, uncharged organic molecules?",
    choices: [
      "It is highly selective for them",
      "Neutral species have no fixed charge to interact with the resin's ionic functional groups",
      "Resins dissolve in non-polar solvents",
      "There is no mobile phase available"
    ],
    answer: 1,
    explain: "Ion exchange relies on Coulombic attraction between a charged analyte and an oppositely charged resin site. Neutral species don't interact and just pass through."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Per the slides, ELUTION is best described as:",
    choices: [
      "The act of loading the sample",
      "Movement of the analytes through and out of the column, carried by the mobile phase",
      "Stopping the flow of mobile phase",
      "Heating the column"
    ],
    answer: 1,
    explain: "Elution is the movement of analytes through (and ultimately out of) the column with the mobile phase — different species elute at different times based on their interactions."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "The SEPARATION RANGE of an SEC column (the range of molecular weights it can resolve) is set primarily by:",
    choices: [
      "The mobile-phase composition only",
      "The pore-size distribution of the packing material",
      "The temperature of the column",
      "The applied electric potential"
    ],
    answer: 1,
    explain: "An SEC column's pore-size distribution sets which molecules are excluded (too big), which are fully included (too small), and which fall in the resolving range between."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "In the slide's separation-table, CENTRIFUGATION is assigned to which basis?",
    choices: ["Size", "Mass or density", "Complex formation", "Phase change"],
    answer: 1,
    explain: "The table assigns centrifugation to 'mass or density' — it separates by the differing sedimentation rates of species of different mass/density."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which separation approach in the slide's table exploits COMPLEX FORMATION as its basis?",
    choices: [
      "Filtration",
      "Masking — using a selective complexing agent to tie up the interferent",
      "Recrystallization",
      "Electrodeposition"
    ],
    answer: 1,
    explain: "The table pairs 'complex formation' with 'masking' — selectively forming a complex with an interferent so it no longer interferes with the analyte's chemistry."
  },
  {
    topic: "Chromatography",
    source: "Post lab 2.pdf",
    q: "Which is the best LC mode to use for separating a mixture of structurally similar small molecules that differ mainly in POLARITY?",
    choices: [
      "Size-exclusion chromatography",
      "Adsorption (normal-phase) liquid chromatography on a polar stationary phase like silica",
      "Ion-exchange chromatography of neutrals",
      "Gas chromatography of non-volatile, thermally labile species"
    ],
    answer: 1,
    explain: "Polarity-differentiated small molecules separate best on adsorption (or partition / reversed-phase) LC; SEC cares only about size, and IEC needs charge."
  },

  // ============ STILL MORE IR & FTIR ============
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The 'fingerprint region' of an IR spectrum is generally taken to be:",
    choices: [
      "4000–2500 cm-1 (the high-energy stretching region)",
      "~1400–400 cm-1 — rich in single-bond modes and skeletal vibrations characteristic of the whole molecule",
      "Above 4000 cm-1 only",
      "Centered narrowly at 1700 cm-1"
    ],
    answer: 1,
    explain: "The fingerprint region (~1400–400 cm-1) is densely populated with C–C, C–N, C–O, C–X and skeletal modes — overall pattern is highly diagnostic for molecular identity."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A PRIMARY amine (R–NH2) shows in the IR:",
    choices: [
      "Exactly one sharp N–H stretch",
      "Two N–H stretches (symmetric + asymmetric) around ~3300 and ~3400 cm-1",
      "No N–H absorption",
      "Only a strong C=O peak"
    ],
    answer: 1,
    explain: "Primary amines have two N–H bonds that give two stretches (symmetric ~3300 and asymmetric ~3400 cm-1) — a classic diagnostic for 1° amines."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A SECONDARY amine (R–NH–R′) shows in the IR:",
    choices: [
      "Two N–H stretches",
      "One N–H stretch (only one N–H bond present)",
      "Three N–H stretches",
      "No N–H stretches at all"
    ],
    answer: 1,
    explain: "Secondary amines have only one N–H bond, so they show a single N–H stretch — distinguishing them from primary amines."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A TERTIARY amine (R3N) shows in the IR:",
    choices: [
      "Two N–H stretches",
      "One N–H stretch",
      "No N–H stretches at all (no N–H bonds)",
      "A C=O peak at 1700 cm-1"
    ],
    answer: 2,
    explain: "Tertiary amines have no N–H bonds, so the N–H stretching region is empty — useful by absence."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Compared with a free (non-hydrogen-bonded) alcohol O–H near ~3600 cm-1 (sharp), the O–H of a CARBOXYLIC ACID dimer in neat or concentrated solution shows:",
    choices: [
      "A sharper peak in the same place",
      "A very broad, often strong absorption spanning ~2500–3300 cm-1 due to strong hydrogen bonding",
      "No O–H peak at all",
      "A peak only at 1700 cm-1"
    ],
    answer: 1,
    explain: "Carboxylic acids form hydrogen-bonded dimers in the condensed phase — their O–H stretch becomes very broad and red-shifted, often spanning 2500–3300 cm-1."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "sp3 C–H stretches (alkanes) typically appear in the IR:",
    choices: [
      "Below 2900 cm-1",
      "Just below 3000 cm-1 (~2850–2960 cm-1)",
      "Above 3300 cm-1",
      "Below 1500 cm-1"
    ],
    answer: 1,
    explain: "sp3 C–H (alkyl) stretches fall just below 3000 cm-1 — typically 2850–2960 cm-1."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "sp2 (vinyl / aromatic) C–H stretches typically appear:",
    choices: [
      "Below 2800 cm-1",
      "Just ABOVE 3000 cm-1 (~3000–3100 cm-1)",
      "Below 1500 cm-1",
      "Right at ~2200 cm-1"
    ],
    answer: 1,
    explain: "sp2 C–H stretches fall just above 3000 cm-1 — a quick way to confirm aromatic or vinyl character is C–H absorbance above 3000."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Which is NOT one of the three named advantages of FTIR over dispersive IR?",
    choices: ["Jacquinot (throughput)", "Fellgett (multiplex)", "Connes (precision)", "Faraday (charge)"],
    answer: 3,
    explain: "FTIR's three advantages are Jacquinot (throughput), Fellgett (multiplex), and Connes (precision). 'Faraday' belongs to electrochemistry, not FTIR."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Per the slides, ATR is particularly attractive for sampling:",
    choices: [
      "Only pure gas-phase samples",
      "Polymers, rubbers, films, and liquid samples — with minimal or no sample preparation",
      "Only crystalline solids at low temperature",
      "Only single crystals at high pressure"
    ],
    answer: 1,
    explain: "The slides specifically note ATR's attractiveness for polymers, rubbers, films, and liquids — and for samples too opaque or thick for transmission."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "Which kind of sample would generally NOT work well in standard ATR without modification?",
    choices: [
      "A thin polymer film pressed against the crystal",
      "A finely powdered solid pressed firmly onto the crystal",
      "A rubber sheet contacted to the crystal",
      "A gas at atmospheric pressure with no condensed phase"
    ],
    answer: 3,
    explain: "ATR requires the sample to be in optical contact with the crystal (an evanescent wave penetrates only microns). Gases lack the condensed-phase contact needed to absorb the evanescent field."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "DIAMOND is sometimes used as an ATR crystal material because it:",
    choices: [
      "Has a very low refractive index (n ≈ 1.0)",
      "Is extremely hard and chemically inert, with a wide IR window — robust for harsh / abrasive samples",
      "Is the cheapest crystal material",
      "Is opaque to IR"
    ],
    answer: 1,
    explain: "Diamond ATR crystals are scratch-resistant and inert — they handle acidic, basic, or abrasive samples that would damage softer crystals (ZnSe, KRS-5)."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "KRS-5 (thallium bromoiodide) is occasionally used in IR optics because:",
    choices: [
      "It is water-soluble and easy to clean",
      "It is non-toxic and food-safe",
      "It has a wide IR transmission window — despite being soft, somewhat toxic, and prone to scratching",
      "It is a strong oxidizer that activates the sample"
    ],
    answer: 2,
    explain: "KRS-5 transmits IR over a wide range and is moderately resistant to water, but it is soft, toxic, and easily scratched — used carefully when the IR window is the priority."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "The slide application 'sampling and identification of microplastics in groundwater' demonstrates use of:",
    choices: [
      "NMR",
      "FTIR (often via ATR) to identify the polymer composition of microplastic particles",
      "Bomb calorimetry",
      "Polarimetry"
    ],
    answer: 1,
    explain: "FTIR (often with ATR) is the standard fingerprinting tool for identifying microplastic polymer composition by matching to spectral libraries."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "An FTIR's interferogram is converted into a spectrum by applying:",
    choices: [
      "A Bragg–Wulff transform",
      "A Fourier transform",
      "A Beer–Lambert correction",
      "A Nernst transform"
    ],
    answer: 1,
    explain: "The whole point of an FT instrument: the time-domain interferogram is converted to a frequency-domain spectrum by the Fourier transform."
  },
  {
    topic: "IR & FTIR",
    source: "Post lab 2.pdf",
    q: "A peak in your IR spectrum that looks distorted (asymmetric) ONLY when run via ATR but is sharp by transmission is most likely caused by:",
    choices: [
      "The He–Ne laser drift",
      "Optical artifacts inherent to ATR — refractive-index dispersion and wavelength-dependent penetration that distort intense bands",
      "A defective detector",
      "The sample being too cold"
    ],
    answer: 1,
    explain: "Strong ATR bands can look red-shifted and asymmetric because of the wavelength-dependent penetration depth and refractive-index dispersion at the crystal/sample interface."
  },

  // ============ STILL MORE ELECTROANALYSIS RECAP ============
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The Prussian-Blue-modified glassy carbon electrode shown in the slides is an example of:",
    choices: [
      "A purely passive bare electrode",
      "A MODIFIED working electrode in a biosensor — the PB layer catalyzes a specific redox reaction (e.g. H2O2 reduction at low potential)",
      "A reference electrode",
      "A counter electrode only"
    ],
    answer: 1,
    explain: "Prussian Blue acts as an 'artificial peroxidase' that catalyzes H2O2 reduction at very low overpotentials — a common modification on glassy carbon for amperometric biosensors."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The CHOLESTEROL biosensor example in the slides uses:",
    choices: [
      "A plain Pt electrode in pure water",
      "A cholesterol / Prussian Blue sol-gel modified glassy carbon electrode interrogated by cyclic voltammetry, with peak current increasing with cholesterol concentration",
      "A potentiometric titration with phenolphthalein",
      "A flame AAS measurement"
    ],
    answer: 1,
    explain: "The slide shows cyclic voltammograms of a cholesterol/PB sol-gel modified glassy carbon electrode, with CV traces b–f at increasing cholesterol concentration."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "A glucose biosensor based on glucose oxidase typically generates the electrochemical signal because:",
    choices: [
      "Glucose itself absorbs visible light",
      "The enzyme generates H2O2 (or reduces a mediator) that is then detected electrochemically — usually amperometrically — at the working electrode",
      "Glucose fluoresces strongly when reduced",
      "Glucose causes a large pH jump"
    ],
    answer: 1,
    explain: "Glucose oxidase oxidizes glucose to gluconolactone, reducing O2 to H2O2 (or a mediator). The H2O2 (or reduced mediator) is then quantified amperometrically at the working electrode."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Quantification of iron in FERROUS SULFATE supplements by cyclic voltammetry exploits:",
    choices: [
      "The pH of the supplement",
      "The Fe2+/Fe3+ redox couple — peak currents (or peak charge) proportional to iron concentration",
      "The IR absorbance of FeSO4",
      "The magnetic susceptibility of Fe"
    ],
    answer: 1,
    explain: "Fe2+/Fe3+ is a well-behaved one-electron redox couple in solution; CV gives clean anodic and cathodic peaks whose currents track concentration."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In LSV / DP-LSV used for quantitative analysis, a calibration with KNOWN-concentration standards is needed because:",
    choices: [
      "The peak/plateau height vs concentration relationship is empirically calibrated for each analyte and condition",
      "All voltammetric methods are self-calibrating",
      "LSV cannot be quantitative",
      "Concentration is irrelevant to peak height"
    ],
    answer: 0,
    explain: "Per the slides, the plateau/peak height for each species must be calibrated against a series of standards with known concentrations to convert measurements to concentrations."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Why is a PLATINUM-wire counter electrode commonly used in a single-compartment voltammetric cell?",
    choices: [
      "It dissolves easily in the analyte for cleaner signal",
      "It is electrochemically inert across a wide potential window and conducts well — ideal as a current sink",
      "It is the cheapest electrode material available",
      "It is a strong reducing agent that drives the reaction"
    ],
    answer: 1,
    explain: "Pt's wide potential window of electrochemical inertness and good conductivity make it the standard inert counter electrode for routine voltammetry."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "A cyclic voltammogram showing ΔEp ≈ 59 mV between anodic and cathodic peaks (at 25 °C) with ipa/ipc ≈ 1 is diagnostic of:",
    choices: [
      "A totally irreversible couple",
      "An electrochemically REVERSIBLE one-electron couple",
      "An adsorption-only system with no diffusion",
      "A short circuit through the reference electrode"
    ],
    answer: 1,
    explain: "ΔEp ≈ 59/n mV at 25 °C, ipa/ipc ≈ 1, and ip scaling with √υ are the textbook fingerprints of an electrochemically reversible n-electron couple."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "A cyclic voltammogram with very large peak separation (e.g. ΔEp ≈ 200 mV or more, and the gap grows with scan rate) most likely indicates:",
    choices: [
      "A perfectly reversible couple",
      "Slow electron-transfer kinetics — quasi-reversible or irreversible behavior",
      "A failed reference electrode",
      "A bona fide short circuit"
    ],
    answer: 1,
    explain: "Large, scan-rate-dependent ΔEp is the classic signature of slow heterogeneous electron-transfer kinetics: quasi-reversible or fully irreversible behavior."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The slide's ideal-pH-electrode list says the assembly should be electrically SYMMETRICAL because:",
    choices: [
      "It looks neater",
      "The galvanic potentials of the measuring and reference half-cells then cancel each other, leaving only the pH-dependent membrane potential",
      "It changes the temperature dependence",
      "It makes the instrument run faster"
    ],
    answer: 1,
    explain: "If the measuring and reference electrode systems are identical except for the membrane, their internal galvanic contributions cancel — only the pH-driven membrane potential remains."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "If a freshly calibrated pH glass electrode shows a slope of only ~30 mV/pH at 25 °C (instead of the ideal ~59 mV/pH), this most likely indicates:",
    choices: [
      "Excellent performance — better than spec",
      "Membrane damage, contamination, or dehydration — the electrode probably needs cleaning, rehydrating, or replacement",
      "Very high accuracy",
      "Excellent sensitivity at the high-pH end"
    ],
    answer: 1,
    explain: "The Nernstian slope at 25 °C for an n=1 H+ response is 59.16 mV/pH. A sub-Nernstian slope is a red flag for membrane problems — clean, rehydrate, or replace."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "What is the role of the INTERNAL buffer solution inside a glass pH electrode?",
    choices: [
      "Maintains a CONSTANT pH on the inside of the membrane, so the membrane potential varies only with the SAMPLE side",
      "Reacts directly with the sample analyte",
      "Replaces the reference electrode",
      "Provides the diffusion potential E6"
    ],
    answer: 0,
    explain: "The internal buffer fixes the H+ activity on the inside of the membrane. With that side held constant, any change in the measured potential reflects the SAMPLE side pH."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Why is the FLUORIDE ion-selective electrode operating pH kept around 5.0–5.5 (typically via TISAB)?",
    choices: [
      "To minimize OH- interference at high pH AND avoid HF formation (which removes free F-) at low pH",
      "Because the LaF3 crystal melts above pH 5.5",
      "Because Eu2+ only works at pH 5.0",
      "Because the SCE only works at pH 5.0"
    ],
    answer: 0,
    explain: "Above ~pH 8, OH- (similar radius/charge) interferes with F- response on LaF3. Below ~pH 5, F- protonates to HF and becomes invisible to the electrode. ~5–5.5 is the sweet spot."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "A significant INTERFERENT for the LaF3 fluoride ISE is:",
    choices: [
      "Cl-",
      "OH- (at high pH, because OH- can substitute for F- at the membrane surface)",
      "K+",
      "Na+"
    ],
    answer: 1,
    explain: "OH- has a similar ionic radius and charge to F- and can compete at the LaF3 surface — that's the main interferent the slides flag. Cl-, Na+, K+ are generally not problems."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "Why does the cyclic voltammogram of ASCORBIC ACID in fruit juice show only an ANODIC peak (no reverse cathodic peak)?",
    choices: [
      "The instrument is broken",
      "Oxidation of ascorbic acid is followed by rapid chemical follow-up, so the oxidized form does not reduce back on the CV timescale — irreversible electrochemistry",
      "The reduction happens too fast to capture",
      "Ascorbic acid is non-electroactive"
    ],
    answer: 1,
    explain: "Ascorbic acid → dehydroascorbic acid + 2e- + 2H+. The dehydroascorbic acid undergoes rapid follow-up chemistry (hydration, ring opening), so no reverse cathodic peak appears."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "When a CV of ascorbic acid shows no reverse peak, can it still be used quantitatively?",
    choices: [
      "No — only fully reversible couples are quantifiable",
      "Yes — the height of the anodic peak still tracks ascorbic acid concentration and is calibrated against standards",
      "No — irreversible reactions produce no current",
      "Only by NMR"
    ],
    answer: 1,
    explain: "Irreversible CV is still quantitative — the anodic peak current scales with concentration (often with a √υ dependence) and is calibrated with standards."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "The slide labels Epc and ipc on a cyclic voltammogram. What do these stand for?",
    choices: [
      "Epc = cathodic peak potential; ipc = cathodic peak current",
      "Epc = empty pot constant; ipc = ion polarity coefficient",
      "Epc = anodic peak potential; ipc = anodic peak current",
      "Epc = pH constant; ipc = ionic conductivity"
    ],
    answer: 0,
    explain: "On a CV: Epc/ipc are the cathodic (reduction) peak potential and current; Epa/ipa are the anodic (oxidation) peak potential and current."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "If you wanted to compare voltammetry with potentiometry as recap on this lecture, the right framing is:",
    choices: [
      "Potentiometry measures current at zero potential; voltammetry measures voltage at zero current",
      "Potentiometry measures the cell potential at near-zero current (analyte unchanged); voltammetry measures current as the applied potential is varied (analyte consumed at the electrode)",
      "Both methods measure the mass of the working electrode",
      "Both methods are non-faradaic"
    ],
    answer: 1,
    explain: "Potentiometry: measure E at ~zero current, analyte largely unchanged — good for activity. Voltammetry: apply E (often a sweep) and measure i — gives concentration, kinetics, mechanism information."
  },
  {
    topic: "Electroanalysis recap",
    source: "Post lab 2.pdf",
    q: "In an ASV measurement for trace Pb2+, the deposition step applies a potential that is:",
    choices: [
      "Strongly positive of E°(Pb2+/Pb), to oxidize Pb",
      "Strongly negative of E°(Pb2+/Pb), to REDUCE and electroplate Pb onto the working electrode",
      "Held at the open-circuit potential, to do nothing",
      "Rapidly swept at high scan rate, with no fixed potential"
    ],
    answer: 1,
    explain: "ASV deposition: hold a potential well negative of the metal's reduction potential (often with stirring) so Pb2+ is reduced and accumulates on the electrode. Then sweep anodically to strip it back off — giving a peak whose area/height quantifies the trace metal."
  },

  // ============ STILL MORE CHOOSING A TECHNIQUE ============
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "When evaluating analytical methods, common 'figures of merit' include all of these EXCEPT:",
    choices: [
      "Accuracy and precision",
      "Sensitivity and detection limit",
      "Selectivity (and dynamic range)",
      "The color of the instrument cabinet"
    ],
    answer: 3,
    explain: "Standard figures of merit: accuracy, precision, sensitivity, detection limit, selectivity, linear/dynamic range, robustness. Cabinet color is irrelevant."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For an unknown ORGANIC molecule where you have a small (but enough) pure sample and need structural information, the best technique combo to use is:",
    choices: [
      "NMR (with mass spectrometry as a partner) for structure",
      "Flame AAS",
      "ICP-OES",
      "A potentiometric titration"
    ],
    answer: 0,
    explain: "NMR + MS is the standard combination for organic structural elucidation: NMR for connectivity / stereochemistry, MS for molecular mass and fragmentation."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which technique gives multielement QUALITATIVE plus QUANTITATIVE elemental information via characteristic emission wavelengths?",
    choices: [
      "Flame AAS (single-element absorption)",
      "ICP-OES (multielement emission)",
      "NMR",
      "GC-FID"
    ],
    answer: 1,
    explain: "ICP-OES uses inductively coupled plasma to excite atoms; each element emits at characteristic wavelengths, giving multielement qualitative + quantitative info simultaneously."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which is the best technique to use to routinely measure the Pb-207/Pb-206 ISOTOPE RATIO in lead samples?",
    choices: ["ICP-OES", "ICP-MS", "Flame AAS", "FTIR"],
    answer: 1,
    explain: "ICP-MS measures isotopes individually by mass and is the standard tool for isotope-ratio measurements at trace levels."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For separating and quantifying a SMALL-MOLECULE drug in blood plasma at therapeutic concentration, the best technique to use is:",
    choices: [
      "SEC",
      "HPLC–MS (or HPLC with UV detection)",
      "Bomb calorimetry",
      "X-ray crystallography"
    ],
    answer: 1,
    explain: "HPLC–MS is the workhorse for therapeutic drug monitoring and pharmacokinetics — high selectivity, low LOD, and excellent quantitative accuracy in complex biological matrices."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "If TIME is the most constrained resource and you have many similar samples to analyze for the SAME element, the best technique to use is generally:",
    choices: [
      "GFAAS (low throughput per sample)",
      "Flame AAS (high throughput, easy to use); ICP-OES if a few elements at once",
      "ICP-MS (more setup overhead)",
      "NMR"
    ],
    answer: 1,
    explain: "Flame AAS is fast and simple — ideal for high-throughput single-element work. GFAAS gives better LOD but takes minutes per sample."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "If MONEY is the most constrained resource for a routine single-element trace analysis, the best technique to use is typically:",
    choices: ["ICP-MS", "Flame AAS (low capital cost, easy operation)", "MALDI-TOF", "HPLC-ESI-MS"],
    answer: 1,
    explain: "Flame AAS instruments are inexpensive to buy and run, with low consumable costs — best when budget is the dominant constraint and one element is the target."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For determining the OXIDATION STATE of Cr in a wastewater sample (Cr3+ vs Cr6+), the best technique to use is:",
    choices: [
      "Spectroscopic methods like FAAS or ICP — these give total Cr only",
      "Electroanalytical (e.g. voltammetry) or selective wet chemistry / HPLC-ICP-MS — these give SPECIATION info",
      "IR spectroscopy",
      "NMR"
    ],
    answer: 1,
    explain: "Cr6+ is the regulated toxic form; bulk FAAS / ICP-OES report total Cr only. Electroanalysis or speciation-capable methods (HPLC-ICP-MS) distinguish Cr6+ from Cr3+."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "If you have a solid polymer sample and need to identify its composition class quickly with minimal sample prep, the best technique to use is:",
    choices: [
      "FTIR (often with ATR) for functional-group / polymer-class identification",
      "Flame AAS",
      "ICP-OES",
      "Gas chromatography"
    ],
    answer: 0,
    explain: "FTIR-ATR + a polymer spectral library is the standard fast ID method for plastic / polymer samples — exactly the microplastic-ID workflow shown in the slides."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Compared with UV-Vis absorption spectroscopy, FLUORESCENCE spectroscopy of organics is typically:",
    choices: [
      "Less sensitive",
      "More sensitive (often by 2–3 orders of magnitude) WHEN the analyte fluoresces",
      "Identical in sensitivity",
      "Only useful for inorganic ions"
    ],
    answer: 1,
    explain: "Fluorescence detects emitted photons against a dark background — typically 100–1000× more sensitive than UV-Vis absorption for analytes that fluoresce."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "Which technique would be the best FIRST choice to screen wastewater for a particular HEAVY METAL down to ppb levels in a PORTABLE setting (not the lab)?",
    choices: [
      "Lab-bench NMR",
      "Portable anodic stripping voltammetry (ASV) — and in some scenarios portable XRF",
      "GFAAS, which is a lab-bench instrument",
      "Bomb calorimetry"
    ],
    answer: 1,
    explain: "ASV with a portable potentiostat reaches ppb-level metal detection in the field — well suited to environmental screening outside of a fixed lab."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "A SOLID sample usually requires a 'digestion' step before:",
    choices: [
      "SEC of a polymer sample",
      "Atomic spectroscopy methods (ICP-OES / ICP-MS / FAAS / GFAAS) — they need the sample in solution",
      "ATR FTIR",
      "Solid-state NMR"
    ],
    answer: 1,
    explain: "Atomic spectroscopy methods (and many liquid-handling techniques) require the sample as a solution — solid digestion (acid, microwave, fusion) is the standard upstream step."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "When deciding between SEC and ion-exchange chromatography for protein purification, the right rule of thumb is:",
    choices: [
      "Use SEC to fractionate by SIZE; use ion exchange to separate by CHARGE / pI",
      "Use SEC if the sample is colored; ion exchange if it's white",
      "SEC is always faster, so always pick SEC",
      "There is no real difference between the two modes"
    ],
    answer: 0,
    explain: "SEC fractionates by hydrodynamic size; ion-exchange separates by net charge at the chosen pH. Most real protein workflows use both at different stages."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "When deciding between FTIR and NMR for everyday functional-group identification of small organic molecules in a teaching lab, the practical choice is usually:",
    choices: [
      "NMR — fast, cheap, easy at the bench",
      "FTIR — fast, low-cost, abundant functional-group info; NMR gives deeper structural data but is slower and more expensive per sample",
      "They are completely interchangeable for every purpose",
      "Neither identifies functional groups"
    ],
    answer: 1,
    explain: "FTIR is the daily-driver tool for functional-group ID at the bench — quick, inexpensive, and informative. NMR adds structural detail but at higher per-sample cost and time."
  },
  {
    topic: "Choosing a technique",
    source: "Post lab 2.pdf",
    q: "For an unknown organic compound of which you have ~10 mg of pure material and want both functional-group info AND molecular weight, the most efficient combo to use is:",
    choices: [
      "IR (for functional groups) + MS (for molecular weight / fragmentation)",
      "Bomb calorimetry + IR",
      "SEC + ion chromatography",
      "FAAS + GFAAS"
    ],
    answer: 0,
    explain: "IR identifies functional groups quickly; MS gives accurate mass and fragmentation patterns. Together they answer most 'what is this molecule?' questions for a single, pure compound."
  }
];

// Expose for the browser
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}

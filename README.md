# Chem 126 — Post Lab 2 Quiz

A static multiple-choice quiz site covering the Post Lab 2 lecture material:

- Chromatography (ion exchange, size exclusion, partition / adsorption)
- IR / FTIR / ATR spectroscopy
- Electroanalysis recap (potentiometry, glass electrodes, F- ISE, voltammetry, ASV, LSV)
- How to choose an analytical technique

60 questions in total. Pick a topic, answer each question, and see the correct answer plus an explanation citing the source slide deck.

## Run locally

```bash
python3 -m http.server 3012
# open http://127.0.0.1:3012/
```

No build step, no dependencies — plain HTML, CSS, JS.

## Files

- `index.html` — page shell
- `styles.css` — visual styles
- `app.js` — quiz logic
- `questions.js` — 60-question bank

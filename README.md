# 🗄️ Data Systems Book

Visual, chapter-by-chapter study notes on designing data-intensive applications, built with [Docusaurus](https://docusaurus.io/).

**Live site:** https://pratikguru998.github.io/ddia-book/

- **12 chapters** in 3 parts, following the structure of Martin Kleppmann's *Designing Data-Intensive Applications* (O'Reilly, 2017)
- Every mechanism drawn as a **Mermaid diagram** (replication, LSM-trees, 2PC, quorums, windows…)
- **Page pointers** (📖) to the matching section of the book's PDF
- **Quizzes** and interview prompts at the end of every chapter
- A one-page **cheat sheet** and a **glossary**

All text and diagrams are original study notes, not excerpts from the book. Read the book itself for full depth.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Add content

- Chapters: `docs/chapters/part-*/NN-*.mdx`
- Global MDX components (no import needed): `<Quiz>`, `<IconCards>`, `<BookRef pages="" section="">`, `<KeyIdea>`

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`.

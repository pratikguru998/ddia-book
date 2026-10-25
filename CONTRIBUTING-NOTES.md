# Style guide for chapter pages

These are personal study notes that follow the chapter structure of *Designing Data-Intensive Applications* (Kleppmann, O'Reilly). The site is public, so:

## Copyright rules (strict)
- Write **everything in your own words**. Never copy sentences or near-verbatim paraphrases from the book.
- **Do not reproduce the book's figures, figure data, or running examples.** Invent your own examples: your own key names, numbers, scenarios, people, products, code. (For example, don't reuse the book's specific example datasets, names or numeric tables.)
- Well-known general concepts, algorithms, product names and public facts are fine.
- No quotes from the book. You may read the PDF to check *which topics* a section covers, but the explanation must be yours.

## Page format (MDX, Docusaurus)
- Keep the existing front matter (`title`, `sidebar_label`, `slug`, `sidebar_position`). Don't change slugs.
- Structure: `# N · Title`, then a `> **In one line:** …` summary, then `<BookRef pages="…" section="Chapter N" />`.
- **Every subsection of the book's chapter gets its own heading** (`##` for sections, `###` for subsections), each followed by `<BookRef pages="x–y" section="Subsection name" />` using the page numbers given to you (PDF page numbers).
- Depth: thorough study notes. Explain *why* as well as *what*, add worked examples, edge cases, comparisons, real systems that use each technique. Aim for a long, complete chapter (roughly 700–1100 lines of MDX), similar in depth to `docs/chapters/part-1/03-storage-retrieval.mdx`.
- Global components available without import:
  - `<BookRef pages="174–183" section="Leaders and Followers" />`
  - `<KeyIdea>one sentence to remember</KeyIdea>` (optional `title="…"`)
  - `<Quiz question="…" options={["a","b","c","d"]} answer={1} explain="…" />` (answer is a 0-based index)
  - `<IconCards items={[{icon:'📈', title:'…', text:'…', color:'#3b82f6'}]} />`
- In JSX attribute strings, escape apostrophes inside single-quoted JS strings (`'don\'t'`) or use double quotes. Don't use `{` or `<` raw in normal prose outside code (MDX treats them as JSX); put them in backticks.
- Use tables for comparisons and fenced code blocks (sql, js, python, json, protobuf, bash, text) for examples.
- End with `## Summary` (with its BookRef), then `## 🧠 Check yourself` with **6–8 quizzes** and an **Interview prompts** bullet list.

## Mermaid diagrams (lots of them: aim for 12–20 per chapter)
- Use ```` ```mermaid ```` blocks: `flowchart`, `sequenceDiagram`, `mindmap`, `timeline`, `erDiagram`, `gantt`, `xychart-beta`.
- **Always quote node labels** that contain spaces, punctuation or parentheses: `A["text (like this)"]`. Use `<br/>` for line breaks inside labels.
- Edge labels: `-->|"label"|`.
- In `sequenceDiagram`, avoid semicolons and the `#` character in message text; `Note over A,B: text` is fine.
- In `mindmap`, avoid parentheses and brackets in node text except the root `root((Title))`.
- Never use the word `end` as a bare node id in flowcharts.
- Redraw every mechanism with your own example data.

## Don't
- Don't run `npm run build` or start servers (several people edit in parallel; the build is checked at the end).
- Don't edit any file other than the one chapter file you were assigned.

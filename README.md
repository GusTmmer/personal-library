# Personal Library

A visual bookshelf cataloguing the software engineering books I've read — and the ones on my list. Built as a side project to pair my reading habit with short-form writing.

**Live site → [gustmmer.github.io/personal-library](https://gustmmer.github.io/personal-library)**

---

## What it does

- Displays books as a forward-facing shelf, grouped by row
- Filter between **All**, **Read**, and **Plan to Read**
- Click any book to open an essay I wrote about it
- Plan-to-read books are marked with an amber corner ribbon

## Stack

- **React 19** + **Vite** — no framework, no router, plain component state
- **CSS Modules** — scoped styles, no utility classes
- **CSS custom properties** — all design tokens in one place
- No backend — books and essays live in `src/data/books.js`

## Running locally

```bash
npm install
npm run dev
```

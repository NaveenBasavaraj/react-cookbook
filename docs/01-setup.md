
---

## React Mastery — CSS-Free Cookbook

**The constraint is real and solvable.** You'll use **Tailwind CSS** — utility classes inline, no separate CSS files, no mental overhead. It reads like HTML attributes, not stylesheets. You think in components, Tailwind handles the rest.

---

### Local Setup

**Stack:** Vite + React + Tailwind CSS

```bash
npm create vite@latest react-cookbook -- --template react
cd react-cookbook
npm install
npm install -D tailwindcss @tailwindcss/vite
```

In `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

In `src/index.css` (replace everything):
```css
@import "tailwindcss";
```

Then run:
```bash
npm run dev
```

That's it. No `tailwind.config.js` needed with the new Vite plugin.

---

### Folder structure

Keep it flat — one file per exercise:

```
src/
  exercises/
    01-counter.jsx
    02-toggle.jsx
    ...
  App.jsx        ← swap imports here as you go
  main.jsx
  index.css
```

---

### The 50 Problems — Roadmap

**Tier 1 — Foundations (1–12):** useState, props, conditional rendering, lists

1. Counter (increment/decrement/reset)
2. Toggle (show/hide text)
3. Character counter (textarea with live count)
4. Traffic light (cycle through states)
5. Like button (toggle + count)
6. Tip calculator
7. BMI calculator
8. Todo list (add/delete)
9. Todo list with done/undone toggle
10. Filterable todo (all / active / completed)
11. Dynamic form (add/remove input fields)
12. Accordion (one open at a time)

**Tier 2 — Intermediate (13–28):** useEffect, useRef, data fetching, lifting state

13. Stopwatch ⏱️
14. Countdown timer with alarm
15. Digital clock (live)
16. Debounced search input
17. Character limit warning (turns red near limit)
18. Password strength meter
19. Multi-step form wizard
20. Star rating widget
21. Color picker (hex preview)
22. Random quote fetcher (public API)
23. Weather widget (wttr.in API)
24. GitHub user profile card (GitHub API)
25. Pagination (client-side)
26. Sortable table
27. Image carousel
28. Drag-to-reorder list

**Tier 3 — Advanced Patterns (29–40):** useReducer, useContext, custom hooks, performance

29. Theme switcher (dark/light via Context)
30. Auth mock (login/logout state via Context)
31. Shopping cart (useReducer)
32. Undo/redo (useReducer + history stack)
33. useLocalStorage custom hook
34. useFetch custom hook
35. useDebounce custom hook
36. Virtualized list (render 10k items efficiently)
37. Infinite scroll
38. Modal system with portal
39. Toast notification system
40. Global keyboard shortcut handler

**Tier 4 — Real-World Apps (41–50):** Composition, routing, async patterns

41. Live flight board (polling API or mock) ✈️
42. Kanban board (drag between columns)
43. Markdown previewer
44. Pomodoro timer
45. Expense tracker with charts
46. Multi-tab app with React Router
47. Real-time search with debounce + cache
48. Form with Zod validation
49. Optimistic UI (like a tweet before server confirms)
50. Mini dashboard (combine 3–4 earlier exercises)

---

### How we'll work

Each exercise I give you:
- **Goal** — what you're building and which concept it targets
- **Starter code** — skeleton to fill in
- **Solution** — after you try it
- **What's next** — how it connects to the next exercise



---

**Concept** → what React idea this teaches
**Mental model** → one plain-English analogy before any code
**Build it** → step-by-step what to do
**Solution** → full working code
**What just happened** → explain the solution in plain English
**Next** → what Exercise 2 builds on top of this

---

## Exercise 1 — Counter

**Concept:** `useState` — React's way of remembering values that change

**Mental model:**
A regular JS variable resets every time a function runs. React renders (re-runs) your component every time something changes. So if you store a number in a plain variable, it forgets the value on every render. `useState` is a special box that **survives re-renders** and also **triggers a re-render when you update it**.

```
useState(0)  →  [currentValue, functionToUpdateIt]
```

---

**Build it — step by step:**

1. Create `src/exercises/01-counter.jsx`
2. Write a function component — it's just a function that returns JSX
3. Call `useState(0)` to create a count variable
4. Return three buttons: **+**, **−**, **Reset**
5. Wire each button's `onClick` to update the count
6. Import it in `App.jsx` and run

---

**Solution:**

`src/exercises/01-counter.jsx`
```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <h1 className="text-6xl font-bold">{count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-xl text-xl"
        >
          −
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-gray-400 text-white rounded-xl text-xl"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-green-500 text-white rounded-xl text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
```

`src/App.jsx`
```jsx
import Counter from "./exercises/01-counter";

export default function App() {
  return <Counter />;
}
```

---

**What just happened:**

- `useState(0)` creates the box with initial value `0`. It hands you back two things: the current value (`count`) and the updater function (`setCount`).
- When you click **+**, `setCount(count + 1)` runs → React updates the box → React re-renders the component → the new `count` shows on screen.
- `onClick={() => setCount(...)}` — the `() =>` is important. Without it, the function runs immediately on render instead of waiting for a click.
- The Tailwind classes (`flex`, `gap-4`, `text-6xl`, etc.) are just inline styling — ignore the details for now, read them as plain English (`text-6xl` = big text, `bg-red-500` = red background).

---

**Checkpoint — try these before moving on:**

- Add a **Double** button that multiplies count by 2
- Prevent the counter from going below 0 (hint: `count > 0` before decrementing)

---


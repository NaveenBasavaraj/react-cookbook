## Exercise 4 — Traffic Light

**Concept:** State as a label + deriving everything from one value

**Mental model:**
So far state was a number (counter) or boolean (toggle) or string (character counter). Here state is one value from a **fixed set of options** — like an enum. The entire UI — colors, text, behavior — is derived from that single label. One source of truth, everything else follows.

```
"red" → show red circle + "Stop"
"yellow" → show yellow circle + "Slow Down"  
"green" → show green circle + "Go"
```

---

**Build it — step by step:**

1. Create `src/exercises/04-traffic-light.jsx`
2. `useState("red")` — start at red
3. Define the light sequence as an array: `["red", "yellow", "green"]`
4. On button click, move to the next light in sequence (loop back after green)
5. Derive the display color and message from current state

---

**Solution:**

`src/exercises/04-traffic-light.jsx`
```jsx
import { useState } from "react";

const LIGHTS = ["red", "yellow", "green"];

const LIGHT_CONFIG = {
  red:    { bg: "bg-red-500",    message: "Stop",      textColor: "text-red-500"    },
  yellow: { bg: "bg-yellow-400", message: "Slow Down", textColor: "text-yellow-500" },
  green:  { bg: "bg-green-500",  message: "Go!",       textColor: "text-green-500"  },
};

export default function TrafficLight() {
  const [current, setCurrent] = useState("red");

  function nextLight() {
    const currentIndex = LIGHTS.indexOf(current);
    const nextIndex = (currentIndex + 1) % LIGHTS.length;
    setCurrent(LIGHTS[nextIndex]);
  }

  const config = LIGHT_CONFIG[current];

  return (
    <div className="flex flex-col items-center gap-6 mt-20">

      <h1 className="text-2xl font-bold">Traffic Light</h1>

      {/* Traffic light housing */}
      <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-2xl">
        {LIGHTS.map((light) => (
          <div
            key={light}
            className={`w-24 h-24 rounded-full ${
              current === light ? LIGHT_CONFIG[light].bg : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Message */}
      <p className={`text-3xl font-bold ${config.textColor}`}>
        {config.message}
      </p>

      {/* Button */}
      <button
        onClick={nextLight}
        className="px-8 py-3 bg-blue-500 text-white rounded-xl text-lg"
      >
        Next
      </button>

    </div>
  );
}
```

`src/App.jsx`
```jsx
import TrafficLight from "./exercises/04-traffic-light";

export default function App() {
  return <TrafficLight />;
}
```

---

**What just happened:**

**The modulo trick for cycling:**
```jsx
const nextIndex = (currentIndex + 1) % LIGHTS.length;
```
`%` is the remainder operator. When `currentIndex` is 2 (green, last item), `(2 + 1) % 3 = 0` — wraps back to red. This is the standard pattern for cycling through any fixed list.

**Config object as a lookup table:**
```jsx
const LIGHT_CONFIG = {
  red:    { bg: "bg-red-500", message: "Stop", ... },
  yellow: { ... },
  green:  { ... },
};

const config = LIGHT_CONFIG[current];  // current = "red" → gives red's config
```
Instead of writing `if/else` or nested ternaries for every property, you define the data once and look it up. Cleaner, easier to extend. Adding a new light = add one entry to the object.

**Rendering a list with `.map()`:**
```jsx
{LIGHTS.map((light) => (
  <div key={light} className={...} />
))}
```
`.map()` transforms an array into an array of JSX elements. React renders them all. The `key` prop is required — React uses it to track which element is which across re-renders. Always use a stable unique value (id, name — not array index if the list can reorder).

**JSX comments:**
```jsx
{/* This is how you comment in JSX */}
```
`//` won't work inside JSX. Always use `{/* */}`.

---

**Interview concepts — Exercise 4:**

**Lifting config out of render:**
Everything in `LIGHT_CONFIG` and `LIGHTS` is defined outside the component. They don't depend on props or state, so they never need to be recreated. If they were inside the component, JavaScript would rebuild those objects on every single render — wasted work.

**Why `.map()` for lists, not manual JSX:**
```jsx
// Bad — repetitive, hard to maintain
<div className="bg-red-500 ..." />
<div className="bg-yellow-400 ..." />
<div className="bg-green-500 ..." />

// Good — data drives the UI
{LIGHTS.map((light) => <div key={light} ... />)}
```
In React, **data drives UI**. If you find yourself copy-pasting JSX with slight variations, that's a signal to use `.map()` with a config object.

**The `key` prop — what interviewers always ask:**
- React uses `key` to identify elements in a list across re-renders
- Without it, React may re-render the wrong elements when the list changes
- Must be unique among siblings
- Don't use array index as key if the list can be reordered or filtered — it causes subtle bugs
- Use a real id from your data whenever possible

**Single source of truth:**
The entire UI is derived from one `useState` value — the string `"red"`, `"yellow"`, or `"green"`. This is a core React principle. When you have one authoritative value and everything else is derived, your UI is always consistent. Two `useState` values that have to stay in sync is a bug waiting to happen.

---

**Checkpoint — try before moving on:**

- Make it auto-advance every 2 seconds without clicking (hint: you'll need `setInterval` — just try it, we'll cover `useEffect` + timers properly in Exercise 13)
- Add a `mode` toggle — "Manual" vs "Auto" — where auto cycles on its own

---

**Next:** Exercise 5 — Like Button. Combines a boolean toggle with a number counter in the same component. You'll manage two related pieces of state and see how they interact.

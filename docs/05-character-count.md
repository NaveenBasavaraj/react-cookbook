## Exercise 3 — Character Counter

**Concept:** Controlled inputs + `onChange` event handling

**Mental model:**
In plain HTML, the browser owns the input. You type, the browser updates the box, you read it later. In React, **you own the input**. React state holds the value, and the input just displays whatever state says. Every keystroke → updates state → React re-renders → input shows the new value. You're always in control.

This is called a **controlled component**.

```
User types → onChange fires → setState → re-render → input reflects state
```

---

**Build it — step by step:**

1. Create `src/exercises/03-character-counter.jsx`
2. `useState("")` — empty string as initial value
3. A `<textarea>` wired with `value={text}` and `onChange`
4. Display live character count below
5. Show a warning color when count exceeds a limit (say 100)

---

**Solution:**

`src/exercises/03-character-counter.jsx`
```jsx
import { useState } from "react";

const LIMIT = 100;

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const count = text.length;
  const isNearLimit = count >= LIMIT * 0.8;  // warn at 80%
  const isOverLimit = count > LIMIT;

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

      <h1 className="text-2xl font-bold">Character Counter</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        className="w-96 h-40 p-4 border-2 border-gray-300 rounded-xl resize-none text-gray-700 focus:outline-none focus:border-blue-400"
      />

      <p className={`text-lg font-semibold ${
        isOverLimit
          ? "text-red-500"
          : isNearLimit
          ? "text-yellow-500"
          : "text-gray-500"
      }`}>
        {count} / {LIMIT}
      </p>

      {isOverLimit && (
        <p className="text-red-500 text-sm">
          You are {count - LIMIT} characters over the limit!
        </p>
      )}

    </div>
  );
}
```

`src/App.jsx`
```jsx
import CharacterCounter from "./exercises/03-character-counter";

export default function App() {
  return <CharacterCounter />;
}
```

---

**What just happened:**

**`value={text}` + `onChange`** — these two always go together on a controlled input. `value` locks the input to state. `onChange` updates state on every keystroke. Remove either one and it breaks.

**The event object `e`:**
```jsx
onChange={(e) => setText(e.target.value)}
```
Every browser event gives you an event object. `e.target` is the DOM element that fired it. `e.target.value` is what's currently typed in it. You'll use `e.target.value` on every input you ever write in React.

**Dynamic `className` with ternary:**
```jsx
className={`text-lg font-semibold ${
  isOverLimit
    ? "text-red-500"
    : isNearLimit
    ? "text-yellow-500"
    : "text-gray-500"
}`}
```
Backtick = template literal. The `${}` part is a JS expression. You can nest ternaries to handle multiple conditions. This is the standard pattern for conditional styling in Tailwind.

**Derived state:**
```jsx
const count = text.length;
const isNearLimit = count >= LIMIT * 0.8;
const isOverLimit = count > LIMIT;
```
These are NOT in `useState`. They are plain variables **derived from state** — computed fresh on every render. Rule of thumb: if a value can be calculated from existing state, don't put it in `useState`. Just compute it.

---

**Interview concepts — Exercise 3:**

**Controlled vs Uncontrolled components**
- Controlled: React state drives the input value. You always know exactly what's in the input. Easier to validate, transform, or react to.
- Uncontrolled: The DOM owns the value. You read it via `useRef` when needed. Simpler for basic cases but harder to work with in complex forms.
- In interviews: "I prefer controlled components because the UI is always a direct reflection of state — no surprises."

**Why `e.target.value` and not just `e.value`:**
The event object represents the event itself (a keypress, a click). The thing that was interacted with is `e.target` — the actual DOM node. The value lives on the node, not the event.

**Derived state vs redundant state:**
A classic interview question — "when do you use `useState`?" Answer: only when the value cannot be computed from existing state. If it can be derived, derive it. Storing derived values in `useState` causes sync bugs — you'd have to remember to update multiple pieces of state together.

**`const` for constants outside the component:**
```jsx
const LIMIT = 100;  // outside component — created once
```
If this were inside the component, it would be recreated on every render. Constants that don't depend on props or state belong outside.

---

**Checkpoint — try before moving on:**

- Disable the textarea when `isOverLimit` is true (hint: `disabled` prop)
- Add a **Clear** button that resets text to `""`

---


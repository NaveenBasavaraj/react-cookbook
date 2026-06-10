
---

## Tailwind — Mental Model

In plain HTML you write CSS separately:
```css
/* styles.css */
.box { display: flex; font-size: 24px; color: red; }
```
```html
<div class="box">
```

In Tailwind, the CSS *is* the class name:
```html
<div class="flex text-2xl text-red-500">
```

That's it. No file switching. No naming classes. Each utility class does exactly one thing.

---

**The classes you'll use 90% of the time:**

| What you want | Tailwind class |
|---|---|
| Flexbox row | `flex` |
| Flexbox column | `flex flex-col` |
| Center children | `items-center justify-center` |
| Gap between children | `gap-4` (4 = 16px) |
| Padding | `p-4`, `px-4` (horizontal), `py-4` (vertical) |
| Margin | `mt-4` (top), `mb-4` (bottom) |
| Text size | `text-sm`, `text-xl`, `text-4xl` |
| Font weight | `font-bold`, `font-semibold` |
| Background color | `bg-blue-500`, `bg-gray-100` |
| Text color | `text-white`, `text-gray-700` |
| Border radius | `rounded`, `rounded-xl`, `rounded-full` |
| Width/Height | `w-full`, `w-40`, `h-10` |
| Full screen height | `min-h-screen` |

**Color scale:** `100` = very light, `500` = medium, `900` = very dark.
So `bg-blue-100` is light blue, `bg-blue-900` is near-black blue.

**Spacing scale:** each unit = 4px. So `p-4` = 16px, `gap-6` = 24px, `mt-8` = 32px.

That's enough to never think about CSS again during these exercises. You'll pick up the rest naturally.

---

## Interview Concepts — Exercise 1 Notes

Keep these. These are the exact things interviewers probe.

**`useState`**
- React components re-render when state changes.
- `useState` returns a tuple: `[value, setter]`.
- Never mutate state directly (`count++` won't work). Always use the setter.
- The setter triggers a re-render. Direct mutation does not.

**Why `() =>` in onClick**
```jsx
onClick={setCount(count + 1)}   // WRONG — runs on render, not on click
onClick={() => setCount(count + 1)}  // RIGHT — runs only on click
```
The `() =>` wraps it in a function so it only executes when the event fires.

**JSX is not HTML**
- `class` → `className` (because `class` is a reserved word in JS)
- All tags must be closed: `<input />` not `<input>`
- You can only return one root element — wrap siblings in `<div>` or `<>` (Fragment)

---

## Exercise 2 — Toggle

**Concept:** `useState` with booleans + conditional rendering

**Mental model:**
A light switch. The state is either `true` (on) or `false` (off). Your UI reacts to which state it's in — showing different content or different styles based on that boolean.

---

**Build it — step by step:**

1. Create `src/exercises/02-toggle.jsx`
2. `useState(false)` — start with content hidden
3. One button that flips the boolean: `setIsVisible(!isVisible)`
4. Conditionally render a paragraph — show it only when `isVisible` is `true`
5. Change the button label based on state — "Show" vs "Hide"

---

**Solution:**

`src/exercises/02-toggle.jsx`
```jsx
import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 mt-20">

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-2 bg-blue-500 text-white rounded-xl text-lg"
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <p className="text-xl text-gray-700 bg-gray-100 px-8 py-4 rounded-xl">
          Hello! I appear and disappear.
        </p>
      )}

    </div>
  );
}
```

`src/App.jsx`
```jsx
import Toggle from "./exercises/02-toggle";

export default function App() {
  return <Toggle />;
}
```

---

**What just happened:**

**`!isVisible`** — the `!` flips a boolean. `!false` = `true`, `!true` = `false`. So every click toggles between the two.

**Conditional rendering — two patterns you'll use forever:**

```jsx
// Pattern 1 — && (show or show nothing)
{isVisible && <p>I exist only when true</p>}
```
If `isVisible` is `false`, React renders nothing. If `true`, it renders the `<p>`.

```jsx
// Pattern 2 — ternary (show one thing or another)
{isVisible ? "Hide" : "Show"}
```
True → first option. False → second option.

Both patterns appear in literally every React codebase.

---

**Interview concepts — Exercise 2:**

**Conditional rendering**
- React renders JSX expressions. An expression that evaluates to `false`, `null`, or `undefined` renders nothing.
- `&&` short-circuits: if the left side is falsy, the right side never evaluates.
- Ternary (`? :`) is preferred over `if/else` inside JSX because JSX only accepts expressions, not statements.

**Why not `if/else` inside JSX:**
```jsx
// WRONG — if is a statement, not an expression
return (
  <div>
    {if (isVisible) { <p>hi</p> }}  // syntax error
  </div>
)

// RIGHT — ternary is an expression
return (
  <div>
    {isVisible ? <p>hi</p> : null}
  </div>
)
```

**Boolean state naming convention:** prefix with `is` or `has` — `isVisible`, `isLoading`, `hasError`. This is a widely followed convention, not just style.

---

**Checkpoint — try before moving on:**

- Add a second independent toggle for a different piece of text (two separate `useState` calls)
- Make the button turn green when content is visible, gray when hidden (hint: ternary in the `className`)

---
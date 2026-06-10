# Tailwind CSS Cheatsheet

> Drop this file anywhere in your repo. Copy-paste classes directly into JSX `className` props.

---

## 1. How Tailwind Works

Tailwind is a **utility-first CSS framework**. Instead of writing custom CSS, you compose small
single-purpose classes directly on your HTML/JSX elements.

```jsx
// Normal CSS way
<div className="card">Hello</div>

// Tailwind way
<div className="bg-white rounded-lg shadow-md p-6 text-gray-800">Hello</div>
```

No CSS files needed. Every class maps to one CSS rule.

---

## 2. The Spacing Scale

Tailwind uses a numeric scale. **1 unit = 4px**.

| Class suffix | px  |
|-------------|-----|
| `1`         | 4px  |
| `2`         | 8px  |
| `3`         | 12px |
| `4`         | 16px |
| `5`         | 20px |
| `6`         | 24px |
| `8`         | 32px |
| `10`        | 40px |
| `12`        | 48px |
| `16`        | 64px |
| `20`        | 80px |
| `24`        | 96px |
| `32`        | 128px|
| `64`        | 256px|

This scale applies to: padding `p-`, margin `m-`, width `w-`, height `h-`, gap `gap-`, etc.

---

## 3. Width

### Fixed widths (from spacing scale)
```jsx
<div className="w-4">   {/* 16px */}
<div className="w-8">   {/* 32px */}
<div className="w-16">  {/* 64px */}
<div className="w-32">  {/* 128px */}
<div className="w-64">  {/* 256px */}
<div className="w-96">  {/* 384px */}
```

### Percentage widths
```jsx
<div className="w-1/2">   {/* 50% of parent */}
<div className="w-1/3">   {/* 33.3% of parent */}
<div className="w-2/3">   {/* 66.6% of parent */}
<div className="w-1/4">   {/* 25% of parent */}
<div className="w-3/4">   {/* 75% of parent */}
<div className="w-full">  {/* 100% of parent */}
```

### Screen-relative widths
```jsx
<div className="w-screen"> {/* 100vw — full browser viewport width */}
```

### Special
```jsx
<div className="w-auto">  {/* width: auto — shrinks to content */}
<div className="w-fit">   {/* width: fit-content */}
<div className="w-min">   {/* width: min-content */}
<div className="w-max">   {/* width: max-content */}
```

### Max-width (common for containers)
```jsx
<div className="max-w-sm">   {/* 384px */}
<div className="max-w-md">   {/* 448px */}
<div className="max-w-lg">   {/* 512px */}
<div className="max-w-xl">   {/* 576px */}
<div className="max-w-2xl">  {/* 672px */}
<div className="max-w-4xl">  {/* 896px */}
<div className="max-w-6xl">  {/* 1152px */}
<div className="max-w-7xl">  {/* 1280px */}
<div className="max-w-full"> {/* 100% */}
<div className="max-w-screen-lg"> {/* 1024px — matches lg breakpoint */}
```

### Concrete example: "how much of the screen?"
Assume screen is 1280px wide.

```jsx
{/* Full width — takes entire screen */}
<div className="w-full bg-blue-200">100% = 1280px</div>

{/* Half width */}
<div className="w-1/2 bg-green-200">50% = 640px</div>

{/* Centered container with max width */}
<div className="max-w-4xl mx-auto bg-red-200">
  capped at 896px, centered
</div>

{/* Fixed 256px regardless of screen */}
<div className="w-64 bg-yellow-200">256px always</div>
```

---

## 4. Height

Same scale as width.

```jsx
<div className="h-4">     {/* 16px */}
<div className="h-16">    {/* 64px */}
<div className="h-64">    {/* 256px */}
<div className="h-full">  {/* 100% of parent — parent must have explicit height */}
<div className="h-screen">{/* 100vh — full viewport height */}
<div className="h-auto">  {/* height: auto */}
<div className="min-h-screen"> {/* min-height: 100vh — page takes at least full screen */}
```

---

## 5. Responsive Breakpoints

Tailwind is **mobile-first**. Unprefixed classes apply everywhere. Prefixed ones apply at that
breakpoint and above.

| Prefix | Min-width | Typical device        |
|--------|----------|-----------------------|
| (none) | 0px      | all screens           |
| `sm:`  | 640px    | large phones, tablets |
| `md:`  | 768px    | tablets               |
| `lg:`  | 1024px   | laptops               |
| `xl:`  | 1280px   | desktops              |
| `2xl:` | 1536px   | large desktops        |

```jsx
{/* Full width on mobile, half on tablet, one-third on desktop */}
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive box
</div>

{/* Text size changes by breakpoint */}
<h1 className="text-xl md:text-3xl lg:text-5xl">Big heading</h1>

{/* Hide on mobile, show on desktop */}
<nav className="hidden lg:block">Desktop nav</nav>

{/* Show on mobile only */}
<button className="block lg:hidden">Menu</button>
```

---

## 6. Padding & Margin

### Padding
```jsx
<div className="p-4">    {/* all sides: 16px */}
<div className="px-4">   {/* left + right: 16px */}
<div className="py-4">   {/* top + bottom: 16px */}
<div className="pt-4">   {/* top only */}
<div className="pb-4">   {/* bottom only */}
<div className="pl-4">   {/* left only */}
<div className="pr-4">   {/* right only */}
```

### Margin
```jsx
<div className="m-4">    {/* all sides */}
<div className="mx-auto">{/* horizontal center — use with fixed/max width */}
<div className="my-8">   {/* top + bottom: 32px */}
<div className="mt-4">   {/* top only */}
<div className="mb-4">   {/* bottom only */}
<div className="-mt-4">  {/* negative margin: pull up by 16px */}
```

---

## 7. Flexbox

```jsx
{/* Basic flex row */}
<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

{/* Common combos */}
<div className="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<div className="flex items-center justify-center gap-4">
  <button>A</button>
  <button>B</button>
</div>

{/* Column direction */}
<div className="flex flex-col gap-2">
  <div>Row 1</div>
  <div>Row 2</div>
</div>

{/* Wrap when items overflow */}
<div className="flex flex-wrap gap-2">
  {items.map(i => <div key={i}>{i}</div>)}
</div>
```

### Justify (main axis — horizontal in row)
| Class                  | Effect                          |
|------------------------|---------------------------------|
| `justify-start`        | pack left (default)             |
| `justify-end`          | pack right                      |
| `justify-center`       | center                          |
| `justify-between`      | space between items             |
| `justify-around`       | equal space around items        |
| `justify-evenly`       | equal space between + edges     |

### Align (cross axis — vertical in row)
| Class             | Effect              |
|-------------------|---------------------|
| `items-start`     | top-align           |
| `items-center`    | vertically center   |
| `items-end`       | bottom-align        |
| `items-stretch`   | stretch to fill (default) |
| `items-baseline`  | align text baselines |

### Flex child sizing
```jsx
<div className="flex-1">    {/* grow to fill space */}
<div className="flex-none"> {/* don't grow/shrink */}
<div className="flex-auto"> {/* grow, shrink, respect content size */}
<div className="shrink-0">  {/* never shrink (use for logos, icons) */}
```

---

## 8. Grid

```jsx
{/* 3-column equal grid */}
<div className="grid grid-cols-3 gap-4">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

{/* Responsive: 1 col mobile, 2 tablet, 4 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(i => <Card key={i} />)}
</div>

{/* Span multiple columns */}
<div className="grid grid-cols-6">
  <div className="col-span-4">Main</div>
  <div className="col-span-2">Sidebar</div>
</div>

{/* Auto-fit: fills as many columns as fit, min 200px each */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
```

---

## 9. Typography

### Font size
```jsx
<p className="text-xs">    {/* 12px */}
<p className="text-sm">    {/* 14px */}
<p className="text-base">  {/* 16px — default body */}
<p className="text-lg">    {/* 18px */}
<p className="text-xl">    {/* 20px */}
<p className="text-2xl">   {/* 24px */}
<p className="text-3xl">   {/* 30px */}
<p className="text-4xl">   {/* 36px */}
<p className="text-5xl">   {/* 48px */}
<p className="text-6xl">   {/* 60px */}
```

### Font weight
```jsx
<span className="font-thin">      {/* 100 */}
<span className="font-light">     {/* 300 */}
<span className="font-normal">    {/* 400 */}
<span className="font-medium">    {/* 500 */}
<span className="font-semibold">  {/* 600 */}
<span className="font-bold">      {/* 700 */}
<span className="font-extrabold"> {/* 800 */}
```

### Text color
```jsx
<p className="text-gray-500">   {/* medium gray */}
<p className="text-gray-900">   {/* near black */}
<p className="text-white">
<p className="text-blue-600">
<p className="text-red-500">
```

### Other text utilities
```jsx
<p className="text-center">
<p className="text-right">
<p className="text-left">        {/* default */}
<p className="uppercase">
<p className="lowercase">
<p className="capitalize">
<p className="tracking-wide">    {/* letter-spacing */}
<p className="tracking-tight">
<p className="leading-tight">    {/* line-height */}
<p className="leading-relaxed">
<p className="leading-loose">
<p className="truncate">         {/* overflow ellipsis, single line */}
<p className="line-clamp-2">     {/* 2-line clamp with ellipsis */}
```

---

## 10. Colors

Format: `{property}-{color}-{shade}`  
Shade range: 50 (lightest) → 950 (darkest). Common: 100, 200, 300, 400, 500, 600, 700, 800, 900.

```jsx
{/* Background */}
<div className="bg-blue-500">
<div className="bg-gray-100">
<div className="bg-white">
<div className="bg-black">
<div className="bg-transparent">

{/* Text */}
<p className="text-blue-700">
<p className="text-gray-600">

{/* Border */}
<div className="border border-gray-300">
<div className="border-2 border-blue-500">

{/* Opacity modifier */}
<div className="bg-blue-500/50">  {/* blue at 50% opacity */}
<div className="text-black/75">   {/* black at 75% opacity */}
```

### Color palette names
`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`,
`green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`,
`pink`, `rose`

---

## 11. Borders & Rounded Corners

```jsx
{/* Border thickness */}
<div className="border">      {/* 1px */}
<div className="border-2">    {/* 2px */}
<div className="border-4">    {/* 4px */}
<div className="border-8">    {/* 8px */}
<div className="border-0">    {/* remove border */}

{/* Individual sides */}
<div className="border-t border-b">  {/* top + bottom only */}
<div className="border-l-4">         {/* thick left border */}

{/* Border radius */}
<div className="rounded-sm">    {/* 2px */}
<div className="rounded">       {/* 4px */}
<div className="rounded-md">    {/* 6px */}
<div className="rounded-lg">    {/* 8px */}
<div className="rounded-xl">    {/* 12px */}
<div className="rounded-2xl">   {/* 16px */}
<div className="rounded-3xl">   {/* 24px */}
<div className="rounded-full">  {/* 9999px — circle or pill */}

{/* Individual corners */}
<div className="rounded-t-lg">   {/* top two corners */}
<div className="rounded-tl-xl">  {/* top-left only */}
```

---

## 12. Shadows

```jsx
<div className="shadow-sm">   {/* subtle */}
<div className="shadow">      {/* default */}
<div className="shadow-md">   {/* medium */}
<div className="shadow-lg">   {/* large */}
<div className="shadow-xl">   {/* extra large */}
<div className="shadow-2xl">  {/* heavy */}
<div className="shadow-none"> {/* remove shadow */}

{/* Colored shadow */}
<div className="shadow-lg shadow-blue-500/40">
```

---

## 13. Display & Visibility

```jsx
<div className="block">          {/* display: block */}
<div className="inline">         {/* display: inline */}
<div className="inline-block">   {/* display: inline-block */}
<div className="flex">
<div className="inline-flex">    {/* flex but inline */}
<div className="grid">
<div className="hidden">         {/* display: none */}

{/* Visibility (still takes up space) */}
<div className="visible">
<div className="invisible">
```

---

## 14. Position

```jsx
<div className="static">    {/* default */}
<div className="relative">  {/* position: relative — anchor for absolute children */}
<div className="absolute">  {/* position: absolute — relative to nearest relative parent */}
<div className="fixed">     {/* position: fixed — relative to viewport */}
<div className="sticky">    {/* sticks on scroll */}

{/* Positioning values (use with absolute/fixed) */}
<div className="absolute top-0 right-0">       {/* top-right corner */}
<div className="absolute inset-0">             {/* covers entire parent */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> {/* centered */}

{/* Z-index */}
<div className="z-0">
<div className="z-10">
<div className="z-20">
<div className="z-50">
```

---

## 15. Overflow

```jsx
<div className="overflow-hidden">   {/* clip overflowing content */}
<div className="overflow-scroll">   {/* always show scrollbar */}
<div className="overflow-auto">     {/* show scrollbar only when needed */}
<div className="overflow-x-auto">   {/* horizontal scroll */}
<div className="overflow-y-auto">   {/* vertical scroll */}
```

---

## 16. Pseudo-states

```jsx
{/* Hover */}
<button className="bg-blue-500 hover:bg-blue-700 text-white">
  Hover me
</button>

{/* Focus */}
<input className="border focus:outline-none focus:ring-2 focus:ring-blue-500" />

{/* Active */}
<button className="bg-blue-500 active:bg-blue-900">Click</button>

{/* Disabled */}
<button className="bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled>
  Disabled
</button>

{/* Group hover — parent triggers child style */}
<div className="group flex items-center gap-2">
  <span>Label</span>
  <span className="opacity-0 group-hover:opacity-100">→</span>
</div>

{/* Peer — sibling triggers sibling style */}
<input className="peer border" type="checkbox" />
<label className="text-gray-400 peer-checked:text-green-600">
  Check me
</label>
```

---

## 17. Transitions

```jsx
{/* Basic transition */}
<button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200">
  Color transition
</button>

{/* Transition all properties */}
<div className="hover:scale-105 transition-all duration-300 ease-in-out">
  Scale on hover
</div>

{/* Duration */}
{/* duration-75  duration-100  duration-150  duration-200  duration-300  duration-500  duration-700  duration-1000 */}

{/* Easing */}
{/* ease-linear  ease-in  ease-out  ease-in-out */}

{/* What to transition */}
{/* transition-none  transition-all  transition-colors  transition-opacity
    transition-shadow  transition-transform */}
```

---

## 18. Transforms

```jsx
{/* Scale */}
<div className="hover:scale-105">  {/* 105% */}
<div className="hover:scale-110">  {/* 110% */}
<div className="hover:scale-95">   {/* shrink to 95% */}

{/* Translate */}
<div className="hover:translate-x-1">  {/* slide right 4px */}
<div className="hover:-translate-y-1"> {/* slide up 4px */}
<div className="hover:translate-y-2">  {/* slide down 8px */}

{/* Rotate */}
<div className="hover:rotate-3">   {/* 3 degrees */}
<div className="hover:rotate-45">  {/* 45 degrees */}
<div className="hover:-rotate-6">  {/* -6 degrees */}

{/* Always pair transforms with transition for smooth animation */}
<div className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
  Card lift effect
</div>
```

---

## 19. Animations (Built-in)

```jsx
{/* Spin — loading spinners */}
<svg className="animate-spin h-5 w-5 text-white" .../>

{/* Ping — notification dot pulse */}
<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400" />

{/* Pulse — skeleton loading placeholders */}
<div className="animate-pulse bg-gray-200 rounded h-4 w-full" />

{/* Bounce — scroll indicator */}
<div className="animate-bounce">↓</div>
```

### Skeleton loader pattern (animate-pulse)
```jsx
<div className="animate-pulse space-y-4 p-4">
  <div className="h-4 bg-gray-200 rounded w-3/4" />
  <div className="h-4 bg-gray-200 rounded w-1/2" />
  <div className="h-4 bg-gray-200 rounded w-5/6" />
</div>
```

### Spinner pattern
```jsx
<div className="flex items-center justify-center">
  <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-blue-600" />
</div>
```

---

## 20. Opacity & Cursor

```jsx
{/* Opacity */}
<div className="opacity-0">    {/* invisible but in DOM */}
<div className="opacity-25">
<div className="opacity-50">
<div className="opacity-75">
<div className="opacity-100">  {/* fully visible */}

{/* Cursor */}
<div className="cursor-pointer">   {/* hand icon */}
<div className="cursor-not-allowed">
<div className="cursor-default">
<div className="cursor-wait">
<div className="cursor-grab">
```

---

## 21. Common Component Patterns

### Card
```jsx
<div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
  <h2 className="text-xl font-semibold text-gray-900 mb-2">Title</h2>
  <p className="text-gray-600 text-sm leading-relaxed">Description text here.</p>
</div>
```

### Button variants
```jsx
{/* Primary */}
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200">
  Submit
</button>

{/* Outlined */}
<button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition-colors duration-200">
  Cancel
</button>

{/* Danger */}
<button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200">
  Delete
</button>

{/* Ghost */}
<button className="text-gray-600 hover:bg-gray-100 font-medium px-4 py-2 rounded-lg transition-colors duration-200">
  More
</button>
```

### Input
```jsx
<input
  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  placeholder="Enter value"
/>
```

### Badge / Tag
```jsx
<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
  New
</span>
<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
  Active
</span>
<span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
  Error
</span>
```

### Alert / Callout
```jsx
{/* Info */}
<div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 text-sm">
  ℹ️ This is an info message.
</div>

{/* Warning */}
<div className="bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-lg p-4 text-sm">
  ⚠️ This is a warning.
</div>

{/* Error */}
<div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
  ✕ Something went wrong.
</div>

{/* Success */}
<div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-sm">
  ✓ Changes saved successfully.
</div>
```

### Navbar
```jsx
<nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
  <span className="font-bold text-xl">Logo</span>
  <div className="flex items-center gap-6 text-sm text-gray-600">
    <a className="hover:text-gray-900 cursor-pointer">Home</a>
    <a className="hover:text-gray-900 cursor-pointer">About</a>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Login
    </button>
  </div>
</nav>
```

### Centered page wrapper
```jsx
<main className="min-h-screen bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 py-8">
    {/* content */}
  </div>
</main>
```

### Vertical card list
```jsx
<div className="space-y-4">
  {items.map(item => (
    <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
      {item.title}
    </div>
  ))}
</div>
```

### Hover lift card
```jsx
<div className="bg-white rounded-xl shadow p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
  Hover to lift
</div>
```

### Modal overlay
```jsx
{/* Backdrop */}
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  {/* Modal box */}
  <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
    <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
    <p className="text-gray-600 mb-6">Modal content goes here.</p>
    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
      <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Confirm</button>
    </div>
  </div>
</div>
```

---

## 22. Dark Mode

```jsx
{/* Tailwind's dark: prefix works when parent has class="dark" */}
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <p className="text-gray-600 dark:text-gray-400">Subtext</p>
</div>
```

To enable: add `class="dark"` to `<html>` tag.

---

## 23. Tailwind in React — Quick Tips

```jsx
// Use clsx or cn() for conditional classes
import clsx from 'clsx';

<div className={clsx(
  'rounded-lg px-4 py-2 font-medium',
  isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
)}>
  Tab
</div>

// Template literals also work but can get messy
<div className={`rounded-lg ${isError ? 'border-red-500' : 'border-gray-300'}`}>
```

---

## ⚡ Quick Reference Card

| What you want         | Class(es)                                    |
|-----------------------|----------------------------------------------|
| Full width            | `w-full`                                     |
| Half width            | `w-1/2`                                      |
| Center horizontally   | `mx-auto` + `max-w-*`                        |
| Vertically center     | `flex items-center`                          |
| Dead center (flex)    | `flex items-center justify-center`           |
| Space between         | `flex justify-between`                       |
| Even grid             | `grid grid-cols-3 gap-4`                     |
| Responsive grid       | `grid grid-cols-1 md:grid-cols-3`            |
| Full viewport height  | `min-h-screen`                               |
| Hide element          | `hidden`                                     |
| Show on desktop only  | `hidden lg:block`                            |
| Hover color change    | `hover:bg-blue-700 transition-colors`        |
| Smooth scale on hover | `hover:scale-105 transition-transform`       |
| Loading spinner       | `animate-spin`                               |
| Skeleton placeholder  | `animate-pulse bg-gray-200`                  |
| Card shadow           | `shadow-md rounded-xl bg-white`              |
| Absolute center       | `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` |
| Truncate text         | `truncate`                                   |
| 2-line clamp          | `line-clamp-2`                               |
| Overlay backdrop      | `fixed inset-0 bg-black/50`                  |

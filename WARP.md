# Tailwind CSS v4 Theme Configuration Rules

## Reference
See `docs/tailwind-v4-theme-reference.css` for the canonical example structure.

## Theme Structure

### 1. Color Palettes in `@theme` Block
Define base color palettes (brand, accent, accent-pastel, surface) as direct OKLCH values:

```css
@theme {
  --color-brand-500: oklch(0.58 0.2 280);
  --color-accent-400: oklch(0.75 0.28 27);
  --color-accent-pastel-500: oklch(0.72 0.44 21);
  /* etc... */
}
```

### 2. Semantic Tokens in `:root` (Light Mode)
Define semantic color tokens that reference palette colors or direct OKLCH values:

```css
:root {
  --background: oklch(0.9940 0 0);
  --foreground: oklch(0 0 0);
  --primary: var(--color-brand-600);
  --accent: var(--color-accent-400);
  --destructive: var(--color-accent-500);
  --border: var(--color-surface-300);
  /* etc... */
}
```

### 3. Dark Mode Overrides with `.dark` Class
Override semantic tokens for dark mode using a `.dark` class selector (not media query):

```css
.dark {
  --background: oklch(0.2223 0.0060 271.1393);
  --foreground: oklch(0.9551 0 0);
  --primary: var(--color-brand-500);
  --accent: var(--color-accent-pastel-500);
  --destructive: var(--color-accent-pastel-600);
  --border: var(--color-surface-700);
  /* etc... */
}
```

### 4. Tailwind Utility Mappings in `@theme inline`
Map semantic tokens to Tailwind's `--color-*` namespace so utilities like `bg-accent` work:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  /* etc... */
}
```

## Key Rules

### @theme Block
- **CAN contain**: CSS custom properties, `@keyframes`
- **CANNOT contain**: `@media` queries, nested selectors
- Define base color palettes and other design tokens here

### :root Block
- Define light mode semantic color tokens
- Can reference colors from `@theme` block or use direct values
- Use simple property names like `--accent`, `--background`, etc.

### .dark Class
- Override semantic tokens for dark mode
- Use `.dark` class selector (not `@media (prefers-color-scheme: dark)`)
- Only override values that change in dark mode

### @theme inline Block
- Maps semantic tokens to Tailwind's utility class system
- Always use `var()` references to semantic tokens
- Enables utilities like `bg-accent`, `text-foreground`, `border-border`

## Component Guidelines

### DO:
- Use semantic color utilities: `bg-accent`, `text-destructive-foreground`, `border-border`
- Reference semantic tokens in custom CSS: `color: var(--accent)`
- Keep components theme-agnostic

### DON'T:
- Add `dark:` variants for colors already handled by CSS variables
- Hardcode color values like `text-white` when semantic tokens exist
- Mix direct palette references (e.g., `--color-brand-500`) in component styles

### Good Example:
```tsx
<button className="bg-accent text-accent-foreground hover:bg-accent/80">
  Click me
</button>
```

### Bad Example:
```tsx
<button className="bg-accent text-white dark:bg-accent-pastel-500">
  Click me
</button>
```

## Variable Naming Conventions

### Palette Colors (in @theme):
- Format: `--color-{palette}-{shade}`
- Example: `--color-brand-500`, `--color-accent-pastel-600`

### Semantic Tokens (in :root and .dark):
- Simple names: `--accent`, `--background`, `--foreground`, `--border`
- With suffix: `--accent-foreground`, `--primary-foreground`

### Tailwind Mappings (in @theme inline):
- Format: `--color-{semantic-name}`
- Example: `--color-accent`, `--color-border`, `--color-destructive-foreground`

## Color Space
Always use OKLCH color space for better perceptual uniformity and dark mode support:
```css
oklch(lightness chroma hue)
oklch(0.72 0.44 21)  /* 72% lightness, 0.44 chroma, 21° hue */
```

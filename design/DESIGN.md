---
name: Precision Pine & Tech Ivory
colors:
  surface: '#ebfef7'
  surface-dim: '#ccded7'
  surface-bright: '#ebfef7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e5f8f1'
  surface-container: '#dff2eb'
  surface-container-high: '#daece5'
  surface-container-highest: '#d4e7e0'
  on-surface: '#0e1e1b'
  on-surface-variant: '#414846'
  inverse-surface: '#23342f'
  inverse-on-surface: '#e2f5ee'
  outline: '#717976'
  outline-variant: '#c1c8c5'
  surface-tint: '#45655c'
  primary: '#03251f'
  on-primary: '#ffffff'
  primary-container: '#1b3b34'
  on-primary-container: '#84a59c'
  inverse-primary: '#abcec4'
  secondary: '#40655d'
  on-secondary: '#ffffff'
  secondary-container: '#bfe8dd'
  on-secondary-container: '#446a61'
  tertiary: '#00251f'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d34'
  on-tertiary-container: '#6aaa9b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7eae0'
  primary-fixed-dim: '#abcec4'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#2d4d45'
  secondary-fixed: '#c2ebe0'
  secondary-fixed-dim: '#a6cfc4'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#284d45'
  tertiary-fixed: '#adf0df'
  tertiary-fixed-dim: '#92d3c4'
  on-tertiary-fixed: '#00201b'
  on-tertiary-fixed-variant: '#005045'
  background: '#ebfef7'
  on-background: '#0e1e1b'
  surface-variant: '#d4e7e0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  badge-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  space-3xs: 0.125rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-desktop: 1.5rem
  margin-desktop: 3rem
  gutter-mobile: 1rem
  margin-mobile: 1.25rem
---

## Brand & Style

This design system targets researchers, academic innovators, engineering leads, and technical founders. The visual style balances institutional academic rigor with modern high-performance developer tooling—reminiscent of bespoke scientific publishing platforms crossed with high-fidelity IDEs.

The core aesthetic combines **Corporate / Modern Precision** with understated **Tactile Nuance**:
- **Atmosphere:** Cool, disciplined, and hyper-focused. Low visual noise with intentional focus zones.
- **Rhythm:** Dense, data-rich layouts relieved by generous atmospheric padding in reading spaces.
- **Character:** Authoritative forest tones anchored by soft sage-grey surfaces, preventing clinical sterility while maintaining mathematical clarity.

## Colors

The palette leverages high-contrast deep forest charcoals against atmospheric mineral sage tints:

- **Primary (`#1B3B34`):** Forest Slate. Used for primary headers, authoritative actions, key iconography, and anchor components.
- **Secondary (`#224840`):** Deep Pine. Used for button containers, interactive hover fills, and dark-mode surface grouping.
- **Tertiary / Active Mint (`#5B9B8D`):** Direct feedback states, active tabs, inline indicators, and code highlights.
- **Soft Mints (`#D3E4DE`, `#A8C9BF`):** Badge backgrounds, pill fills, subtle focus halos, and secondary border strokes.
- **Urgency / Alert (`#E06D53`):** Warm Terracotta / Coral. Reserved exclusively for mission-critical alerts, SOS signals, merge conflict warnings, and irreversible destructive actions.
- **Canvas (`#F4F7F6`):** Studio Soft Sage-Grey. Eliminates pure-white eye strain across intensive analytical workflows. Cards and panels use `#FFFFFF` to pop forward cleanly.

## Typography

Typography establishes an unyielding sense of authority and structure:

- **Plus Jakarta Sans** guides human conversation, navigation, card titling, and long-form research text. Tight tracking on headings creates cohesive, magazine-like authority.
- **JetBrains Mono** surfaces all technical taxonomy, including metadata tags, verification labels, metrics, timestamps, UUIDs, and inline code blocks.
- Numeric representations in tables, dashboards, and profile stats must always set `font-variant-numeric: tabular-nums` to maintain vertical decimal alignment across dynamic data sets.

## Layout & Spacing

The layout is built on an **8pt modular baseline grid** with an optional 4pt subgrid for compact data density.

- **Grid Architecture:** Desktop views operate on a 12-column grid with a maximum content container of `1280px`. Breakpoints are:
  - **Desktop:** `1024px+` (12 columns, 24px gutters, 48px margins)
  - **Tablet:** `768px - 1023px` (8 columns, 16px gutters, 24px margins)
  - **Mobile:** `< 768px` (4 columns, 16px gutters, 20px margins)
- **Reflow Rules:** Left-hand contextual rails (filters, taxonomy selectors) collapse into a bottom-drawer modal on mobile. Research/engineering split panes (paper view + code/data view) default to side-by-side on desktop, stacking into sequential tabs on screens under 1024px.

## Elevation & Depth

Visual hierarchy uses **low-contrast outlines combined with ambient mineral shadows**, avoiding generic grey dropshadows:

- **Level 0 (Base Canvas):** `#F4F7F6` backdrop with no shadow.
- **Level 1 (Card & Content Blocks):** `#FFFFFF` fill bounded by a crisp 1px stroke of `rgba(27, 59, 52, 0.08)`. Shadow: `0 1px 3px rgba(18, 34, 30, 0.04), 0 4px 12px rgba(18, 34, 30, 0.03)`.
- **Level 2 (Hovered Cards, Dropdowns, Flyouts):** Stroke tint increases to `rgba(27, 59, 52, 0.16)`. Shadow: `0 8px 24px -4px rgba(18, 34, 30, 0.08), 0 2px 6px -1px rgba(18, 34, 30, 0.04)`.
- **Level 3 (Modals, Technical Drawers):** Shadow: `0 20px 48px -8px rgba(18, 34, 30, 0.16)`. Accompanied by a background scrim with `backdrop-filter: blur(4px)` and background `rgba(18, 34, 30, 0.4)`.

## Shapes

The design system employs a **dual-geometry rule** to visually distinguish actionable tags from structural containers:

- **Interactive Pills & Badges:** Use complete pill radiuses (`9999px` / `25px`) for buttons, filter chips, status badges, and user metric tags. This provides tactile affordance and humanizes the technical environment.
- **Structural Containers:** Content cards, code IDE blocks, analytical modules, and modal containers use `rounded-xl` (12px to 16px). This preserves data density and prevents wasted corner space in technical layouts.

## Components

### Buttons
- **Primary Pill:** Full pill radius (`border-radius: 9999px`), `#224840` background, `#FFFFFF` text, font weight 600. Hover transitions to `#1B3B34` with an inner border highlight `inset 0 0 0 1px rgba(211, 228, 222, 0.25)`.
- **Secondary / Ghost Pill:** Full pill radius, transparent background, 1px border of `#A8C9BF`, text color `#1B3B34`. Hover fills with `rgba(211, 228, 222, 0.35)`.
- **Urgent / SOS Action:** Full pill radius, `#E06D53` background with crisp white text. Active state darkens to `#C8573E`.

### Badges & Verification Tags
- **Skill Tags:** Pill-shaped, JetBrains Mono font (`11px`), padded `4px 12px`. Background `#D3E4DE` at 50% opacity, border `1px solid #A8C9BF`, text `#1B3B34`.
- **LinkedIn Verified:** Pill shape, background `#E8F0FE`, border `1px solid #A8C7FA`, icon in `#0A66C2`, text `#0A66C2`, label in uppercase tracked mono.
- **CV Verified:** Pill shape, background `rgba(91, 155, 141, 0.12)`, border `1px solid #5B9B8D`, icon checkmark in `#1B3B34`, text `#1B3B34`.

### Input Fields & Controls
- **Inputs:** 10px rounded corners, `#FFFFFF` background, 1px stroke of `rgba(27, 59, 52, 0.2)`. On focus: stroke shifts to `#5B9B8D` with a subtle 3px outer glow in `rgba(91, 155, 141, 0.2)`. Monospace placeholder support for query-based search fields.
- **Checkboxes & Radios:** Forest slate borders (`#1B3B34`), filling with `#224840` upon selection and displaying an ivory/white checkmark.

### Cards & Code Blocks
- **Research / Profile Cards:** Level 1 elevation, `#FFFFFF` background, subtle `#1B3B34` tinted border. Headers display author identity paired with pill verification tags aligned to the top-right.
- **Code Panes & Terminal Previews:** Solid `#12221E` background with `#F4F7F6` monospace text. Status headers feature custom window controls in `#224840` and active file path indicators styled with `#5B9B8D`.
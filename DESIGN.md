---
version: "alpha"
name: "GitHub @ CSI Primer"
description: "A focused, content-first GitHub resource hub built with Primer."
colors:
  primary: "#0969DA"
  on-primary: "#FFFFFF"
  accent-muted: "#DDF4FF"
  canvas: "#FFFFFF"
  canvas-muted: "#F6F8FA"
  foreground: "#1F2328"
  foreground-muted: "#59636E"
  border: "#D1D9E0"
  success: "#1A7F37"
  attention: "#9A6700"
  danger: "#D1242F"
  done: "#8250DF"
typography:
  page-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.02em
  section-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.4285
  metadata:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.6666
rounded:
  small: 3px
  medium: 6px
  large: 12px
  full: 9999px
spacing:
  xsmall: 4px
  small: 8px
  medium: 16px
  large: 24px
  xlarge: 32px
  section: 64px
components:
  primary-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.medium}"
    padding: 8px 12px
  navigation-active:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.medium}"
    padding: 8px 12px
  callout:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.medium}"
    padding: 16px
  content-surface:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.large}"
    padding: 16px
  metadata:
    textColor: "{colors.foreground-muted}"
    typography: "{typography.metadata}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  status-success:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.success}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: 4px 8px
  status-attention:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.attention}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: 4px 8px
  status-danger:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.danger}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: 4px 8px
  status-done:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.done}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: 4px 8px
---

## Overview

GitHub @ CSI is a focused documentation and resource experience, not a
marketing microsite. It should feel immediately familiar to people who use
GitHub: restrained, information-dense, readable, and predictable.

Primer is the design authority. Use
[Primer React](https://primer.style/product/getting-started/react/) for
supported interactive components,
[Primer Primitives](https://github.com/primer/primitives) for semantic design
tokens, and [Octicons](https://primer.style/octicons/) for interface
iconography. Project CSS exists only to compose the README-driven page shell
and content patterns that Primer does not provide.

The YAML values above are light-mode references for tools that consume the
DESIGN.md format. Runtime code must use Primer's functional CSS variables so
the same roles adapt correctly across light and dark themes.

## Colors

Use functional color roles such as `--bgColor-default`,
`--bgColor-muted`, `--fgColor-default`, `--fgColor-muted`,
`--fgColor-accent`, `--borderColor-default`, and
`--focus-outlineColor`. Never use Primer base color scales directly.

- Default and muted neutrals carry almost all surfaces and text.
- Accent blue is reserved for links, focus, selected navigation, and primary
  informational actions. It is not decorative.
- Success, attention, danger, and done colors communicate state. Pair color
  with text or an Octicon; never communicate status with color alone.
- Emphasis backgrounds must use the matching `--fgColor-onEmphasis` text role.
- All patterns must work in both the `light` and `dark` Primer themes.
- The dark GitHub mark circle is the only fixed brand-color exception.

Follow Primer's
[color usage guidance](https://primer.style/product/getting-started/foundations/color-usage/)
when a new semantic role is needed.

## Typography

Use Primer's system font stacks and functional typography variables. Markdown
body copy uses the large body style; controls use medium body; metadata and
helper text use small body sparingly.

- Keep paragraphs left aligned and ragged right.
- Keep prose around 80 characters per line. Do not let the main reading column
  expand simply because the viewport is wide.
- Use weight and spacing for hierarchy before color.
- Page titles use Primer title-large on regular/wide viewports and
  title-medium on narrow viewports.
- Section titles use Primer title-medium. UI labels use semibold medium or
  small body styles.
- Centering is limited to the Microsoft/GitHub logo lockup. Resource prose,
  page headings, tables, and navigation remain left aligned.

Follow Primer's
[typography guidance](https://primer.style/product/getting-started/foundations/typography/).

## Layout

Use a calm full-page layout capped at Primer's 1280px xlarge breakpoint.
Content padding is 16px below xlarge and 24px at xlarge and above.

- Regular and wide viewports use three regions: local navigation, the main
  reading column, and an auxiliary on-page table of contents.
- When all three regions do not fit, remove the auxiliary TOC first.
- Narrow viewports use one content column. Primary page navigation becomes a
  horizontally scrollable local-navigation row and the TOC becomes a
  disclosure above the article.
- The reading column, not side regions, receives remaining width.
- Use Primer breakpoints: 768px for narrow/regular behavior, 1012px for
  multi-column adjustments, 1280px for xlarge content padding, and 1400px only
  when a wide-only refinement is necessary.
- Preserve functionality at every viewport. Do not hide the only path to an
  action or resource.

Follow Primer's
[layout guidance](https://primer.style/product/getting-started/foundations/layout/).

## Elevation & Depth

The interface is border-first and nearly flat.

- Use `--borderColor-default` or `--borderColor-muted` to separate regions.
- Use `--bgColor-muted` for subtle grouping.
- Use Primer resting shadows only for media or a genuinely raised surface.
- Do not add shadows to routine navigation, tables, callouts, or page sections.
- Avoid decorative gradients and glass effects. Hierarchy should remain clear
  without them.

## Shapes

- Use Primer's 6px medium radius for controls, active navigation, callouts, and
  compact containers.
- Use the 12px large radius only for prominent media or feature surfaces.
- Use the full radius only for pills, labels, status badges, the active
  navigation indicator, and the circular GitHub brand mark.
- Use 1px borders by default. Thicker borders are reserved for focus or a
  meaningful callout edge.
- Do not invent a new radius for an isolated component.

## Components

- Prefer a Primer React component whenever it matches the interaction.
  Preserve its documented variants, sizing, focus behavior, and semantics.
- Use Octicons through `@primer/octicons-react`. Do not draw custom interface
  SVGs or use emoji as control icons.
- Navigation has clear current-page state via `aria-current`, accent text, a
  muted accent background, and an additional non-color indicator.
- Buttons and links retain Primer hover, active, focus-visible, disabled, and
  loading states. External links include an external-link Octicon.
- Tables remain semantic tables, use borders rather than card shadows, and
  scroll horizontally when they cannot fit a narrow viewport.
- Markdown callouts use a muted semantic background, matching border, and a
  strong leading edge. They are not interchangeable decorative cards.
- Images retain their natural aspect ratio, never upscale beyond the content
  region, and use a large radius only when presented as feature media.
- Motion is functional and brief. Honor `prefers-reduced-motion`.

Use Primer's
[component catalog](https://primer.style/product/components/) and
[accessibility guidance](https://primer.style/accessibility/) before creating
custom interaction patterns.

## Do's and Don'ts

**Do**

- Read this file before changing UI, CSS, layout, responsive behavior, or
  visual components.
- Reuse semantic Primer variables and existing project patterns.
- Review every UI change in light and dark modes at narrow, regular, and wide
  widths.
- Preserve visible focus, keyboard navigation, semantic headings, descriptive
  links, and reduced-motion support.
- Keep README content readable on GitHub as well as on GitHub Pages.

**Don't**

- Introduce another component library, icon set, utility-CSS framework, or
  parallel token system.
- Hard-code light-mode colors where a Primer functional token exists.
- Use base color scales directly or depend on color alone for meaning.
- Put every section in a card, add decorative gradients, or use shadows as the
  primary hierarchy mechanism.
- center body copy, exceed the readable line length, stretch images, or remove
  functionality at narrow widths.
- Override Primer component internals when a documented prop or variant can
  express the intended result.

This file follows the
[DESIGN.md format](https://github.com/google-labs-code/design.md): tokens are
machine-readable constraints and the prose explains how those roles apply to
this repository.

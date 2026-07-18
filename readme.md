# Tevio Design System

A design system built from a single source: the Tevio wordmark logo (`uploads/Screenshot 2026-07-18 at 3.57.55 PM.png`, copied into `assets/`). No codebase, Figma file, or brand guide was accessible — the linked GitHub repo (`tevioventure-cell/TEVIO.IN`) returned empty (no commits on `main` or `master`) when explored via the GitHub tools. Everything below — palette, type, components, and the sample product UI — is inferred from the logo and built as a plausible, cohesive starting point, not copied from an existing product.

**Sources**
- GitHub: https://github.com/tevioventure-cell/TEVIO.IN — repo exists but is empty; re-attach once it has content so future passes can ground the system in real code.
- Logo image: user-provided screenshot, the sole visual reference.

If the repo above (or a Figma file) becomes available, re-run this process — real screens, copy, and components should replace the inferred ones here.

## What "Tevio" seems to be
The wordmark's built-in checkmark (replacing the "v") strongly signals a **verification / trust product** — identity checks, document review, approvals. The sample UI kit (`ui_kits/verify-app`) runs with that assumption: a requests-review dashboard. Treat the product framing as a hypothesis, not fact, until real source material confirms it.

## Content fundamentals
No product copy was available to observe, so these are working conventions applied consistently across the sample UI kit and specimens — revisit once real copy exists.
- **Voice**: direct, calm, second-person ("Sign in to verify and manage requests"). No exclamation points, no hype.
- **Casing**: sentence case everywhere (buttons, nav labels, headings) — never title case, never all-caps except tiny uppercase micro-labels (e.g. table column headers) with wide letter-spacing.
- **Terminology**: "verify / verified" is the core brand verb, not "confirm" or "approve" — it's the word the logo itself performs.
- **Emoji**: none. The brand's only expressive glyph is the checkmark already baked into the wordmark.
- **Numbers/status**: short, scannable pills (Verified / Pending / Rejected) rather than long sentences.

## Visual foundations
- **Color**: one ink — navy `#0E2947` — carries almost everything (text, primary buttons, sidebar, active states). A cool slate-gray scale (from the logo's ring, `#ABB4BF`) handles neutrals/borders. A single accent, a muted teal-green ("verified"), is reserved strictly for success/verification states — it does not appear in the source logo but is the natural semantic partner to a checkmark brand and is deliberately never used decoratively.
- **Type**: two families. **Fredoka** (rounded geometric, matches the wordmark's soft terminals) for display/headline moments; **Inter** for all UI/body text — a plain, high-legibility workhorse so the rounded display face doesn't fight itself in small sizes. **JetBrains Mono** for IDs/timestamps.
- **Backgrounds**: flat and calm — white cards on a very light slate-sunken page background. No gradients, no textures, no photography or illustration in the source, so none invented.
- **Shape language**: rounded corners everywhere (`--radius-md` 12px default), echoing the logo's rounded strokes and dot; pills for status/tags/switches; circles for avatars and the checkmark's dot/ring motif.
- **Elevation**: soft, navy-tinted shadows (`--shadow-sm/md/lg`), never harsh black shadows. Cards get a 1px subtle border *and* a soft shadow, not one or the other.
- **Motion**: fast, understated — 120–200ms ease-standard/ease-out transitions on hover/press; no bounce, no spring, matching the brand's calm/trustworthy tone.
- **Hover/press**: hover = subtle background tint or border darken; press = slight scale-down (0.97) on buttons. No opacity-fade hovers.
- **Borders**: 1px, slate-200/300, used generously to separate cards and table rows rather than shadows alone.
- **Transparency/blur**: only on modal scrims (dark navy at 45% + light blur) — never used decoratively elsewhere.
- **Corner radii**: sm 8 / md 12 / lg 16 / xl 22 / pill / circle — see `guidelines/radius-scale.html`.
- **Cards**: white fill, 16px radius, 1px slate-200 border, soft shadow, generous 24px padding.

## Iconography
No icon system, sprite, or icon font was available in any source. **Lucide** (MIT-licensed, open stroke-icon set) is substituted — flagged here — chosen for its rounded stroke caps, which echo the logo's rounded checkmark strokes. Icons are referenced directly from the `lucide-static` CDN (`https://unpkg.com/lucide-static@.../icons/<name>.svg`), never hand-drawn. No emoji or unicode glyphs are used as icons.

## Fonts: substitution flagged
**No font files were provided.** The logotype's rounded geometric letterforms were matched by eye to **Fredoka** (display) on Google Fonts, paired with **Inter** (body) and **JetBrains Mono** (mono) for UI/code text — all loaded via the Google Fonts CDN in `tokens/fonts.css`. **If Tevio has real brand font files, please attach them** so `tokens/fonts.css` can be rewritten with proper `@font-face`/self-hosted files.

## Components
Standard primitive set (no component inventory was available in source, so this is the default 14-primitive baseline):
- **Core**: Button, IconButton, Card, Badge, Tag
- **Forms**: Input, Select, Checkbox, Radio, Switch
- **Navigation**: Tabs
- **Feedback**: Dialog, Toast, Tooltip

### Intentional additions
Every component above is a standard baseline addition (no source defined an inventory to follow) — none are brand-specific inventions beyond that baseline.

## Index
- `styles.css` — root stylesheet, imports everything in `tokens/`
- `tokens/` — colors, typography, spacing, radius, shadows, fonts
- `assets/` — `logo-wordmark-transparent.png` (transparent bg), `logo-wordmark-transparent.png` full/dark variants used across cards
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/`, `components/forms/`, `components/navigation/`, `components/feedback/` — the 14 primitives, each with `.jsx` + `.d.ts` + `.prompt.md` + a `.card.html` demo
- `ui_kits/verify-app/` — sample "Tevio Verify" product: login, dashboard, requests list, request detail, settings — composed from the primitives above
- `SKILL.md` — Claude Code-compatible skill wrapper for this design system
- `thumbnail.html` — project tile shown on the homepage

## Caveats & ask
This entire system is inferred from one logo screenshot — there is no verified product, copy, or component inventory behind it. **Please**:
1. Re-attach the `TEVIO.IN` GitHub repo once it has commits (it's currently empty), or share a Figma file / screenshots of real product screens.
2. Confirm whether "Tevio" is actually a verification product, or tell us the real one, so `ui_kits/verify-app` can be replaced with the real surface.
3. Share real brand font files if Fredoka/Inter aren't the actual typefaces.
4. Flag any colors, icons, or components here that don't match the real brand — everything is a best-guess placeholder until then.

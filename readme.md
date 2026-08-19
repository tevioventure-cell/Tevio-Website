# Tevio Website

Static HTML site for [tevio.in](https://www.tevio.in), deployed via Vercel.

## Stack
- Plain HTML, CSS (no build step)
- Fonts: Manrope + Inter via Google Fonts
- Form submission: Google Apps Script (loi.html)
- AI agent demo: KriyaOS embed (agent-in-action-demo.html)
- Design system: `_ds/tevio-design-system-809dac14-1a24-47b2-b864-9c6145e90cb0/`

## Pages
| File | URL | Notes |
|------|-----|-------|
| index.html | / | Homepage |
| about.html | /about.html | About Tevio |
| features.html | /features.html | Solutions |
| contact.html | /contact.html | Contact |
| blog.html | /blog.html | Insights |
| agent-in-action-demo.html | /agent-in-action-demo.html | Live AI agent demo |
| loi.html | /loi.html | Business intake form → Google Sheets |
| privacy-policy.html | /privacy-policy.html | Privacy |
| help-center.html | /help-center.html | Help (not in nav or sitemap) |

## Design system
Token files: `_ds/.../tokens/`  
Components (JSX): `_ds/.../components/`  
Guidelines: `_ds/.../guidelines/`  
Barrel export: `_ds/.../index.js`

## Deploy
Push to `main` — Vercel auto-deploys.

# RCB Holdings — Next.js redesign

## Development
Run `npm install`, then `npm run dev`. Open http://localhost:4173.
The dev launcher uses polling to avoid macOS file-watcher limits.

## Production preview
Run `npm run build`, then `npm start`. Static website files are generated in `out/`.

## Included
Next.js App Router, Google Sans Flex, shadcn/ui, Lucide, Motion, Three.js / React Three Fiber. Shared header/footer and 8 pages. Interlock quantity calculator, before/after surface comparison, scroll-driven assembled/exploded machine with manual controls. Impeccable installed under `.agents/`.

## Content and assets
Paver dimensions and machine specs follow the supplied inventory. Confirm catalogue availability and specifications before commercial launch. Product photos are category imagery, not guaranteed exact model photos. The road roller, portfolio photography, paving comparison and JCB-style 3D machine are labelled placeholders. Replace the procedural model in `components/machine.jsx` with a licensed GLB when available.

The calculator divides rectangular site area by nominal rectangular paver footprint, then applies waste and rounds up. Joint spacing, shape geometry, edge cuts and site preparation are excluded. No prices are invented. Quote links preserve model/quantity in an email draft; they do not send automatically.

The older static prototype is preserved in `dist/`; Next.js uses `app/` and `public/`.

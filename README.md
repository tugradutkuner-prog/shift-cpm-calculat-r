# Shift CPM Calculator

A single-page tool for Shift's influencer campaign (Aug–Oct 2026). Open `public/index.html` in a browser; there is no build step.

It shows CPM (cost per 1,000 views), cost per 1,000 accounts reached, and cost per engagement for each creator.

## Data
- **Reels report / TikTok**: the two Teamfluencer reports (13 creators). The package cost ₺130,000 + KDV, split evenly at ₺10,000 per creator.
- **IG Reels**: play counts (Instagram + Facebook) and likes/comments as of 12 Oct 2026.
- **YouTube / extra TikTok**: public view counts as of 12 Oct 2026.

Fees typed into the table are saved in your browser only. To change the built-in data, edit the `DATA` array in `public/index.html`.

## Hosting
Deployed as a Cloudflare Worker (`shift-cpm-calculat-r`), connected to this repo: every push to `main` redeploys. The page lives in `public/index.html`. `src/index.js` puts the whole site behind a password: set the secret `ACCESS_KEY` in the Worker's Settings > Variables and Secrets. Until it is set, the site returns 503.

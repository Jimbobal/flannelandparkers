# Flannel and Parkers

Website for Flannel and Parkers, a five-piece 90s covers band. Static HTML/CSS/JS, no build step.

## Editing

- `index.html` – all page content (band copy, line-up, setlist, gigs, contact)
- `style.css` – styling
- `script.js` – mobile menu, smooth scroll, scroll reveal
- `images/` – band photo and logo

### Adding a video
In the Videos section of `index.html`, replace a `.video-placeholder` block with:

```html
<div class="video-embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Flannel and Parkers live" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
```

### Adding a gig
Copy the commented `.gig` block in the Gigs section and fill in the date, venue and details.

## Hosting
Designed for GitHub Pages: Settings → Pages → deploy from the `main` branch root.

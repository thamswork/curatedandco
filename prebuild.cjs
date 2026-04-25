const fs = require('fs');
const home = JSON.parse(fs.readFileSync('./public/home.json', 'utf8'));

const h = home.hero || {};
const c1 = home.cat1 || {};
const c2 = home.cat2 || {};
const c3 = home.cat3 || {};
const fav = home.favourite || {};
const vis = home.visit || {};

let astro = fs.readFileSync('./src/pages/index.astro', 'utf8');
const newFront = `---
const heroVideo = ${JSON.stringify(h.heroVideo || '')};
const heroImage = ${JSON.stringify(h.heroImage || '')};
const heroEyebrow = ${JSON.stringify(h.heroEyebrow || 'Bangkok · Thailand')};
const heroLine1 = ${JSON.stringify(h.heroLine1 || 'Curated')};
const heroLine2 = ${JSON.stringify(h.heroLine2 || '& Co.')};
const heroSub = ${JSON.stringify(h.heroSub || '')};
const heroCta = ${JSON.stringify(h.heroCta || 'Discover All')};
const heroCtaUrl = ${JSON.stringify(h.heroCtaUrl || 'https://curatedandcobkk.com')};
const cat1 = ${JSON.stringify(c1)};
const cat2 = ${JSON.stringify(c2)};
const cat3 = ${JSON.stringify(c3)};
const favEyebrow = ${JSON.stringify(fav.eyebrow || 'Our Favourite')};
const favH1 = ${JSON.stringify(fav.heading1 || 'Made to Last')};
const favH2 = ${JSON.stringify(fav.heading2 || 'a Lifetime')};
const favBody = ${JSON.stringify(fav.body || '')};
const visitAddress = ${JSON.stringify(vis.address || 'Emporium 1F, Bangkok.')};
const visitHours = ${JSON.stringify(vis.hours || 'Daily 10:00 – 21:00 · 098-356-8388')};
const logo = "https://res.cloudinary.com/dynjnftnu/image/upload/v1777111636/Untitled_design_w0ei4t.png";
const visitLine = ${JSON.stringify(vis.lineUrl || 'https://line.me/ti/p/curatedandcobkk')};
---`;
astro = astro.replace(/^---[\s\S]*?---/, newFront);
fs.writeFileSync('./src/pages/index.astro', astro);
console.log('prebuild: index.astro patched!');

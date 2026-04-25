const fs = require('fs');
const home = JSON.parse(fs.readFileSync('./public/home.json', 'utf8'));
let astro = fs.readFileSync('./src/pages/index.astro', 'utf8');
const newFront = `---
const heroImage = ${JSON.stringify(home.heroImage || '')};
const heroVideo = ${JSON.stringify(home.heroVideo || '')};
const brandStory = ${JSON.stringify(home.brandStory || '')};
const ctaText = ${JSON.stringify(home.ctaText || 'Discover All')};
const ctaUrl = ${JSON.stringify(home.ctaUrl || '')};
---`;
astro = astro.replace(/^---[\s\S]*?---/, newFront);
fs.writeFileSync('./src/pages/index.astro', astro);
console.log('prebuild: index.astro patched with home.json!');

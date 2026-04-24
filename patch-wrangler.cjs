const fs = require('fs');
const path = require('path');

// Patch dist/server/wrangler.json for Pages
const p = './dist/server/wrangler.json';
const cfg = JSON.parse(fs.readFileSync(p));
const clean = {
  name: cfg.name,
  pages_build_output_dir: '../client',
  compatibility_date: cfg.compatibility_date,
  compatibility_flags: cfg.compatibility_flags,
  kv_namespaces: (cfg.kv_namespaces || []).map(kv => ({
    binding: kv.binding,
    id: kv.id || 'placeholder'
  })),
  vars: cfg.vars || {}
};
fs.writeFileSync(p, JSON.stringify(clean, null, 2));
console.log('wrangler.json patched for Pages!');

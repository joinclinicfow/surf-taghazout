import { readFileSync } from 'fs';
const content = readFileSync('/vercel/share/v0-project/index.html', 'utf-8');
console.log(content);

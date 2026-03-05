import { readFileSync } from 'fs';
const content = readFileSync('/vercel/share/v0-project/index.html', 'utf-8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  console.log(`LINE_${i+1}: ${line}`);
});

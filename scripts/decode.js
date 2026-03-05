import { Buffer } from 'buffer';
const resp = await fetch('https://raw.githubusercontent.com/joinclinicfow/surf-taghazout/main/index.html');
const text = await resp.text();
// Convert each character to its code point to avoid any output issues
const codePoints = [];
for (const ch of text) {
  codePoints.push(ch.codePointAt(0));
}
// Output as JSON array of code points
console.log(JSON.stringify(codePoints));

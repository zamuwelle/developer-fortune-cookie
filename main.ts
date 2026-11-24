const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
const outputEncoding = 'utf8';
const entry = 'A bug you fear to fix is already in production; it has simply been assigned to someone else.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, outputEncoding);

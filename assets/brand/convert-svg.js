const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brandDir = './assets/brand';
const files = fs.readdirSync(brandDir).filter(f => f.endsWith('.svg'));

files.forEach(file => {
  const inputPath = path.join(brandDir, file);
  const outputPath = path.join(brandDir, file.replace('.svg', '.png'));
  
  sharp(inputPath).png({ density: 150 }).toFile(outputPath);
  console.log(`✓ Convertido: ${file} → ${path.basename(outputPath)}`);
});
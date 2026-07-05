import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const imgRoot = resolve(root, 'public/assets/img')

const referencedImages = [
  'mudasir.jpg',
  'Drinkup1.png',
  'Drinkup5.png',
  'Drinkup6.png',
  'DS3.png',
  'b6.jpg',
  'b5.png',
  'b1.png',
  'b4.jpg',
  'tt1.png',
  'tt2.png',
  'tt4.png',
  'portfolio/Syntaq/SyntaQ.png',
  'portfolio/Strategia/Strategia.png',
  'OrionSTEM0.png',
  'OrionSTEm1.png',
  'OrionSTEM2.png',
  'Alvarnet0.png',
  'Alvarnet1.png',
  'Alvarnet2.png',
  'testimonials/testimonials-1.jpg',
  'testimonials/testimonials-2.jpg',
  'testimonials/testimonials-3.jpg',
  'testimonials/testimonials-4.jpg',
  'testimonials/testimonials-5.jpg',
]

let converted = 0

for (const relative of referencedImages) {
  const input = join(imgRoot, relative)
  if (!existsSync(input)) continue

  const ext = extname(relative).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

  const output = input.replace(/\.(png|jpe?g)$/i, '.webp')
  if (existsSync(output)) {
    const srcStat = readFileSync(input).length
    const outStat = readFileSync(output).length
    if (outStat > 0 && outStat < srcStat) continue
  }

  try {
    await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output)

    converted += 1
    console.log(`WebP: ${relative} → ${relative.replace(/\.(png|jpe?g)$/i, '.webp')}`)
  } catch (error) {
    console.warn(`Skipped ${relative}:`, error instanceof Error ? error.message : error)
  }
}

console.log(`Optimized ${converted} images to WebP`)

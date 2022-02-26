import path from 'path';
import fs from 'fs/promises';

export async function getAllTerms() {
  const filePath = path.join(process.cwd(), 'data', 'db.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data.terms
}
import fs from 'node:fs';

export default function handler(req, res) {
  const data = fs.readFileSync('src/pages/api/toggle.json', { encoding: 'utf8', flag: 'r' });
  res.status(200).json(JSON.parse(data));
}

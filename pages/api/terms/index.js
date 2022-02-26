import fs from 'fs';
import path from 'path';

export function dataDirectory() {
  return path.join(process.cwd(), 'data', 'db.json');
}

export function getDatabaseData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that in a database or in a file
    const filePath = dataDirectory();
    const data = getDatabaseData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = dataDirectory();
    const data = getDatabaseData(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;

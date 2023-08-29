import { NextApiRequest, NextApiResponse } from 'next'

// accessed at http://localhost:3000/api/hello
// this url shows {"text":"Hello"}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}
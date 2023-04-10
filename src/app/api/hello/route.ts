import { NextApiRequest, NextApiResponse } from 'next';

export default async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}

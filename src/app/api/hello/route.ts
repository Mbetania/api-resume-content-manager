import { NextApiRequest, NextApiResponse } from 'next';
import { getHandler, postHandler } from '../../../../pages/api/jsons/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    res.status(405).end(); // method not allowed
  }
}

import { NextApiRequest, NextApiResponse } from "next";

export function getHandler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'GET request successful' });
}

export function postHandler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'POST request successful' });
    }

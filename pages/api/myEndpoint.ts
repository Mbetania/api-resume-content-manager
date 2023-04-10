import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Tu código para manejar las solicitudes GET aquí
        res.status(200).json({ message: 'Solicitud GET exitosa' });
    } else if (req.method === 'POST') {
        // Tu código para manejar las solicitudes POST aquí
        res.status(200).json({ message: 'Solicitud POST exitosa' });
    } else {
        // Si el método de la solicitud no es GET ni POST, responde con un error 405 (Método no permitido)
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Método ${req.method} no permitido` });
    }
}

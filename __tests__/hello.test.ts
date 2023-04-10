import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../src/app/api/hello/route';

describe('GET /api/hello', () => {
    it('should return 200 OK', async () => {
        const req = {} as NextApiRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as NextApiResponse;

        await handler(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Hello World' });
    });
});

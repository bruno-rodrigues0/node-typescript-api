import { Response, Request } from 'express';

export const getAll = (req: Request, res: Response) => {

    return res.send('Getted all cities!');
};
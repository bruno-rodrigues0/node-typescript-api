import { Response, Request } from 'express';

export const create = (req: Request, res: Response) => {

    return res.send('Created!');
};
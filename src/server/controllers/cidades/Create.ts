import { Response, Request } from 'express';

interface ICidade {
    nome: string,
    cep: number
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    const data = req.body;

    console.log(data);

    return res.send('Created!');
};
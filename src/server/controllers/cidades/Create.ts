import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import * as yup from 'yup';

let value = 0

interface ICidade {
  nome: string,
  estado: string
}

interface IFilter {
  filter?: string,
}

export const createValidator = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(2),
    })
  ),

  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().min(3),
    })
  )
}));

export const create = async (req: Request<unknown, unknown, ICidade>, res: Response) => {
  res.status(StatusCodes.CREATED).json(req.body);
};
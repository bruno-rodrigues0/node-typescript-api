import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
    nome: string,
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    let validatedData: ICidade | undefined = undefined;

    try {

        validatedData = await bodyValidation.validate(req.body);

    } catch (error){
        const yupError = error as yup.ValidationError;

        return res.status(StatusCodes.BAD_REQUEST).json({
            erros: {
                default: yupError.message,
            }
        })
    }

    res.status(StatusCodes.CREATED).json(validatedData);
};
import { Response, Request, response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { pool as mysql } from "../../database";

interface ICidade {
  nome: string;
  estado: string;
}

interface IFilter {
  filter?: string;
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
  ),
}));

export const create = async (
  req: Request<unknown, unknown, ICidade>,
  res: Response
) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      res.status(StatusCodes.FAILED_DEPENDENCY).send({
        error: error,
      });
    }

    conn.query(
      `INSERT INTO cidade (nome, estado) VALUES (?, ?)`,
      [req.body.nome, req.body.estado],
      (error, result, filed) => {
        conn.release();
        if (error) {
          res.status(StatusCodes.BAD_GATEWAY).send({
            error: error,
            response: null,
          });
        }
        res.status(StatusCodes.CREATED).send({
          status: "CREATED",
          body: result,
        });
      }
    );
  });
};

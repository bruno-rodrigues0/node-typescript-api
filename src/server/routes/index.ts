import { Router } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get('/api', (req, res) => res.status(200).send({ status: 'OK', }));

//Cidades routes 
router.post('/cidades', CidadesController.createValidator, CidadesController.create);
router.get('/cidades', CidadesController.getAll);

export { router };
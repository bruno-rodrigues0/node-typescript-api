import { Router } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get('/', (_, res) => {
    return res.status(200).send('Olá, DEV!');
})

router.post('/cidades', CidadesController.create);
router.get('/cidades', CidadesController.getAll);

export { router };
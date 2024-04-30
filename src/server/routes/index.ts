import { Router } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get('/api', (req, res) => {
    return res.status(200).send({
        status: 'OK',
    })
});

router.post('/cidades', CidadesController.create);
router.get('/cidades', CidadesController.getAll);

export { router };
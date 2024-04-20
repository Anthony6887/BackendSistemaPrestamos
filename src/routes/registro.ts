import { Router } from 'express';
import { deleteRegistro, getRegistro, getRegistros, postRegistro, updateRegistro } from '../controllers/registro';


const router = Router();

router.get('/', getRegistro);
router.get('/:id', getRegistros);
router.delete('/:id', deleteRegistro);
router.post('/', postRegistro);
router.put('/:id', updateRegistro);

export default router;
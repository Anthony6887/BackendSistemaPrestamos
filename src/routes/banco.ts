import { Router } from 'express';
import { deleteBanco, getBanco, getBancos, postBanco, updateBanco } from '../controllers/banco';


const router = Router();

router.get('/', getBanco);
router.get('/:id', getBancos);
router.delete('/:id', deleteBanco);
router.post('/', postBanco);
router.put('/:id', updateBanco);

export default router;
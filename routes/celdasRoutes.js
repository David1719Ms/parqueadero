import router from 'express'
import { getCelda, postCelda, putCelda } from '../controllers/celdasController.js';

const celdasRouter = router();

celdasRouter.get('/',getCelda)
celdasRouter.post('/',postCelda)
celdasRouter.put('/',putCelda)
// celdasRouter.delete('/',deleteCelda)



export default celdasRouter;
import {Router} from 'express';
import OrphanagesControler from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesControler.create);

 export default routes;
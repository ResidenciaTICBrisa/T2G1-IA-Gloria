import express from 'express';
import { MapPageController } from '../controllers/mapPage-controller';

const mapPageRouter = express.Router();

// Rotas relacionadas às respostas

mapPageRouter.post('/map-page', MapPageController.postOccurrence);

export default mapPageRouter;

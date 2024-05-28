import { Request, Response } from 'express';
import { StatePageService } from '../services/formStatePage-service';
import httpStatus from 'http-status';
import json from '../helper/json'


async function postViolenceState(req: Request, res: Response){
    // Implementar a lógica para obter todas as respostas
    const state = await StatePageService.createStateOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(state));
}

export const StatePageController = {
    postViolenceState
}
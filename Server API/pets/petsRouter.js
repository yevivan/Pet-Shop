import {getPets} from './petsController.js';
import {Router} from 'express';

export const petsRouter = Router();
petsRouter.get('', getPets);




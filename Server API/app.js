import express from 'express';
import cors from 'cors';
import {petsRouter} from '../Server API/pets/petsRouter.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', petsRouter)


export default app;



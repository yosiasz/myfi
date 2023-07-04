import express from 'express';
import controller from '../controllers/banks';

const banksRouter = express.Router();

banksRouter.get('/', controller.getAllBanks);

export {banksRouter};
import express from 'express';
import trimRequest from 'trim-request';
import { getdata } from '../controllers/device.controller.js';

const deviceRouter = new express.Router();

// Add routes
deviceRouter.post('/data/store', trimRequest.all, getdata);
// deviceRouter.post('/data/get', trimRequest.all, getdata);

// routerName.put('/', SessionController.store);
// routerName.delete('/', SessionController.store);

export default deviceRouter;

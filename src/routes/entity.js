import express from 'express';
import { insertEntity } from 'handlers';

const router = new express.Router();

router
  .route('/')
  .post(insertEntity);

export default router;
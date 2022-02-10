import { Router } from 'express';
import { getAllCart, getCart } from '../controllers/cart.controller';

const cartRoute = () => {
  const router = Router();

  router.get('/cart', getAllCart);

  router.get('/cart/:id', getCart);

  return router;
};

export { cartRoute };

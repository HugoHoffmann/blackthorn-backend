import { Request, Response } from 'express';
import * as cartService from '../services/cart.service';

const getAllCart = async (req: Request, res: Response) => {
  const carts = await cartService.findAll();

  return res.status(200).json({ data: carts });
};

const getCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const cart = await cartService.getOne(id);

    res.status(200).send(cart);
  } catch (error: any) {
    if (error instanceof Error) {
      const { description, status } = JSON.parse(error.message);

      return res.status(status).json(description);
    }
    return res.status(500).json(error.message);
  }
};

export { getAllCart, getCart };

import { isValidObjectId } from 'mongoose';
import { CartDocument, Cart } from '../models/cart.model';

const getOne = async (id: string): Promise<CartDocument> => {
  if (!isValidObjectId(id)) {
    throw new Error(
      JSON.stringify({
        status: 400,
        description: `Id "${id}" invalid.`,
      }),
    );
  }
  const cart = await Cart.findOne({ _id: id }).populate('items').exec();

  if (!cart) {
    throw new Error(
      JSON.stringify({
        status: 404,
        description: `Cart with id "${id}" not found.`,
      }),
    );
  }

  return cart;
};

const findAll = async () => {
  return Cart.find().populate('items').sort('-createdAt').exec();
};

export { getOne, findAll };

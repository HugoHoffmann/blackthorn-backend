import * as mongoose from 'mongoose';

type CartDocument = Document & {
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
  items: string[];
};

type CartInput = {
  subtotal: CartDocument['subtotal'];
  discounts: CartDocument['discounts'];
  taxes: CartDocument['taxes'];
  total: CartDocument['total'];
  items: CartDocument['items'];
};
const cartSchema = new mongoose.Schema(
  {
    subtotal: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    discounts: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    taxes: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    total: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    items: {
      type: mongoose.Schema.Types.Array,
      required: true,
    },
  },
  {
    collection: 'cart',
    timestamps: true,
  },
);

const Cart: mongoose.Model<CartDocument> = mongoose.model<CartDocument>('cart', cartSchema);

export { Cart, CartInput, CartDocument };

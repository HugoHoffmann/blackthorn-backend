import mongoose, { Schema, Model, Document } from 'mongoose';

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
const cartSchema = new Schema(
  {
    subtotal: {
      type: Schema.Types.Number,
      required: true,
    },
    discounts: {
      type: Schema.Types.Number,
      required: true,
    },
    taxes: {
      type: Schema.Types.Number,
      required: true,
    },
    total: {
      type: Schema.Types.Boolean,
      default: true,
    },
    items: {
      type: Schema.Types.Array,
      ref: 'Products',
      required: true,
      index: true,
    },
  },
  {
    collection: 'cart',
    timestamps: true,
  },
);

const Cart: Model<CartDocument> = mongoose.model<CartDocument>('Cart', cartSchema);

export { Cart, CartInput, CartDocument };

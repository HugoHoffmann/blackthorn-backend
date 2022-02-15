import mongoose, { Schema, Model, Document } from 'mongoose';

type ProductDocument = Document & {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductInput = {
  name: ProductDocument['name'];
  description: ProductDocument['description'];
  price: ProductDocument['price'];
  quantity: ProductDocument['quantity'];
};

const productSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
    },
    price: {
      type: Schema.Types.Number,
    },
    quantity: {
      type: Schema.Types.Number,
    },
  },
  {
    collection: 'products',
    timestamps: true,
  },
);

const Product: Model<ProductDocument> = mongoose.model<ProductDocument>('products', productSchema);

export { Product, ProductInput, ProductDocument };

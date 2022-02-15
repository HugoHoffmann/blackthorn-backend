import * as mongoose from 'mongoose';
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

const productSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: mongoose.Schema.Types.String,
    },
    price: {
      type: mongoose.Schema.Types.Number,
    },
    quantity: {
      type: mongoose.Schema.Types.Number,
    },
  },
  {
    collection: 'products',
    timestamps: true,
  },
);

const Product: mongoose.Model<ProductDocument> = mongoose.model<ProductDocument>('products', productSchema);

export { Product, ProductInput, ProductDocument };

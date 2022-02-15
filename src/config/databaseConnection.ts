import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI } = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options: mongoose.ConnectionOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  await mongoose.connect(MONGO_URI as string, options);
};

export { connectToDatabase };

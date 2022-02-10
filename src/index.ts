import express from 'express';
import dotenv from 'dotenv';

import { connectToDatabase } from './config/databaseConnection';
import { cartRoute } from './routes/cart.route';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '3000');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', cartRoute());

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});

import * as mongoose from 'mongoose';
import { createSeedData } from './seeds';

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungi';

export default () => {

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.info('Mongoose connection disconnected through app termination');
      process.exit(0);
    });
  });
  return mongoose
    .connect(
      DB_URI,
      { useNewUrlParser: true },
    )
    .then(() => {
      console.info(`Successfully connected to ${DB_URI}`);
      // If you need to, use this to create seed data.
      if (process.env.BUNGI_API_CREATE_SEEDS) {
        return createSeedData();
      }
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    })
}

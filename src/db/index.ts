import mongoose from 'mongoose'

const db = 'mongodb://localhost:27017/bungi'

export default () =>
  mongoose
    .connect(
      db,
      { useNewUrlParser: true },
    )
    .then(() => {
      return console.info(`Successfully connected to ${db}`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    })

import mongoose from 'mongoose'
import { Message, User, Chat } from './models'

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungi'

const createUserSeeds = () => {
  const seedUsers = [
    {
      email: 'demo.user@gmail.com',
      firstName: 'Demo',
      lastName: 'User',
    },
    {
      email: 'fake.person@gmail.com',
      firstName: 'Fake',
      lastName: 'Person',
    },
  ]
  return new Promise((res, rej) => {
    User.find().exec((err, docs) => {
      if (docs.length === 0) {
        User.create(
          seedUsers,
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(data);
          },
        );
      }
    });
  });
}

const createMessageSeeds = () => {
  const seedMessages = [
    {
      content: 'Fake message',
    },
    {
      content: 'Another fake message',
    },
  ]
  return new Promise((res, rej) => {
    Message.find().exec((err, docs) => {
      if (docs.length === 0) {
        Message.create(
          seedMessages,
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(data);
          },
        );
      }
    });
  });
}

const createChatSeeds = () => {
  const seedChats = [
    {
      users: [
        User.findOne({ email: 'demo.user@gmail.com' }),
        User.findOne({ email: 'fake.person@gmail.com' }),
      ],
    },
  ]
  return new Promise((res, rej) => {
    Chat.find().exec((err, docs) => {
      if (docs.length === 0) {
        Chat.create(
          seedChats,
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(data);
          },
        );
      }
    });
  });
}

const createSeedData = () => {
  return Promise.all([
    createUserSeeds(),
  ])
}

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
      // If you need to, use this to create seed data.
      // createSeedData();
      return console.info(`Successfully connected to ${DB_URI}`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    })
}

import * as mongoose from 'mongoose'
import { Message, User, Chat } from './models'

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungi'

const createUserSeeds = () => {
  const seedUsers = [
    {
      phone: '123-456-7890',
      firstName: 'Annie',
      lastName: 'Blondey',
      rating: 9.5,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80',
          'https://images.unsplash.com/photo-1532616967597-fb8bb5b33429?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          'https://images.unsplash.com/photo-1524512250595-1c8a92523f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        ],
        age: 22,
        heightInches: 61,
        location: 'Fort Collins, CO',
        job: 'Waitress',
        education: 'NYU',
        politicalIdeology: 'Democrat',
        religion: 'Agnostic',
        hometown: 'Greely, CO',
      },
    },
    {
      phone: '223-456-7890',
      firstName: 'Stephanie',
      lastName: 'RedHead',
      rating: 8.4,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1536763225213-b5592b525630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          // tslint:disable: max-line-length
          'https://images.unsplash.com/photo-1524693194261-a20729b00bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          'https://images.unsplash.com/photo-1489597500842-8347eb432c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          // tslint:enable: max-line-length
        ],
        age: 26,
        heightInches: 63,
        location: 'Fairfield, CT',
        job: 'Finance',
        education: 'Madison',
        politicalIdeology: 'Democrat',
        religion: 'Christian',
        hometown: 'Washington, DC',
      },
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
      users: [],
      messages: [
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
    createMessageSeeds(),
    createChatSeeds(),
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
      createSeedData();
      return console.info(`Successfully connected to ${DB_URI}`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    })
}

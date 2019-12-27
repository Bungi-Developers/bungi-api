// tslint:disable: max-line-length
import * as mongoose from 'mongoose'
import { User } from './models'

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bungi'

const createUserSeeds = () => {
  const seedUsers = [
    {
      phone: '123-456-7890',
      firstName: 'Brittany',
      lastName: 'Blondey',
      rating: 9.5,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80',
          'https://images.unsplash.com/photo-1532616967597-fb8bb5b33429?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          'https://images.unsplash.com/photo-1524512250595-1c8a92523f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        ],
        sex: 'Female',
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
      phone: '423-456-7890',
      firstName: 'Sarah',
      lastName: 'Sweety',
      rating: 9.1,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        ],
        sex: 'Female',
        age: 26,
        heightInches: 62,
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
      firstName: 'Rachel',
      lastName: 'RedHead',
      rating: 8.4,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1536763225213-b5592b525630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          'https://images.unsplash.com/photo-1524693194261-a20729b00bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          'https://images.unsplash.com/photo-1489597500842-8347eb432c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        ],
        age: 27,
        sex: 'Female',
        heightInches: 63,
        location: 'Fairfield, CT',
        job: 'Finance',
        education: 'Madison',
        politicalIdeology: 'Democrat',
        religion: 'Christian',
        hometown: 'Washington, DC',
      },
    },
    {
      phone: '323-456-7890',
      firstName: 'Betty',
      lastName: 'Brunette',
      rating: 9.1,
      profile: {
        imageUrls: [
          'https://images.unsplash.com/photo-1520565628182-8b368f57d415?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          'https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          'https://images.unsplash.com/photo-1444913220552-fe31fed9c5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ],
        age: 23,
        heightInches: 60,
        sex: 'Female',
        location: 'Fairfield, CT',
        job: 'Model',
        education: 'Stanford',
        politicalIdeology: 'Moderate',
        religion: 'Budhist',
        hometown: 'Washington, DC',
      },
    },
  ]
  return new Promise((res, rej) => {
    User.deleteMany({}, (err) => {
      if (err) {
        rej(err);
      }
      User.create(
        seedUsers,
        (innerErr, data) => {
          if (innerErr) {
            rej(innerErr);
          }
          res(data);
        },
      );
    })
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
      createSeedData();
      return console.info(`Successfully connected to ${DB_URI}`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    })
}

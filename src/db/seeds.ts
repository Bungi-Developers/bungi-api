// tslint:disable: max-line-length
import * as faker from 'faker';
import { random, uniqueId as uuid } from 'lodash';
import { User } from './models';

const createFakeUser = () => ({
  phone: faker.phone.phoneNumber(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  chats: [],
  rating: (Math.random() * (+10 - +6) + +6).toFixed(1),
  profile: {
    imageUrls: [
      `https://source.unsplash.com/featured/?hot-girl-${uuid()}`,
      `https://source.unsplash.com/featured/?hot-girl-${uuid()}`,
      `https://source.unsplash.com/featured/?hot-girl-${uuid()}`,
    ],
    sex: 'Female',
    age: random(21, 32),
    heightInches: random(60, 69),
    location: ['Farfield, CT', 'Fort Collins, CO'][random(0, 1)],
    job: faker.name.jobTitle(),
    education: ['Colorado University', 'Fairfield University', 'Colorado Colege', 'Georgia Tech'][random(0, 3)],
    politicalIdeology: ['Democrat', 'Republican', 'Moderate'][random(0, 2)],
    religion: ['Agnostic', 'Christian', 'Budhist', 'Atheist'][random(0, 3)],
    hometown: faker.fake('{{address.city}}, {{address.stateAbbr}}'),
  },
});

const createNSeedUsers = (n) => [...Array(n)].map(() => createFakeUser());

const createUserSeeds = () => {
  const seedUsers = [
    {
      phone: '555-555-5555',
      firstName: 'Michael',
      lastName: 'Plazek',
      chats: [],
      rating: 10.0,
      profile: {
        imageUrls: [
          'https://media.licdn.com/dms/image/C4E03AQFEPJoAGYBRyg/profile-displayphoto-shrink_800_800/0?e=1582761600&v=beta&t=qtph-qH_8Ec21OzTI7uLEIOKZ1KfdjLeOfiGEaDWcNo',
          'data:image/jpeg;base64,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',
          'https://avatars0.githubusercontent.com/u/28572118?s=460&v=4',
        ],
        sex: 'Male',
        age: 28,
        heightInches: 71,
        location: 'Fort Collins, CO',
        job: 'Software Engineer',
        education: 'CU',
        politicalIdeology: 'Democrat',
        religion: 'Agnostic',
        hometown: 'Pittsburgh, PA',
      },
    },
    {
      phone: '555-555-1234',
      firstName: 'Ryan',
      lastName: 'Collins',
      chats: [],
      rating: 10.0,
      profile: {
        imageUrls: [
          'https://i.ibb.co/d6tVcgS/IMG-0444.jpg',
          'https://i.ibb.co/8s1tPxQ/IMG-0561.jpg',
          'https://i.ibb.co/pyQBwV4/IMG-0564.jpg',
        ],
        sex: 'Male',
        age: 33,
        heightInches: 69,
        location: 'Fairfield, CT',
        job: 'Software Engineer',
        education: 'CU',
        politicalIdeology: 'Democrat',
        religion: 'Agnostic',
        hometown: 'Fairfield, CT',
      },
    },
    {
      phone: '123-456-7890',
      firstName: 'Brittany',
      lastName: 'Blondey',
      chats: [],
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
      chats: [],
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
      chats: [],
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
      chats: [],
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
    ...createNSeedUsers(50),
  ]
  return new Promise((res, rej) => {
    User.find({}, (err, users) => {
      if (err) {
        rej(err);
      }
      if (process.env.BUNGI_API_CREATE_SEEDS || !users.length) {
        User.deleteMany({}, (innerErr) => {
          if (innerErr) {
            rej(innerErr);
          }
          User.create(
            seedUsers,
            (innerInnerErr, data) => {
              if (innerInnerErr) {
                rej(innerInnerErr);
              }
              res(data);
            },
          );
        });
      }
      res(true);
    });
  });
}

export const createSeedData = async () => {
  await createUserSeeds();
}

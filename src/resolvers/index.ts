import usersResolver from './users';

export default {
  Query: {
    users: usersResolver,
  },
}

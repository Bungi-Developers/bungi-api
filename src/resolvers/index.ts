import discoverResolver from './discover';
import userResolver from './user';

export default {
  Query: {
    discover: discoverResolver,
    user: userResolver,
  },
}

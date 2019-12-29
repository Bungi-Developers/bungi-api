import { discoverQuery, userQuery, currentChatsQuery } from './queries';
import { createChatMutation, passUserMutation } from './mutations';

export default {
  Query: {
    discover: discoverQuery,
    user: userQuery,
    currentChats: currentChatsQuery,
  },
  Mutation: {
    createChat: createChatMutation,
    passUser: passUserMutation,
  },
}

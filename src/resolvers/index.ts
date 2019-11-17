import User from '../db/models/user';
import Chat from '../db/models/chat';
import Message from '../db/models/message';

export default {
  Query: {
    users: () => User.find({}),
    chats: () => Chat.find({}),
    messages: () => Message.find({}),
  },
}

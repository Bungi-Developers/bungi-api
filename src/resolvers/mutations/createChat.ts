import { User, Chat, ChatModel, Message } from '../../db/models';

interface Args {
  createdBy: string;
  recipient: string;
  message: string;
}

export default async (_, { createdBy, recipient, message }: Args): Promise<ChatModel> => {
  const createdByUser = await User.findOne({ phone: createdBy }).exec();
  const recipientUser = await User.findById(recipient).exec();
  const newChat = new Chat({
    createdBy: createdByUser,
    recipient: recipientUser,
  });
  createdByUser.chats.push(newChat);
  const newMessage = new Message({
    url: message,
  });
  newChat.messages.push(newMessage);
  await newMessage.save();
  await newChat.save();
  await createdByUser.save();
  return newChat;
};

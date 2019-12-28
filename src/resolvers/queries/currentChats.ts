import { User } from '../../db/models';
import { CurrentChatsPayload } from './types';

interface Args {
  phone: string;
}

export default async (_, { phone }: Args): Promise<CurrentChatsPayload[]> => {
  const user = await User.findOne({ phone }).populate('chats', 'messages').exec();
  return user.chats.map((item) => ({ messages: item.toObject().messages }));
};

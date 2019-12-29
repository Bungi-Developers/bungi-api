import { User } from '../../db/models';
import { CurrentChatsPayload } from './types';

interface Args {
  phone: string;
}

export default async (_, { phone }: Args): Promise<CurrentChatsPayload[]> => {
  const user = await User.findOne({ phone }).populate('chats', 'messages').exec();
  const chats =  user.chats.map((item) => item.toObject());
  return chats;
};

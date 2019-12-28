import User from '../db/models/user';
import { mapUserData } from './utils';
import { UserPayload } from './types';

interface Args {
  phone: string;
}

export default async (_, { phone }: Args): Promise<UserPayload> => {
  const user = await User.findOne({ phone }).exec();
  return mapUserData(user.toObject());
};

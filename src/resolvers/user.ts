import User from '../db/models/user';
import { mapUserData } from './utils';

export default async (_, { phone }) => {
  const user = await User.findOne({ phone }).exec();
  return mapUserData(user.toObject());
};

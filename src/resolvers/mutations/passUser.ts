import { User } from '../../db/models';

interface Args {
  user: string;
  phone: string;
}

export default async (_, { user, phone }: Args): Promise<boolean> => {
  const passedUser = await User.findById(user).exec();
  const currentUser = await User.findOne({ phone }).exec();
  currentUser.passes.push(passedUser);
  currentUser.save();
  return true;
};

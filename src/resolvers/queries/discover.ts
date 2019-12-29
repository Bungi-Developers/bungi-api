import User, { UserModel } from '../../db/models/user';
import { mapUserData } from './utils';

interface UserPayload {
  id: string;
  phone: string;
  name: string;
  rating: number;
  profile: {
    imageUrls: string[];
    age: number;
    height: string;
    job: string;
    education: string;
    politicalIdeology: string;
    religion: string;
    hometown: string;
    sex: string;
  };
}

interface Args {
  sex: string;
  location: string;
  phone: string;
}

export default async (_, { sex, location, phone }: Args): Promise<UserPayload[]> => {
  const currentUser: UserModel = await User.findOne({ phone }).exec();
  const users: UserModel[] = await User
    .find({ '_id': { $nin: currentUser.passes }, 'profile.sex': sex, 'profile.location': location })
    .exec();
  return users.map((item) => item.toObject()).map(mapUserData);
};

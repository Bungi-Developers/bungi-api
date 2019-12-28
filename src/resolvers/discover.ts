import User, { UserModel } from '../db/models/user';
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
}

export default async (_, { sex, location }: Args): Promise<UserPayload[]> => {
  const users: UserModel[] = await User
    .find({ 'profile.sex': sex, 'profile.location': location })
    .exec();
  return users.map((item) => item.toObject()).map(mapUserData);
};

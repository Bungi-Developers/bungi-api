import { UserModel } from '../db/models/user';
import { UserPayload } from './types';

const convertInchesToString = (heightInches: number): string => {
  const inchesPerFoot = 12;
  const feet = Math.floor(heightInches / inchesPerFoot);
  const inches = heightInches % inchesPerFoot;
  return `${feet}'${inches ? ` ${inches}"` : ''}`;
};

export const mapUserData = (user: UserModel): UserPayload => ({
  ...user,
  id: user._id,
  name: `${user.firstName} ${user.lastName}`,
  profile: {
    ...user.profile,
    height: convertInchesToString(user.profile.heightInches),
  },
});

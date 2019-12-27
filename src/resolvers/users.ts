import User from '../db/models/user';

const convertInchesToString = (heightInches) => {
  const inchesPerFoot = 12;
  const feet = Math.floor(heightInches / inchesPerFoot);
  const inches = heightInches % inchesPerFoot;
  return `${feet}'${inches ? ` ${inches}"` : ''}`;
};

export default async () => {
  const users = await User.find({}).exec();
  return users.map((item) => item.toObject()).map((user) => ({
    ...user,
    id: user._id,
    name: `${user.firstName} ${user.lastName}`,
    profile: {
      ...user.profile,
      height: convertInchesToString(user.profile.heightInches),
    },
  }));
};

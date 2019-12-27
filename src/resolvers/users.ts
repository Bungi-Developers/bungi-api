import User from '../db/models/user';

const convertInchesToString = (heightInches) => {
  const inchesPerFoot = 12;
  const feet = Math.floor(heightInches / inchesPerFoot);
  const inches = heightInches % inchesPerFoot;
  return `${feet}'${inches ? ` ${inches}"` : ''}`;
};

export default () => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log(err);
    }
    return users.toArray().map((user) => {
      return {
        ...user,
        name: `${user.firstName} ${user.lastName}`,
        profile: {
          ...user.profile,
          height: convertInchesToString(user.profile.heightInches),
        },
      };
    });
  });
};

const convertInchesToString = (heightInches) => {
  const inchesPerFoot = 12;
  const feet = Math.floor(heightInches / inchesPerFoot);
  const inches = heightInches % inchesPerFoot;
  return `${feet}'${inches ? ` ${inches}"` : ''}`;
};

export const mapUserData = (user) => ({
  ...user,
  id: user._id,
  name: `${user.firstName} ${user.lastName}`,
  profile: {
    ...user.profile,
    height: convertInchesToString(user.profile.heightInches),
  },
});

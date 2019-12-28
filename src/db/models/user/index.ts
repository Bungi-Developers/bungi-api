import { Schema, model } from 'mongoose'
import { User } from './types';

export { User as UserModel } from './types'

const ProfileSchema: Schema = new Schema({
  imageUrls: [{ type: String }],
  age: { type: Number },
  heightInches: { type: Number },
  location: { type: String },
  job: { type: String },
  education: { type: String },
  politicalIdeology: { type: String },
  religion: { type: String },
  hometown: { type: String },
  sex: { type: String },
});

export const UserSchema: Schema = new Schema({
  phone: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  rating: { type: Number },
  profile: ProfileSchema,
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
});

export default model<User>('User', UserSchema)

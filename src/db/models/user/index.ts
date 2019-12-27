import { Schema, model } from 'mongoose'
import { User } from './types'

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

const ConnectionSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  chatting: { type: Boolean, required: true, default: false },
});

const UserSchema: Schema = new Schema({
  phone: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  rating: { type: Number },
  profile: ProfileSchema,
  connections: [ConnectionSchema],
});

export default model<User>('User', UserSchema)

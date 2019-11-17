import { Schema, model } from 'mongoose'
import { User } from './types'

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

export default model<User>('User', UserSchema)

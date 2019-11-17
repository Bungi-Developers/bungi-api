import mongoose, { Schema } from 'mongoose'
import { Message } from './types'

const MessageSchema: Schema = new Schema({
  content: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model<Message>('Message', MessageSchema)

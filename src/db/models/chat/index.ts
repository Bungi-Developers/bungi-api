import mongoose, { Schema } from 'mongoose'
import { Chat } from './types'

const ChatSchema: Schema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

export default mongoose.model<Chat>('Chat', ChatSchema)

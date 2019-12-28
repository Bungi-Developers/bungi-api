import { Schema, model } from 'mongoose'
import { Chat } from './types';
import { MessageSchema } from '../message';

export { Chat as ChatModel } from './types'

export const ChatSchema: Schema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  recipient: { type: Schema.Types.ObjectId, ref: 'User' },
  pending: { type: Boolean, required: true, default: true },
  messages: [MessageSchema],
});

export default model<Chat>('Chat', ChatSchema);

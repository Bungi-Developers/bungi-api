import { Schema, model } from 'mongoose'
import { Message } from './types';

export { Message as MessageModel } from './types'

export const MessageSchema: Schema = new Schema({
  url: { type: String },
});

export default model<Message>('Message', MessageSchema);

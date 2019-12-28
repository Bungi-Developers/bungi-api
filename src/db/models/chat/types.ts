import { Document } from 'mongoose';
import { MessageModel } from '../message';

export interface Chat extends Document {
  createdBy: string;
  recipient: string;
  pending: boolean;
  messages: MessageModel[];
}

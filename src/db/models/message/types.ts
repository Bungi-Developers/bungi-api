import { Document } from 'mongoose';

export interface Message extends Document {
  url: string;
}

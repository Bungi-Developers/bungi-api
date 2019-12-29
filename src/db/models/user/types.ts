
import { Document } from 'mongoose';
import { ChatModel } from '../chat';

export interface Profile extends Document {
  imageUrls: string[];
  age: number;
  heightInches: number;
  job: string;
  education: string;
  politicalIdeology: string;
  religion: string;
  hometown: string;
  sex: string;
}

export interface User extends Document {
  phone: string;
  firstName: string;
  lastName: string;
  rating: number;
  profile: Profile;
  chats: ChatModel[];
  passes: User[];
}

import { MessageModel } from '../../db/models/message'

export interface UserPayload {
  id: string;
  phone: string;
  name: string;
  rating: number;
  profile: {
    imageUrls: string[];
    age: number;
    height: string;
    job: string;
    education: string;
    politicalIdeology: string;
    religion: string;
    hometown: string;
    sex: string;
  };
}

export interface CurrentChatsPayload {
  id: string;
  messages: MessageModel[];
}

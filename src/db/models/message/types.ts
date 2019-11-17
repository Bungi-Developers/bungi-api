
import { Document } from 'mongoose'
import {User} from '../user/types'

export interface Message extends Document {
  content: string;
  user: User;
}

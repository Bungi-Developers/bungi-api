
import mongoose, { Schema, Document } from 'mongoose';
import { Message } from '../message/types'
import { User } from '../user/types'

export interface Chat extends Document {
  users: User[];
  messages: Message[];
}

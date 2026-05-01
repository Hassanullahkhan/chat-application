import mongoose, { Schema, type Document } from 'mongoose'

export interface IChat extends Document {
  participants: mongoose.Types.ObjectId[]
  lastMessage?: mongoose.Types.ObjectId
  lastMessageAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

// in our chat application we will have 2 participants , [John, Rose]
// stoere them as IDs [John => 123, Rose => 456] as mongoose.Types.ObjectId[] //?Object as array

const ChatSchema = new Schema<IChat>({
  participants: [{ types: Schema.Types.ObjectId, ref: 'User', required: true }], // User means take reference from User Model
  lastMessage: { types: Schema.Types.ObjectId, ref: 'Message', default: null }, // Message means take reference from Message Model
  lastMessageAt: { type: Date, default: Date.now },
} , {timestamps: true})


export const Chat = mongoose.model("Chat", ChatSchema) 
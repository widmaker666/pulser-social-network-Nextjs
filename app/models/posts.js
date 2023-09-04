import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema(
  {
    title: String,    
    description: String,
    author: String,
    pictureUrl: String,
    userUid: String,
  },
  { timestamps: true }
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema)

export default Posts
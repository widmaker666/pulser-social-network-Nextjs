import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema(
  {
    pictureCommentUrl: String,
    comment: String,
    idComment: String,
    userId: String,
  },
  { timestamps: true }
);

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;

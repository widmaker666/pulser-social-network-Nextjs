import connectToMongoDB from "@/app/libs/mongodb";
import Comments from "@/app/models/comments";
import { NextResponse } from "next/server";

//! Methode POST Comments
export async function POST(req) {
  const { pictureCommentUrl, comment, idComment } = await req.json();
  await connectToMongoDB();
  await Comments.create({ pictureCommentUrl, comment, idComment });
  return NextResponse.json(
    {
      message: "comment created",
    },
    {
      status: 201,
    }
  );
}

//! Methode GET Comments
export async function GET () {
    await connectToMongoDB()
    const comments = await Comments.find()
    return NextResponse.json({comments})
}
import connectToMongoDB from "@/app/libs/mongodb";
import Comments from "@/app/models/comments";
import { NextResponse } from "next/server";

//! Methode POST Comments
export async function POST(req) {  
 
  const { pictureCommentUrl, comment, idComment, userId } = await req.json();
  await connectToMongoDB();
  await Comments.create({ pictureCommentUrl, comment, idComment, userId });
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

// !Methode DELETE
export async function DELETE(request) {

  const id = request.nextUrl.searchParams.get("id");  
  await connectToMongoDB();
  await Comments.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" }, { status: 200});
}
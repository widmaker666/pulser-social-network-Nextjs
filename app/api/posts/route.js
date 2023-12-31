import connectToMongoDB from "@/app/libs/mongodb";
import Posts from "@/app/models/posts";
import { NextResponse } from "next/server";

// !Methode POST
export async function POST(request) {
  const { title, description, author, pictureUrl, userUid } = await request.json();
  await connectToMongoDB();
  await Posts.create({ title, description, author, pictureUrl, userUid });
  return NextResponse.json(
    { message: "Post created successfully!" },
    { status: 201 }
  );
}

// !Methode GET
export async function GET() {
  await connectToMongoDB();
  const posts = await Posts.find();
  return NextResponse.json({posts});
}

// !Methode DELETE
export async function DELETE(request) {

  const id = request.nextUrl.searchParams.get("id");  
  await connectToMongoDB();
  await Posts.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" }, { status: 200});
}



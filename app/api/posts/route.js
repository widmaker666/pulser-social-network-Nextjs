import connectToMongoDB from "@/app/libs/mongodb";
import Posts from "@/app/models/posts";
import { NextResponse } from "next/server";

// !Methode POST
export async function POST(request) {
  const { title, description } = await request.json();
  await connectToMongoDB();
  await Posts.create({ title, description });
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
export async function DEELETE(request) {
  const id = request.nextURL.searchParams.get("id");
  await connectToMongoDB();
  await Posts.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}



import connectToMongoDB from "@/app/libs/mongodb";
import Posts from "@/app/models/posts";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, category, description } = await request.json();
  await connectToMongoDB();
  await Posts.create({ title, category, description });
  return NextResponse.json(
    { message: "Post created successfully!" },
    { status: 201 }
  );
}

export async function GET(){
    await connectToMongoDB();
    const posts = await Posts.find();
    return NextResponse.json(posts);
}

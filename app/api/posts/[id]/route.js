import connectToMongoDB from "@/app/libs/mongodb";
import Posts from "@/app/models/posts";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToMongoDB();
  await Posts.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Success msg update" });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const posts = await Posts.findOne({ _id: id });
  return NextResponse.json({ posts }, { status: 200 });
}

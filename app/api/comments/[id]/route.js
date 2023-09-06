import connectToMongoDB from "@/app/libs/mongodb";
import Comments from "@/app/models/comments";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newComment: comment } = await request.json();
  await connectToMongoDB();
  await Comments.findByIdAndUpdate(id, { comment });
  return NextResponse.json({ message: "Success msg update" });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const comments = await Comments.findOne({ _id: id });
  return NextResponse.json({ comments }, { status: 200 });
}
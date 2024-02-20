import { User } from "@/models/User";
import { env } from "@/env";
import mongoose from "mongoose";

export const POST = async (req: Request) => {
  const body = await req.json();

  mongoose.connect(env.MONGO_URL);

  const createdUser = await User.create(body);

  return Response.json(createdUser, { status: 201 });
};

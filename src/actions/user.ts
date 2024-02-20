"use server";

import { env } from "@/env";
import { User } from "@/models/User";
import {
  Authentication,
  authenticationSchema,
} from "@/schemas/authenticationSchema";
import mongoose from "mongoose";

import * as z from "zod";

export const createUser = async (data: Authentication) => {
  try {
    const userData = authenticationSchema.parse(data);

    mongoose.connect(env.MONGO_URL);

    await User.create(userData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.message);
    }

    throw new Error("Something went wrong");
  }
};

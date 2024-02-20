import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (password: string) => {
        if (password.length < 3) {
          throw new Error("Password must be at least 3 characters long");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", (user) => {
  const { password } = user;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  user.password = hashedPassword;
});

export const User = models?.User || model("User", UserSchema);

import * as z from "zod";

export const authenticationSchema = z.object({
  email: z
    .string({
      required_error: "Please enter a valid email address",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  password: z
    .string({
      required_error: "Please enter a valid password",
    })
    .min(3, {
      message: "Password must be at least 3 characters long",
    }),
});

export type Authentication = z.infer<typeof authenticationSchema>;

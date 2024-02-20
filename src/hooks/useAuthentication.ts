"use client";

import { createUser } from "@/actions/user";
import {
  Authentication,
  authenticationSchema,
} from "@/schemas/authenticationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

type UseAuthenticationProps = {
  isLogin: boolean;
};

export const useAuthentication = ({ isLogin }: UseAuthenticationProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { setFocus, handleSubmit, ...rest } = useForm<Authentication>({
    resolver: zodResolver(authenticationSchema),
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const loginUser = async (data: Authentication) => {
    try {
      const userData = authenticationSchema.parse(data);

      await signIn("credentials", { ...userData, callbackUrl: "/" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.message);
      }

      throw new Error("Something went wrong");
    }
  };

  const submitHandler = (data: Authentication) =>
    startTransition(async () => {
      try {
        if (isLogin) {
          await loginUser(data);
        } else {
          await createUser(data);
          toast.success("Account! Now you can login");
          router.push("/login");
        }
      } catch {
        toast.error("Something went wrong");
      }
    });

  return {
    isPending,
    submitHandler: handleSubmit(submitHandler),
    ...rest,
  };
};

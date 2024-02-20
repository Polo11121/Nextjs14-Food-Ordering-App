"use client";

import { Button, Input } from "@/components/ui";
import { useAuthentication } from "@/hooks";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

export const AuthenticationForm = () => {
  const { status } = useSession();
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const {
    isPending,
    submitHandler,
    register,
    formState: { errors },
  } = useAuthentication({
    isLogin,
  });

  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={submitHandler}>
      <Input
        disabled={isPending}
        {...register("email")}
        placeholder="Email"
        type="email"
        name="email"
        error={errors.email}
      />
      <Input
        disabled={isPending}
        {...register("password")}
        placeholder="Password"
        type="password"
        name="password"
        error={errors.password}
      />
      <Button variant="red" className="w-full rounded-xl font-semibold">
        {isLogin ? "Login" : "Register"}
      </Button>
      {isLogin ? (
        <p className="text-sm text-center text-gray-400 mt-1">
          Don&apos;t have an account?&nbsp;
          <Link href="/register" className="text-primary underline">
            Register here&nbsp;&rarr;
          </Link>
        </p>
      ) : (
        <p className="text-sm text-center text-gray-400 mt-1">
          Already have an account?&nbsp;
          <Link href="/login" className="text-primary underline">
            Login here&nbsp;&rarr;
          </Link>
        </p>
      )}
    </form>
  );
};

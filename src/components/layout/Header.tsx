"use client";

import { buttonVariants } from "@/components/ui";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

const ROUTES = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Menu",
    path: "/menu",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="/">
        ST PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {ROUTES.map(({ label, path }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={path}
              href={path}
              className={classNames(
                "hover:text-gray-700 hover:underline transition-all",
                {
                  "text-primary underline hover:text-primary": isActive,
                }
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link
          href="/login"
          className="hover:text-primary hover:font-semibold transition-all"
        >
          Login
        </Link>
        <Link href="/register" className={buttonVariants.red}>
          Register
        </Link>
      </nav>
    </header>
  );
};

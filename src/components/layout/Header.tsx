import { buttonVariants } from "@/components/ui";
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
  {
    label: "Login",
    path: "/login",
    styles: buttonVariants.red,
  },
];

export const Header = () => (
  <header className="flex items-center justify-between">
    <Link className="text-primary font-semibold text-2xl" href="/">
      ST PIZZA
    </Link>
    <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      {ROUTES.map(({ label, path, styles }) => (
        <Link key={path} href={path} className={styles}>
          {label}
        </Link>
      ))}
    </nav>
  </header>
);

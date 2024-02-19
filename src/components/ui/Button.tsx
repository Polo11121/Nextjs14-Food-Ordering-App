import classNames from "classnames";

export const buttonVariants = {
  red: "bg-primary text-white px-8 py-2 rounded-full hover:bg-white hover:text-primary hover:shadow-md  shadow-black transition-all duration-500",
};

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant,
  className,
  ...props
}: Readonly<ButtonProps>) => (
  <button
    {...props}
    className={classNames(variant && buttonVariants[variant], className)}
  >
    {children}
  </button>
);

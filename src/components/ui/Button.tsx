import classNames from "classnames";

export const buttonVariants = {
  red: "bg-primary text-white px-8 py-2 rounded-full hover:bg-white hover:text-primary hover:shadow-lg shadow-black transition-all duration-500",
  gray: "block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2 hover:text-primary hover:border-primary transition-all duration-500",
};

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant,
  className,
  disabled,
  ...props
}: Readonly<ButtonProps>) => (
  <button
    {...props}
    className={classNames(
      variant && buttonVariants[variant],
      {
        "opacity-50 pointer-events-none": disabled,
      },
      className
    )}
  >
    {children}
  </button>
);

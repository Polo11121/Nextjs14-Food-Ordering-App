export const buttonVariants = {
  red: "bg-primary text-white px-8 py-2 rounded-full",
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
    className={`${variant ? buttonVariants[variant] : ""} ${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </button>
);

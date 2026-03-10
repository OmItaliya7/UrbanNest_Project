import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  return (
    <button className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes, ReactNode } from "react";

//
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${className} flex-1  w-full text-white text-lg py-2 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

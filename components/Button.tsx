import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const className = props.className;
  return (
    <button
      {...props}
      className={`transition-all transition-duration-100 bg-red-500 hover:bg-red-600 py-2 px-4 rounded-full text-white font-medium w-fit ${props.className}`}
    ></button>
  );
};

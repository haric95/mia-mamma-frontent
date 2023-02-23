import React from "react";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  return <div className={`rounded-full ${className}`} {...props}></div>;
};

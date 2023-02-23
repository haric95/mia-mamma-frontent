import Link from "next/link";
import React from "react";
import { Button } from "./Button";

type Link = { link: string; label: string; external: boolean };

type LinkArrayProps = {
  links: Link[];
  containerClass?: string;
  linkClass?: string;
};

export const LinkArray: React.FC<LinkArrayProps> = ({
  links,
  containerClass,
  linkClass,
}) => {
  return (
    <div className={`flex bg-main rounded-full h-fit ${containerClass}`}>
      {links.map((link) => {
        if (link.external) {
          return (
            <a
              className="py-2 px-4 hover:underline"
              href={link.link}
              target="_blank"
              rel="noreferrerx"
            >
              {link.label}
            </a>
          );
        } else {
          return (
            <Link href={link.link}>
              <button className={`py-2 px-4 hover:underline ${linkClass}`}>
                {link.label}
              </button>
            </Link>
          );
        }
      })}
    </div>
  );
};

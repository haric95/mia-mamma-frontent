import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { LinkArray } from "./LinkArray";

const DONATE_LINK = "https://enthuse.com";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 w-full font-title bg-white px-8 py-2 flex md:flex-row flex-col text-white">
      <div className="flex items-center mr-auto">
        <div className={`flex items-center`}>
          <LinkArray
            links={[
              { label: "Home", link: "/home", external: false },
              { label: "Our Mission", link: "/our-mission", external: false },
              { label: "About Us", link: "/about-us", external: false },
              {
                label: "Classes & Courses",
                link: "/classes-and-courses",
                external: false,
              },
            ]}
          />
        </div>
      </div>
      <div>
        <img src="/images/logo.png" alt="logo" className="h-32" />
      </div>
      <div className="flex items-center ml-auto">
        <div className={`flex items-center`}>
          <LinkArray
            links={[
              { label: "Books", link: "/books", external: false },
              { label: "Visit Us", link: "/visit-us", external: false },
              { label: "Contact", link: "/contact", external: false },
            ]}
          />
        </div>
        <div className={`flex items-center`}>
          <LinkArray
            links={[
              {
                label: "Donate Online ♡",
                link: DONATE_LINK,
                external: true,
              },
            ]}
            containerClass="bg-red-500 ml-2"
          />
        </div>
      </div>
    </header>
  );
};

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const NavBar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-50 border-solid px-8 font-poppins text-xl lg:px-12 ${showBackground ? "bg-white" : "bg-transparent"} ${showBackground ? "text-[#940B72]" : "text-white"} max-h-[10px] w-full`}
    >
      <div className="navbar-start font-poppins">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="">Item 1</Link>
            </li>
            <li>
              <Link href="">Parent</Link>
              <ul className="p-2">
                <li>
                  <Link href="">Submenu 1</Link>
                </li>
                <li>
                  <Link href="">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Item 3</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            src={`/logo/${!showBackground ? "logo" : "logo-inv"}.png`}
            alt="logo"
            width={150}
            height={150}
            className="hidden lg:block"
          />
        </Link>
      </div>
      <div className="navbar-center hidden font-poppins lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link
              href="/"
              className="custom-link rounded-none hover:cursor-pointer"
            >
              <span
                className={`${showBackground ? "underline-animation-fuschia" : "underline-animation"}`}
              >
                Try it
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              scroll={true}
              className="custom-link rounded-none hover:cursor-pointer"
            >
              <span
                className={`${showBackground ? "underline-animation-fuschia" : "underline-animation"}`}
              >
                How it works
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              scroll={true}
              className="custom-link rounded-none hover:cursor-pointer"
            >
              <span
                className={`${showBackground ? "underline-animation-fuschia" : "underline-animation"}`}
              >
                Pricing
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              scroll={true}
              className="custom-link rounded-none decoration-inherit hover:cursor-pointer"
            >
              <span
                className={`${showBackground ? "underline-animation-fuschia" : "underline-animation"}`}
              >
                FAQ
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-poppins">
        <Button
          variant="outline"
          className={`gap-4 border hover:text-primary ${showBackground ? "border-primary" : "border-secondary"} bg-[#ead9e624] ${showBackground ? "text-primary" : "text-secondary"}`}
        >
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </div>
  );
};
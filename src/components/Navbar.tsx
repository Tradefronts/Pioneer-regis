"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Logo from "../../public/images/logo/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <nav
        className="lg:relative lg:px-12 px-4 lg:py-8 py-2 w-full flex items-center justify-between border-b border-transparent"
        style={{
          borderImage: `repeating-linear-gradient(
      to right,
      #D6D6D6 0 8px,
      transparent 8px 20px
    ) 1`,
        }}
      >
        <div className="lg:w-24 w-14">
          <div className="lg:absolute lg:top-10 top-12">
            <Image src={Logo} alt="logo" height={90} width={90} />
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? "translate-x-0 overflow-hidden"
              : "translate-x-full lg:translate-x-0 overflow-auto"
          } flex lg:flex-row flex-col bg-white lg:bg-transparent lg:w-auto w-full fixed 
             lg:relative inset-0 lg:inset-auto items-center lg:h-auto h-screen z-40 
             justify-center lg:gap-[58px] gap-[20px] transition-transform lg:transition-none 
             duration-500 ease-linear`}
        >
          {isOpen && (
            <IoCloseOutline
              onClick={() => setIsOpen(false)}
              className={`h-7 w-7  absolute top-5 right-5 cursor-pointer text-black transition-opacity duration-600 ease-out 
            }`}
            />
          )}

          <ul className=" flex md:flex-row flex-col items-center justify-center gap-3 lg:gap-10 lg:text-xs text-neutral-700">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? "underline underline-offset-6" : ""
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/softwares"
                className={
                  pathname === "/softwares"
                    ? "underline underline-offset-6"
                    : ""
                }
                onClick={() => setIsOpen(false)}
              >
                Softwares
              </Link>
            </li>
            <li>Tutorials</li>
            <li>Support</li>
            <li className="mt-8">
              <Button
                name="Get Started"
                bgColor="#3B3B3B"
                textColor="#FFFFFF"
                border="#E2E2E2"
                isShow="lg:hidden block"
              />
            </li>
          </ul>
        </div>

        <Button
          name="Get Started"
          bgColor="#3B3B3B"
          textColor="#FFFFFF"
          border="#E2E2E2"
          isShow="lg:block hidden"
        />

        <div className="lg:hidden flex items-center z-50">
          {!isOpen && (
            <HiOutlineMenu
              onClick={() => setIsOpen(true)}
              className={`h-7 w-7 cursor-pointer text-black transition-opacity duration-500 ease-out 
              }`}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

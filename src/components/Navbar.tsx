"use client";

import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Logo from "../../public/images/logo/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Separator from "./Separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const nav_Items = [
    { label: "Home", href: "/" },
    { label: "Softwares", href: "/softwares" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Support", href: "/support" },
  ];

  return (
    <div>
      <nav className="font-medium font-dm-sans lg:relative lg:px-14 md:px-10 px-5 lg:py-7 py-3 w-full flex items-center justify-between">
        <div className="lg:w-24 w-14 z-10 ">
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
             lg:relative inset-0 lg:inset-auto items-center lg:h-auto h-screen
             justify-center lg:gap-[58px] gap-[20px] transition-transform lg:transition-none 
             duration-300 ease-linear font-medium z-50`}
        >
          {isOpen && (
            <IoCloseOutline
              onClick={() => setIsOpen(false)}
              className={`h-7 w-7  absolute top-5 right-5 cursor-pointer text-black transition-opacity duration-600 ease-out 
            }`}
            />
          )}

          <ul className="  flex lg:flex-row flex-col items-center justify-between gap-3 xl:gap-12 lg:gap-5 xl:text-sm lg:text-xs text-sm text-neutral-700">
            {nav_Items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "underline decoration-[2px] underline-offset-4 decoration-[#D9D9D9]"
                      : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="block lg:hidden mt-8">
              <Button
                name="Get Started"
                variant="dark"
                // isShow="block lg:hidden"
              />
            </li>
          </ul>
        </div>
        <Button name="Get Started" variant="dark" isShow="lg:block hidden" />

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
      <Separator />
    </div>
  );
};

export default Navbar;

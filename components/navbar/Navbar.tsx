"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const links = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/products",
    title: "Product",
  },
  {
    path: "/disclaimer",
    title: "Disclaimer",
  },
];

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const path = usePathname();

  return (
    <>
      <nav className="bg-neutral-800 p-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="https://tradewithkeithkaplan.com/logo.png" alt="" />
          </Link>

          {/* links */}
          {path == "/" || path == "/subscribe" || path == "/products" ? (
            <div className="font-body text-white capitalize space-x-4 hidden md:block">
              {links.map((link) => (
                <Link href={link.path} key={link.path}>
                  {link.title}
                </Link>
              ))}

              <Link href="/subscribe" className="bg-orange-700 p-4 rounded">
                Subscribe
              </Link>
            </div>
          ) : null}
          {/* button */}
          {path == "/" || path == "/subscribe" || path == "/products" ? (
            <button
              className="md:hidden block"
              onClick={() => setActive(!isActive)}
            >
              <Menu color="#fff" strokeWidth={1} />
            </button>
          ) : null}
        </div>
      </nav>
      <MobileNavbar show={isActive} />
    </>
  );
};

export default Navbar;

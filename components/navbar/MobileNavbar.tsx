import React from "react";
import { links } from "./Navbar";
import Link from "next/link";

const MobileNavbar = ({ show }: { show: boolean }) => {
  return (
    <>
      {show && (
        <div className="p-4 bg-neutral-700">
          <div className="flex flex-col gap-6 font-body capitalize my-4 text-orange-50">
            {links.map((link) => (
              <Link href={link.path} key={link.path} className="text-xl">
                {link.title}
              </Link>
            ))}
            <Link href="/subscribe" className="bg-orange-700 p-4 rounded w-fit">
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;

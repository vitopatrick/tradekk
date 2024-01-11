import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 p-4">
      <div className="text-center font-body capitalize p-3 text-white">
        <p>
          Contact{" "}
          <span className="font-bold underline">
            support@tradeswithkeithkaplan.com
          </span>{" "}
          for further support.
        </p>
        <p>©2024 TradeSmith, LLC. All Rights Reserved.</p>
        <p>
          <Link href="/" className="underline text-blue-500">
            Terms of use
          </Link>{" "}
          |{" "}
          <Link href="/" className="underline text-blue-500">
            {" "}
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

const SecondFooter = () => {
  return (
    <footer className="bg-neutral-800 p-4">
      <div className="text-center font-body capitalize p-3 text-white">
        <p>
          For full details and disclosures, please{" "}
          <Link href="/disclaimer" className="underline text-blue-500">
            {" "}
            click here.
          </Link>
        </p>
        <p>© 2023 TradeKK. All rights reserved.</p>
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

export default SecondFooter;

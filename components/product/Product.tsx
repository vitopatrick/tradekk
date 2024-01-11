import Link from "next/link";
import React from "react";

const Product = ({
  img,
  title,
  desc,
  link,
}: {
  img: string;
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="shadow-md p-3 h-[600px] rounded-md border border-orange-50/30"
    >
      <div className="object-cover">
        <img src={img} alt={title} className="rounded-md  w-full" />
      </div>
      <div className="my-[2rem] space-y-3">
        <h1 className="font-head text-2xl font-bold">{title}</h1>
        <p className="font-body text-lg">{desc}</p>
      </div>
    </Link>
  );
};

export default Product;

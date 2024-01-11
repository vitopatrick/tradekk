import React from "react";
import Product from "../product/Product";

const products = [
  {
    img: "/img1.jpeg",
    title: "10,000 New Millionaires Project",
    paragraph:
      "a plan to show at LEAST 10,000 people how to make their first {or Next} Million in the stock market",
    link: "/new-millions",
  },
  {
    img: "/img2.png",
    title: "#1 Money-Making Strategy Right Now!",
    paragraph:
      "Quit day trading, buying stocks, and gambling on cryptos… This ONE trade could make you $1,000 (or more) every month, even as stocks, cryptos, and the economy crash",
    link: "/making-money",
  },
  {
    img: "/img3.png",
    title: "Our A.I. predicts the future prices of TSLA, NVDA, and AAPL",
    paragraph:
      "News stories are coming out left and right about how A.I. is going to change everything from how we learn to how we work to how we communicate to how we shop. Our A.I. predicts the future prices of TSLA, NVDA, and AAPL.",
    link: "/feature-prices",
  },
  {
    img: "/img4.png",
    title: "Project An-E",
    paragraph:
      "Project An-E — a breakthrough, A.I.-driven market forecasting system that accurately predicts stock prices one-month into the future.",
    link: "/ai-trade",
  },
];

const Products = () => {
  return (
    <div className="py-[4rem]">
      {/* header */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-head font-bold text-4xl md:text-5xl">
          Our Products
        </h2>
        <p className="font-body text-xl">
          Explore our high-quality products below.
        </p>
      </div>
      {/* product */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center my-[4rem]">
        {products.map((product, index) => (
          <Product
            title={product.title}
            desc={product.paragraph}
            img={product.img}
            key={index}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

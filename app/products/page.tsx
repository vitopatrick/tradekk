"use client";

import Footer from "@/components/footer/Footer";
import LandingModal from "@/components/modals/LandingModal";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/products/Products";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-500">
      <Navbar />
      <main className="md:w-[70%] mx-auto">
        <div className="text-center space-y-4">
          <h1 className="font-head text-3xl font-bold md:text-6xl">
            Keith Kaplan Says:
          </h1>
          <p className="font-body">
            Welcome, we have a couple of amazing products that we would love to
            give to you. Check them out and select that which fits your
            Financial Model needs.
          </p>
        </div>
        <Products />
      </main>
      <Footer />
      <LandingModal show={show} toggle={setShow} />
    </div>
  );
};

export default ProductsPage;

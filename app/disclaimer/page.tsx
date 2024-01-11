"use client";

import PromotionalDetails from "@/components/PromotionalDetails/PromotionalDetails";
import Disclosures from "@/components/disclosures/Disclosures";
import Navbar from "@/components/navbar/Navbar";
import Testimonials from "@/components/testimonials/Testimonials";
import { useChat } from "@/hooks/useChat";

const Disclaimer = () => {
  useChat();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-300/50">
        {/* container */}
        <main className="w-[90%] md:w-[70%] mx-auto bg-white min-h-full p-3">
          {/* header */}
          <div className="space-y-3">
            <h3 className="text-4xl md:text-5xl text-center font-head font-bold">
              {" "}
              Disclosures and Details
            </h3>
            <p className="font-body text-xl">
              Please read the following information carefully. This is not your
              typical, boilerplate disclaimer. And this document contains two
              distinct parts.
            </p>
          </div>
          <div className="space-y-4 my-4">
            <div className="font-body text-xl">
              Part 1:{" "}
              <span className="font-head font-bold">
                DISCLOSURES ABOUT OUR BUSINESS
              </span>{" "}
              contains critical information that will help you use our work
              appropriately and give you a far better understanding of how our
              business works – both the benefits it might offer you and the
              inevitable limitations of our products.
            </div>
            <div className="font-body text-xl">
              Part 2:{" "}
              <span className="font-head font-bold">PROMOTION DETAILS</span>{" "}
              contains facts, figures, explanations, annotations, full
              testimonials, and other resources about the promotional piece you
              just viewed. If you have questions or want more information about
              the marketing material, you just viewed, the first place to look
              is Part 2 of this document.
            </div>
          </div>
          {/* body */}
          <Disclosures />
          <PromotionalDetails />
          <Testimonials />
        </main>
        <p className="text-center font-body text-neutral-200">
          ©2023 TradeKK. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Disclaimer;

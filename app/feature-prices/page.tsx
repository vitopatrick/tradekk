"use client";

import VideoComp from "@/components/VideoComp/VideoComp";
import SecondFooter from "@/components/footer/SecondFooter";
import Hero from "@/components/hero/Hero";
import MillionsModal from "@/components/modals/MillionsModal";
import { useEffect, useState } from "react";

const AiTrading = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 3000);
  }, []);

  return (
    <>
      {/* Hero */}
      <Hero
        bgImage="https://aipowerevent.com/wp-content/uploads/sites/111/2023/04/bg_image-scaled.jpg"
        title="Breakthrough A.I. Just Predicted What the Stock Prices of Tesla, Nvidia, and Apple Will Be 30 Days from Now..."
        subTitle="TradeKK, one of the world’s most cutting-edge financial tech companies, launches Project An-E — an A.I.-driven market forecasting system that accurately predicts stock prices one month into the future."
      />
      {/* video component */}
      <VideoComp url="https://tradewithkeithkaplan.com/Our%20A.I%20Predicts%20the%20Future/video.mp4" />
      {/* footer */}
      <SecondFooter />
      <MillionsModal show={isActive} toggle={setIsActive} />
    </>
  );
};

export default AiTrading;

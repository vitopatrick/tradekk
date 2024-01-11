"use client";

import LandingHero from "@/components/LandingHero/LandingHero";
import Newsletter from "@/components/Newsletter/Newsletter";
import VideoComp from "@/components/VideoComp/VideoComp";
import Event from "@/components/event/Event";
import FirstBody from "@/components/firstbody/FirstBody";
import Footer from "@/components/footer/Footer";
import HeaderNewsLetter from "@/components/header/HeaderNewsLetter";
import Navbar from "@/components/navbar/Navbar";
import SecondBody from "@/components/secondbody/SecondBody";
import { useChat } from "@/hooks/useChat";

export default function Home() {
  useChat();
  return (
    <>
      <Navbar />
      <LandingHero />
      <VideoComp url="https://www.tradewithkeithkaplan.com/derbyinsight-main.mp4" />
      <HeaderNewsLetter />
      <FirstBody />
      <Newsletter />
      <SecondBody />
      <Newsletter />
      <Event />
      <Footer />
    </>
  );
}
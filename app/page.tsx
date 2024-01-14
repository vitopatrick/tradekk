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
      <VideoComp url="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/TradeSmith.mp4?alt=media&token=5dd3e8c5-723d-4b41-b7d0-847e84d1aa32" />
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

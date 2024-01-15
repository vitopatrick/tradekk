"use client";

import LandingHero from "@/components/LandingHero/LandingHero";
// import Newsletter from "@/components/Newsletter/Newsletter";
// import VideoComp from "@/components/VideoComp/VideoComp";
// import Event from "@/components/event/Event";
// import FirstBody from "@/components/firstbody/FirstBody";
import Footer from "@/components/footer/Footer";
// import HeaderNewsLetter from "@/components/header/HeaderNewsLetter";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/products/Products";
// import SecondBody from "@/components/secondbody/SecondBody";
import { useChat } from "@/hooks/useChat";

export default function Home() {
  useChat();
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-700">
      <Navbar />
      <LandingHero linkUrl="/ai-submit" />
      {/* <VideoComp url="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/TradeSmith.mp4?alt=media&token=5dd3e8c5-723d-4b41-b7d0-847e84d1aa32" /> */}
      <main className="md:w-[70%] mx-auto mx-auto">
        <Products />
      </main>
      {/* <HeaderNewsLetter />
      <FirstBody />
      <Newsletter />
      <SecondBody />
      <Newsletter />
      <Event /> */}
      <Footer />
    </div>
  );
}

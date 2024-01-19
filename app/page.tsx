"use client";

import LandingHero from "@/components/LandingHero/LandingHero";
// import Newsletter from "@/components/Newsletter/Newsletter";
import VideoComp from "@/components/VideoComp/VideoComp";
// import Event from "@/components/event/Event";
// import FirstBody from "@/components/firstbody/FirstBody";
import Footer from "@/components/footer/Footer";
// import HeaderNewsLetter from "@/components/header/HeaderNewsLetter";
// import Navbar from "@/components/navbar/Navbar";
// import Products from "@/components/products/Products";
// import SecondBody from "@/components/secondbody/SecondBody";
import { useChat } from "@/hooks/useChat";
import Link from "next/link";

export default function Home() {
  useChat();
  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        background: `url('https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/bg.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      {/* <div className="min-h-screen   absolute top-0 bottom-0 right-0 left-0 w-full bg-black/30"></div> */}
      {/* <Navbar />
      <LandingHero linkUrl="/ai-submit" /> */}
      <div className="md:w-[70%] mx-auto p-4 text-center space-y-5">
        <h4 className="md:text-5xl text-3xl font-bold font-head">
          Man who predicted the 2000, 2008, 2020, and 2022 market crashes issues
          urgent:
        </h4>
        <h1 className="font-head font-bold text-3xl">A.I. Code Red!</h1>
        <p className="font-body">
          A tidal wave is about to crash into the global economy. –
        </p>
        <p className="font-body underline">"businessinsider.com"</p>
      </div>
      <VideoComp url="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/InvestorPlace.mp4?alt=media&token=cb619a94-b3be-497b-9523-e6626a3764e1" />
      <p className="text-center font-body md:w-[40%] mx-auto text-sm my-5">
        Past performance is not a predictor of future results. All investing
        involves risk of loss and individual investments may vary. The examples
        provided may not be representative of typical results. Your capital is
        at risk when you invest — you can lose some or all of your money. Never
        risk more than you can afford to lose. For more details, see our full
        disclosures and details.
      </p>
      <div className="flex items-center justify-center my-3">
        <Link
          href="/join"
          className="bg-blue-500 rounded p-4 text-2xl font-bold font-head"
        >
          Join Now
        </Link>
      </div>
      {/* <main className="md:w-[70%]  mx-auto">
        <Products />
      </main> */}
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

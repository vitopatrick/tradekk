import VideoComp from "@/components/VideoComp/VideoComp";
import SecondFooter from "@/components/footer/SecondFooter";
import Hero from "@/components/hero/Hero";

const AiTrading = () => {
  return (
    <>
      {/* Hero */}
      <Hero
        bgImage="https://aipowerevent.com/wp-content/uploads/sites/111/2023/04/bg_image-scaled.jpg"
        title="The A.I. Predictive Power Event"
        subTitle="TradeKK launches Project An-E — a breakthrough, A.I.-driven market forecasting system that accurately predicts stock prices one month into the future."
      />
      {/* video component */}
      <VideoComp url="#" />
      {/* footer */}
      <SecondFooter />
    </>
  );
};

export default AiTrading;

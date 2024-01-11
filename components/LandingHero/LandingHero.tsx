import React from "react";

const LandingHero = () => {
  return (
    <div
      style={{
        background: `url('https://dam.investorplace.com/7MUXXAF6/at/xp65knwth9pwccpfjfgzm3hk/bg_image.png')`,
      }}
      className="h-auto"
    >
      <div className="flex justify-center items-center w-[90%] mx-auto relative">
        <div className="md:w-[20%]">
          <img
            src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2401TLW-AI-Earnings-Predictor/LN-grey-scale4.png"
            alt="image now"
          />
        </div>
        <div>
          <img
            src="https://dam.investorplace.com/7MUXXAF6/at/xw87vfwk5qh87tthphfj6frt/ai_earnings_predictor_summit_logo_dark.svg"
            alt="image now"
          />
        </div>
        <div className="md:w-[20%]">
          <img
            src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2401TLW-AI-Earnings-Predictor/landon_swan_transparent_greyscale4.png"
            alt="img noew"
          />
        </div>
        <div className="font-head text-white font-bold absolute top-1 text-center hidden md:block">
          URGENT SPECIAL EVENT: Tuesday, <br /> January 9th at 8 pm ET
        </div>
      </div>
    </div>
  );
};

export default LandingHero;

import React from "react";

const firstbody = [
  "If you’ve ever wanted to feel the joy of buying shares days before they soar higher on positive earnings news…",
  "Or the huge relief of selling shares right before they crash hard because of poor earnings…",
  "I recommend that you secure your spot for The A.I. Earnings Predictor Summit on Tuesday, January 9th at 8 pm ET.",
  "That’s when you'll discover the $5.4 million A.I. program that’s giving you the opportunity to predict earnings reports with a high degree of accuracy… just like hedge funds do.",
  "Just in the last year alone, this revolutionary machine learning program has produced a host of massive short-term winners, all within 5 days, including…",
  "This 102% gain on On Holding AG…  ",
];

const secondbody = [
  "Keep in mind, these huge short-term winners could give you the chance to get in and out of an uncertain market with some serious money... in a hurry.",
  "Plus, when you attend this highly anticipated event, you’ll also have the chance to access this revolutionary A.I. system’s #1 ranked A.I. earnings opportunity…",
  "This one stock sits at the top of both Landon and Louis’ research leaderboards.",
  "They’re both convinced that this one ticker is set to soar once its earnings numbers go public just days from now.",
  "The event is FREE to attend. And we’ll reveal how you can access this ticker during our urgent presentation.",
  "Be sure to reserve your spot on this page.",
  "Plus, in the days leading up to the event, Louis and Landon will be revealing the critical details of this strategy to get you prepared for the big night, including:",
];

const SecondBody = () => {
  return (
    <div className="space-y-4 md:w-[70%] mx-auto">
      {firstbody.map((para) => (
        <p className="font-body text-xl" key={para}>
          {para}
        </p>
      ))}
      <div>
        <img
          src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2401TLW-AI-Earnings-Predictor/gfx096-ONON-Chart.png"
          alt=""
        />
      </div>
      <p className="font-body text-xl">This 95% winner on Elf Beauty… </p>
      <div>
        <img
          src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2401TLW-AI-Earnings-Predictor/gfx097-ELF-Chart.png"
          alt=""
        />
      </div>
      <p className="font-body text-xl">And this 216% winner on Coinbase. </p>
      <div>
        <img
          src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2401TLW-AI-Earnings-Predictor/gfx098-COIN-Chart.png"
          alt=""
        />
      </div>
      {/* continue */}
      {secondbody.map((para) => (
        <p className="font-body text-xl" key={para}>
          {para}
        </p>
      ))}
      {/* outro */}
      <p className="font-body text-xl">
        So, pay close attention to your email inbox for these special updates
        about the event.
      </p>
      <p className="font-body text-xl">More to come!</p>
      <ul className="text-xl font-body list-disc space-y-4">
        <li>
          How hedge funds have been trading earnings season with a massive
          information edge over you...
        </li>
        <li>
          How advanced notice about future earnings can give you an opportunity
          to make big money and avoid big losses when earnings reports go
          public...
        </li>
        <li>
          How this A.I. tool can essentially give you a “sneak peek” at the
          earnings of 500 companies each quarter.
        </li>
      </ul>
      <div className="font-body text-xl">
        Keith Kaplan CEO, <br />
        TradeSmith
      </div>
    </div>
  );
};

export default SecondBody;

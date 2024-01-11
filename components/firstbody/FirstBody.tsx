import React from "react";

const firstbody = [
  "Hi, Keith Kaplan here, CEO of TradeSmith.",
  "For more than a decade, my team and I have developed sophisticated software and algorithms to spot market patterns before anyone else.",
  "We’ve spent millions of dollars and many thousands of man hours creating analytical tools to bring our subscribers an investing edge.",
  "Our work has made us one of the top financial data and analytics firms in the world.",
  "Yet I’m here to tell you today that the A.I. Earnings Predictor you’re about to discover rivals the best work we’ve ever done.",
  "That’s because it’s achieved something that millions of investors have chased after for decades: To accurately predict corporate earnings BEFORE they’re made public. ",
  "Look, it’s no secret that stocks make huge moves when they react to earnings news. ",
  "They haven’t had access to the one specific sliver of underground data that can actually give you a sense of corporate earnings ahead of time.",
  "Hedge funds have been tapping into this secretive data stream for years… while most mainstream investors don’t even know it exists.",
  "But that’s all about to change on Tuesday, January 9th at 8 pm ET.",
  "That’s when two investing titans and earnings season masters — Louis Navellier and Landon Swan — join forces to reveal a revolutionary artificial intelligence tool that puts this critically important underground data into your hands for the first time…",
  "Giving you the opportunity to trade AHEAD of the huge stock movements that happen when earnings are announced.",
  "Louis Navellier has been called “The Earnings Whisperer’’ by CNBC for his uncanny ability to accurately predict companies that are about to crush earnings expectations.",
  `He’s a billion-dollar money manager whose fund saw an astounding 4,000% return over 15 years, leading The New York Times to call him, "an icon among growth stock investors`,
  "Landon Swan has been trading earnings for more than two decades... and his research has been featured on Fox Business, CNBC, Barron’s, and Investor’s Business Daily. ",
  "He's a fintech developer who for the past decade has been knee-deep in the underground data stream the hedge funds have used to their advantage.",
  "And he’s recently developed a leading-edge machine learning tool that can put this vital earnings data into your hands for the first time.",
  "Landon and Louis have agreed to join forces to mark this momentous development. It’s a special event called The A.I. Earnings Predictor Summit.",
];

const FirstBody = () => {
  return (
    <div className="space-y-4 md:w-[70%] mx-auto">
      {firstbody.map((para) => (
        <p className="font-body text-xl" key={para}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default FirstBody;

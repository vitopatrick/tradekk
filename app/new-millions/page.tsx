import VideoComp from "@/components/VideoComp/VideoComp";
import Link from "next/link";

const points = [
  `Along with these five stock picks, you’ve just unlocked a secret number – considered by some to be the "most powerful number in finance" – that could help you radically improve your portfolio.`,
  `In fact, it's this secret number that could help you reach a goal many never reach… making your first million in the stock market.`,
  `This number is called the "Volatility Quotient" or VQ.`,
  `Which is why, after years of research and millions spent on development, our firm is officially launching our largest and most important venture yet, centered around this VQ breakthrough.`,
  `We're calling it the "10,000 New Millionaires Project."`,
  `Because we're convinced, that with the help of this powerful VQ signal, we can help show at least 10,000 people…
`,
  `With starting portfolios of all sizes, from $500 to $500,000…`,
  `How to reach that elusive seven-figure goal, much more quickly and with less risk than if they were to continue investing while following any other conventional approach.`,
  `And we want you to be a part of it.`,
  `Let me explain…`,
];

const NewMillions = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/RetirementCalculator/CalcMoney.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* container */}
      {/* header */}
      <div className="text-center bg-white/30 md:w-[65%] w-[90%] mx-auto p-4">
        <h1 className="md:text-4xl text-blue-500 text-3xl font-head font-bold">
          Congratulations On Accessing Your 5{" "}
          <p className="text-green-600">“Green Light” Stock Picks…</p>
        </h1>
        <h3 className="font-head font-bold text-2xl my-3">
          Be sure to check your email inbox to access this page again if you
          lose it.
        </h3>
      </div>
      <main className="md:w-[65%] w-[90%] mx-auto p-4 bg-white">
        {/* body */}
        <div className="space-y-4">
          {points.map((point) => (
            <p className="font-body text-xl" key={point}>
              {point}
            </p>
          ))}
        </div>
        <div className="font-body space-y-4">
          <h4 className="font-head text-2xl font-bold text-sky-700 text-center">
            Unlocked: The VQ Secret Number Revealed On <br /> All 5 “Green
            Light” Stocks
          </h4>
          <p className="text-xl">
            As you can see in the table above, each of your five “green light”
            stocks has a unique Volatility Quotient.
          </p>

          <p className="text-xl">
            In fact, using our algorithm, you can calculate a VQ score for every
            publicly traded company. And then, with the predictive power of this
            VQ number alone, you can actually determine whether that stock is a
            "BUY" (Green) or a "SELL" (Red).
          </p>

          <p className="text-xl">
            But that’s not all ‘the most important number in finance’ can help
            you do. Because the VQ also helps you avoid the #1 mistake we all
            make in investing… holding onto losers for too long and taking
            profits too soon.
          </p>
          <p className="text-xl">
            The VQ score could even help you add additional profits on the same
            investments you already own. Simply by showing you when there are
            buy and sell opportunities.
          </p>
          <p className="text-xl">This isn't just theory.</p>
          <p className="text-xl">
            As you can see in the video below, we've successfully demonstrated
            the power of VQ-scoring on real investor portfolios, by back-testing
            our signal against real trading results they had already made
          </p>
          <p className="text-xl">
            The outcome? After applying our VQ signal, we were able to show how
            they could have added hundreds of thousands of dollars to their
            gains… on the same shares, over the same time periods.
          </p>
          <p className="text-xl">
            More than one VQ-user has written to tell us how the signal helped
            them reach "millionaire status."* We’d like to show you how to get
            there too. Take a look at the video below.
          </p>
          <p className="text-xl">You’ll see how anybody can do this…</p>
        </div>
        <div>
          {/* video*/}
          <VideoComp url="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/million.mp4?alt=media&token=6ae34183-f26f-4df2-a3e0-78895cf87483" />
          <Link
            href="/trading-details"
            className="font-head text-green-700 text-center block underline"
          >
            Click Here to Ready Trade Strategy
          </Link>
        </div>
        <hr />
        {/* footer */}
        <div className="my-3">
          <p className="font-body text-center">
            The investment results described in these testimonials are not
            typical. Investing in securities carries a high degree of risk; you
            may lose some or all of the investment.
          </p>
        </div>
        <div className="text-center font-body capitalize p-3">
          <p>© 2023 TradeKK. All rights reserved.</p>
          <p>
            <Link href="/" className="underline text-blue-500">
              Terms of use
            </Link>
            |
            <Link href="/" className="underline text-blue-500">
              Privacy Policy
            </Link>
          </p>
        </div>
        {/* end of footer */}
      </main>
      {/* end of container */}
    </div>
  );
};

export default NewMillions;

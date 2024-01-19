import Form from "@/components/order-form/Form";

const firstWords = [
  "Hi, Eric here again.",
  `As I revealed today, we’ve reached a new phase of the A.I. Revolution.`,
  `The initial exuberance about this game-changing technology is over… and we’ve entered the realization phase as it goes mainstream.`,
  `Very soon, hundreds of millions of people could find their livelihoods threatened as A.I. reduces or eliminates their jobs`,
  `That means millions of Americans could fall into poverty and would have to depend on Universal Basic Income.`,
  `But the few who know how to take advantage of the realization phase of the A.I. Revolution could make massive gains.`,
  `And as a result, the wealth gap will widen in a way we've never seen before.`,
  "If you act now and make the right moves, you could land on the right side of this wealth gap…",
  "Giving you and your family the chance to thrive in the age of A.I...",
  "To help you prepare, I've created a set of special reports that outline all the crucial steps you need to take...",
  "You'll gain immediate access to everything as soon as you join my flagship research service today — and remember, it comes with a 100% satisfaction guarantee.",
];

const catalogs = [
  {
    id: 1,
    main: "Urgent Report",
    title: "The 3 ‘A.I. Code Red’ Stocks You Must Own Today",
    about:
      "Inside this report are the top three stocks perfectly positioned to deliver astronomical returns as we enter phase two of the A.I. Revolution.",
    image:
      "https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx057.png",
  },
  {
    id: 2,
    main: "Bonus Report #1",
    title: "#1 The A.I. Moonshots",
    about:
      "This report contains all the details about three small-cap stocks I’ve identified with the most upside potential as A.I. radically changes the landscape in the months ahead.",
    image:
      "https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx057.png",
  },
  {
    id: 3,
    main: "Bonus Report #2",
    title: "The A.I. Dominators",
    about:
      "You’ll want to consider investing in these three stocks today because of their immediate potential, and for their potential over the longer term as A.I. continues to evolve.",
    image:
      "https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx064.png",
  },
  {
    id: 4,
    main: "Bonus Report #3",
    title: "The Top 3 A.I. Losers: The “Landmine Stocks” You Must Avoid",
    about:
      "If you have ANY of these three stocks in your portfolio today, you could seriously regret it tomorrow.",
    image:
      "https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx069.png",
  },
];

const lastWords = [
  "We're so certain that Fry's Investment Report will help grow your wealth that we're offering a full 90-day satisfaction-guaranteed trial.",
  `If, at any point during that period, you feel you're not receiving invaluable insights or simply change your mind for any reason, just contact our customer service team to cancel your subscription.`,
  `We'll issue you a full refund, no questions asked, and you'll get to keep everything you receive as a subscriber at no extra cost.`,
  `But you need to act now… that’s why I’ve issued this A.I. Code Red.`,
  `Because A.I. offers a shot at the kind of explosive gains early investors captured at the beginning of other eras of “creative destruction...”`,
  `When stocks like Netflix rocketed up 29,900%...`,
  `And Apple exploded an amazing 72,000%...`,
  "While early investors in Amazon were able to realize incredible 245,000% gains.",
  "I believe we can do even better as we move into this next phase of the A.I. Revolution…",
  "Because the potential for exponential growth in A.I. stocks is unlike anything we've seen before.",
  "But if you don't act now, you could miss out on all these astronomical A.I. gains…",
  "Heck… you could miss out on the opportunity to secure your financial future and protect your family from the inevitable wealth gap that’s set to grip America…",
  "So secure your financial future by joining Fry's Investment Report today.",
  "Just fill out the easy form below, and I’ll rush you everything you need to get started today!",
  "Thank you for your time today. I’ll see you on the inside.",
];

const JoinPage = () => {
  return (
    <div>
      {/* hero */}
      <div
        style={{
          background: `url('https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/bg.jpg')`,
          backgroundPosition: "center center",
        }}
        className="h-[20vh] relative"
      >
        <div className="absolute w-full bg-black/30 bottom-0 top-0 h-full flex items-center justify-center">
          <img
            src="https://dam.investorplace.com/7MUXXAF6/at/6m27c6jp7qjk77w5xqjq5hfh/Investment_Report_dark.svg"
            alt=""
          />
        </div>
      </div>

      {/* container */}
      <main className="md:w-[40%] p-4 mx-auto">
        {/* header one */}
        <div className="font-head font-bold text-center gap-4 text-2xl md:text-4xl space-y-4 my-3">
          <h2>Congratulations!</h2>
          <h3>
            You’ve Taken the First Step Towards Securing Your Financial Future
            During this A.I. Code Red!
          </h3>
        </div>
        {/* image */}
        <div>
          <img
            src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx079.png"
            alt=""
          />
        </div>
        {/* paragraphs */}
        <div className="space-y-3">
          {firstWords.map((words) => (
            <p className="font-body text-xl" key={words}>
              {words}
            </p>
          ))}
        </div>
        {/* catalog */}
        <div className="font-bold font-head text-2xl my-4">
          {/* header */}
          <h1 className="text-center">
            Your Exclusive Membership Offer Includes:
          </h1>
          <div className="space-y-2">
            <h3>A Full Year of Fry's Investment Report</h3>
            <h3 className="text-green-600">
              A Full Year of Fry's Investment Report
            </h3>
            <p className="font-body text-base">
              Every month, I’ll send you a brand-new recommendation, along with
              my analysis. I’ll also show you how to profit from the new tech
              breakthroughs and megatrends sweeping our world with the same sort
              of recommendations that have given my readers the chance to bag
              gains like 1,622% in VLO, 5,940% in WBC.AX, and 11,237% in
              Mint.BK.
            </p>
          </div>
          {/* catalogs */}
          <div className="my-4 space-y-6">
            {catalogs.map((catalog) => (
              <div
                className="flex items-center justify-between border-b-2"
                key={catalog.id}
              >
                <div className="space-y-4">
                  <span className="bg-blue-600 p-2 text-base text-white rounded inline-block">
                    {catalog.main}
                  </span>
                  <h3>{catalog.title}</h3>
                  <p className="font-body text-base">{catalog.about}</p>
                </div>
                <div>
                  <img src={catalog.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* last section */}
        <div>
          <div>
            <img
              src="https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/ipm/2401EFIR-AI+Code+Red/gfx079.png"
              alt=""
            />
          </div>
          {/* header */}
          <div className="text-center font-bold font-head text-2xl space-y-3">
            <h2>That’s a nearly $1,000 Value for just $49 Today!</h2>
            <p className="font-body">[less than $1 a week!]</p>
            <h2>And it comes with my ironclad promise to you.</h2>
          </div>
          {/* paragraphs */}
          <div className="space-y-3 my-5">
            {lastWords.map((words) => (
              <p className="font-body text-xl" key={words}>
                {words}
              </p>
            ))}
          </div>
        </div>
        <Form />
      </main>
    </div>
  );
};

export default JoinPage;

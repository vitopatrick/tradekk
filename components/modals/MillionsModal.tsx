const content = [
  `If you’re at or near retirement, this is something you can’t afford to miss.`,
  `Keep watching this presentation…`,
  `Because, Keith Kaplan, CEO of TradeKK, is revealing the company’s breakthrough, A.I.-driven stock forecasting known as An-E (pronounced Annie, short for Analytical Engine).`,
  `Its predictions are so accurate, it can forecast next month’s stock prices, today…`,
  `The ultimate tool that could help you make huge gains and avoid big losses.`,
  `This is a complete retirement gamechanger!`,
  `And you can read a full transcript by clicking the button below.`,
];

const MillionsModal = ({ show, toggle }: { show: boolean; toggle: any }) => {
  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 h-screen flex items-center justify-center">
          <div className="bg-white border border-blue-700 md:w-[50%] mx-auto p-4 space-y-6">
            <h2 className="font-head text-4xl text-center font-bold">
              Don’t click off this page…
            </h2>
            <div className="space-y-4 my-3">
              {content.map((c) => (
                <p className="font-body text-center text-xl" key={c}>
                  {c}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => toggle(!show)}
                className="bg-purple-700 p-4 font-head text-white font-bold rounded-md"
              >
                Continue Video
              </button>
              <button
                onClick={() => toggle(!show)}
                className="bg-blue-700 p-4 font-head text-white font-bold rounded-md"
              >
                Read Transcript
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MillionsModal;

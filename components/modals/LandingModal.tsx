import { X } from "lucide-react";
import VideoComp from "../VideoComp/VideoComp";

const LandingModal = ({ show, toggle }: { show: boolean; toggle: any }) => {
  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 h-screen flex items-center justify-center">
          <div className="bg-white md:w-[35%] mx-auto p-4 space-y-6">
            <div>
              <VideoComp url="https://tradewithkeithkaplan.com/welcome.mp4" />
            </div>
            <h2 className="font-head text-4xl text-center font-bold">
              Keith Kaplan sharing own advice for 2024.
            </h2>
            <p className="font-body text-center">
              Keith’s big takeaway is that volatility is here to stay, whether
              stocks are trending up or down. To make the most of next year, it
              won’t be as simple as blindly buying and holding. You’ll have to
              keep risk at the top of your mind.
            </p>
            <p className="font-body text-center">
              Setting stop losses on your positions, knowing when an uptrend
              turns into a downtrend, and understanding how much capital you
              should put into any one position. That’s Keith’s focus, and these
              are key techniques to maximize each investment by removing
              emotions from your process.
            </p>
            <p className="font-body text-center">
              Continue inside and check out Keith’s different investing project
              videos, It’ll be your guiding light for investing with TradeKK in
              2024...
            </p>

            <div>
              <button onClick={() => toggle(!show)}>
                <X strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingModal;

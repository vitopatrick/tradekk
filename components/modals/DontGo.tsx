import { X } from "lucide-react";
import React from "react";

const DontGo = ({ show, toggle }: { show: boolean; toggle: any }) => {
  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 h-screen flex items-center justify-center">
          <div className="bg-white border border-blue-700 md:w-[50%] mx-auto p-4 space-y-6">
            <h2 className="font-head text-4xl text-center text-blue-600 font-bold">
              DON’T GO ANYWHERE!
            </h2>
            <p className="font-body text-center">
              Keith is about to make hundreds of dollars, instantly… and then
              show YOU how to do the exact same as often as you want with one
              easy-to-follow strategy.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => toggle(!show)}
                className="bg-green-700 p-4 font-head text-white font-bold rounded-md"
              >
                Keep Watching
              </button>
              <button
                onClick={() => toggle(!show)}
                className="bg-blue-700 p-4 font-head text-white font-bold rounded-md"
              >
                Read Transcript
              </button>
            </div>
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

export default DontGo;

"use client";

import PaymentComponents from "@/components/payments/PatmentComponents";
import { useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const price = params.get("price");
  return (
    <div className="min-h-screen bg-orange-50 p-4">
      {/* card */}
      <div className="bg-white rounded p-4 md:w-[50%] mx-auto shadow-md">
        <div>
          <img src="/logo.png" alt="" />
          <div className="space-y-2 mb-5 mt-3">
            <h4 className="font-head font-bold text-2xl">{title}</h4>
            <h4 className="font-head font-bold text-3xl">{price}</h4>
          </div>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name On Card"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
            />
            <input
              type="text"
              placeholder="CVC code"
              className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
            />
          </div>

          <button className="p-4 font-head text-white bg-orange-500 rounded font-bold w-full">
            Submit Secure Payment
          </button>

          <div>
            <PaymentComponents />
          </div>

          <div className="font-body text-center">
            Payment method should be credit card or write support for ACH/wire
            transfer
            <p>
              Contact{" "}
              <span className="font-bold underline">
                support@tradeswithkeithkaplan.com
              </span>{" "}
              for further support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

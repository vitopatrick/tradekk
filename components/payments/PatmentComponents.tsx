"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const methods = ["Crypto", "ACH Transfers", "Wire Transfer"];

export default function PaymentComponents() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  function openModal(e: any, id: string) {
    e.preventDefault();
    setId(id);
    setIsOpen(true);
  }

  return (
    <>
      <div>
        {/* container */}
        <div className="p-2">
          {/* header */}
          <div>
            <h3 className="font-head text-center font-bold text-lg underline">
              Choose Alternative Payment Methods
            </h3>
            <div className="flex flex-col md:flex-row my-3 gap-4 justify-center items-center">
              {methods.map((method) => (
                <Button
                  key={method}
                  onClick={(e) => openModal(e, method)}
                  variant={"outline"}
                  className="font-body w-full"
                >
                  {method}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailsModal open={isOpen} method={id} close={setIsOpen} />
    </>
  );
}

const DetailsModal = ({ open, close, method }: any) => {
  return (
    <div
      className={
        open
          ? "fixed p-3 flex items-center justify-center bg-black/30 w-full h-full top-0 bottom-0 left-0 right-0"
          : "hidden"
      }
    >
      <div className="bg-white p-3 rounded-md font-body mx-auto  md:w-[60%]">
        <button onClick={() => close(false)}>
          <X />
        </button>
        {method == "Crypto" && <Crypto />}
        {method == "ACH Transfers" && <ACH />}
        {method == "Wire Transfer" && <WireTransfer />}
      </div>
    </div>
  );
};

const Crypto = () => {
  return (
    <div>
      <h4 className="font-head font-bold underline text-xl text-center">
        Bitcoin Address
      </h4>
      <div className="text-xl font-mono text-center bg-neutral-200/30 rounded my-3 p-3 break-words">
        <h4>bc1qz7p9xvpavtzqt7dqtcedltwxhz4jeh97jvdpqk</h4>
      </div>
      <div>
        <img src="/barcode.jpeg" alt="" />
      </div>
    </div>
  );
};

const ACH = () => {
  return (
    <div className="[&_h3]:font-head [&_h3]:font-bold space-y-6">
      <div>
        <p className="font-head font-bold text-2xl">JP Morgan Chase Bank</p>
      </div>
      <div>
        <h3 className="font-bold font-head">Account Number</h3>
        <p>558713825</p>
      </div>
      <div>
        <h3>ACH Routing Number</h3>
        <p>071000013</p>
      </div>
      <div>
        <h3>Bank Address</h3>
        <p>7501 Lemont Road L1 Woodridge, IL 60517-2653</p>
      </div>
    </div>
  );
};
const WireTransfer = () => {
  return (
    <div className="[&_h3]:font-head [&_h3]:font-bold space-y-6">
      <div>
        <p className="font-head font-bold text-2xl">JP Morgan Chase Bank</p>
      </div>
      <div>
        <h3 className="font-bold font-head">Account Number</h3>
        <p>558713825</p>
      </div>
      <div>
        <h3>Wire routing Number</h3>
        <p>021000021</p>
      </div>
      <div>
        <h3>Bank Address</h3>
        <p>7501 Lemont Road L1 Woodridge, IL 60517-2653</p>
      </div>
    </div>
  );
};

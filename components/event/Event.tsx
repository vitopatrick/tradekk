import { Calendar, Computer, DollarSign } from "lucide-react";
import React from "react";

const eventDetails = [
  {
    title: "when",
    subTitle: "Tuesday,January 9th at 8 pm ET",
    icon: <Calendar size={60} />,
  },
  {
    title: "Where",
    subTitle: "www.tradeswithkeithkaplan.com",
    icon: <Computer size={60} />,
  },
  {
    title: "Cost",
    subTitle: "Free",
    icon: <DollarSign size={60} />,
  },
];

const Event = () => {
  return (
    <div className="bg-neutral-800 p-4 text-white">
      {/* container */}
      <div className="w-[90%] mx-auto p-3 grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center">
        {eventDetails.map((details) => (
          <div
            className="flex flex-col items-center justify-center"
            key={details.title}
          >
            {details.icon}
            <div>
              <h4 className="font-head capitalize bold text-xl text-center">
                {details.title}
              </h4>
              <p className="font-body text-center">{details.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;

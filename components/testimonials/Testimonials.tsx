import { testimonies } from "@/lib/testimonies";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      {/* container */}
      <div className="p-4 md:p-8">
        {/* header */}
        <div>
          <h4 className="font-head font-bold text-xl">Testimonials</h4>
        </div>
        {/* testimonies */}
        <div className="bg-sky-100 p-3 space-y-6 my-4">
          {testimonies.map((testimony) => (
            <div
              key={testimony.author}
              className="flex flex-col items-center justify-center gap-3 text-center"
            >
              <p className="text-xl font-body text-sky-800 leading-loose">
                {testimony.testimony}
              </p>
              <h2 className="font-head font-bold">{testimony.author}</h2>
            </div>
          ))}
        </div>
        {/* end of container */}
      </div>
    </div>
  );
};

export default Testimonials;

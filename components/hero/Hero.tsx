import React from "react";

const Hero = ({
  bgImage,
  title,
  subTitle,
}: {
  bgImage: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <header
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="md:h-[50vh] h-[80vh] relative"
    >
      {/* container */}
      <div className="absolute flex gap-5 items-center justify-center flex-col w-full h-full top-0 bottom-0 left-0 right-0 bg-black/10 ">
        <h1 className="md:text-4xl text-2xl text-center md:w-[60%] mx-auto font-head font-bold text-white">
          {title}
        </h1>
        <p className="font-body text-xl text-white w-full md:w-[40%] mx-auto text-center">
          {subTitle}
        </p>
        {/* end of container */}
      </div>
    </header>
  );
};

export default Hero;

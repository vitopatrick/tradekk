import React from "react";

const VideoComp = ({ url = "/feature-prices.mp4" }: { url: string }) => {
  return (
    <div className=" p-4 flex items-center justify-center">
      <video width="800px" height="800px" controls autoPlay>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComp;

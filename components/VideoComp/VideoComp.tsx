"use client";

import React from "react";

declare global {
  interface Window {
    jivo_api: any;
  }
}

const VideoComp = ({ url = "/feature-prices.mp4" }: { url: string }) => {
  return (
    <div className=" p-4 flex items-center justify-center  h-full">
      <video
        width="800px"
        onPlay={() => {
          window.jivo_api.open();
        }}
        controls
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComp;

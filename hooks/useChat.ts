import { useEffect } from "react";

export const useChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/MQCwmFLKWf";

    document.body.appendChild(script);
  }, []);
};

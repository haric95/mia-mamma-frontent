import { useCallback, useEffect, useState } from "react";

const BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handler = useCallback(() => {
    if (isMobile && window.innerWidth > BREAKPOINT) {
      setIsMobile(false);
    } else if (!isMobile && window.innerWidth <= BREAKPOINT) {
      setIsMobile(true);
    }
  }, [isMobile]);

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile;
};

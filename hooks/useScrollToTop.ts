import { useEffect } from "react";

export default function useScrollToTop(time: number) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // if (typeof window !== "undefined") {
      //   window.scrollTo({ top: 0 });
      // }
      window.scrollTo({ top: 0 });
    }, time);
    return () => clearTimeout(timeout);
  }, []);
}

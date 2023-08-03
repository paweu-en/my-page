import { useEffect } from "react";

export default function useScrollToTop(time: number) {
  useEffect(() => {
    const timeout = setTimeout(() => window.scrollTo(0, 0), time);
    return () => clearTimeout(timeout);
  }, []);
}

import { useEffect } from "react";

export default function scrollToTop() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // if (typeof window !== "undefined") {
      //   window.scrollTo({ top: 0 });
      // }
      window.scrollTo({ top: 0 });
    }, 750);
    return () => clearTimeout(timeout);
  }, []);
}

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollToTop(time: number) {
  const path = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (path !== "/") document.body.classList.add("test");
      window.scrollTo(0, 0);
    }, time);
    return () => clearTimeout(timeout);
  }, []);
}

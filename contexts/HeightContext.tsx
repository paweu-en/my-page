import { usePathname } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type HeightProviderType = {
  children: ReactNode;
};

const debounce = (func: () => void, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const HeightContext = createContext<number>(0);

export const useHeight = () => useContext(HeightContext);

export const HeightProvider = ({ children }: HeightProviderType) => {
  const [height, setHeight] = useState(0);
  const timeout = 500;
  const path = usePathname();

  const getHeight = useCallback(() => {
    setHeight(document.documentElement.scrollHeight);
  }, [height]);

  const debouncedSetHeight = debounce(getHeight, timeout);

  useEffect(() => {
    if (path === "/") {
      debouncedSetHeight();
      window.addEventListener("resize", debouncedSetHeight);
      console.log(height);
    } else {
      const page = document.querySelector(".page-height");

      (page as HTMLDivElement)?.style.setProperty("height", `${height}px`);
      setTimeout(() => {
        (page as HTMLDivElement)?.style.removeProperty("height");
      }, 1500);
    }
    return () => window.removeEventListener("resize", debouncedSetHeight);
  });

  return (
    <HeightContext.Provider value={height}>{children}</HeightContext.Provider>
  );
};

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type IntroProviderType = {
  children: ReactNode;
};

type IntroContextType = boolean;

const IntroContext = createContext<IntroContextType>(true);

export const useIntro = () => useContext(IntroContext);

export const IntroProvider = ({ children }: IntroProviderType) => {
  const [intro, setIntro] = useState(true);
  console.log("🚀 ~ file: IntroContext.tsx:13 ~ IntroProvider ~ intro:", intro);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
      // console.log(
      //   "🚀 ~ file: IntroContext.tsx:13 ~ IntroProvider ~ intro:",
      //   intro
      // );
    }, 1500);

    return () => {
      clearTimeout(timeout);
      // console.log(
      //   "🚀 ~ file: IntroContext.tsx:24 ~ useEffect ~ timeout:",
      //   timeout
      // );
    };
  }, []);

  return (
    <IntroContext.Provider value={intro}>{children}</IntroContext.Provider>
  );
};

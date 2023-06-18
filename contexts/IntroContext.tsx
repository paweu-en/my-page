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

const IntroContext = createContext<boolean>(true);

export const useIntro = () => useContext(IntroContext);

export const IntroProvider = ({ children }: IntroProviderType) => {
  const [intro, setIntro] = useState(true);
  // console.log("🚀 ~ file: IntroContext.tsx:13 ~ IntroProvider ~ intro:", intro);

  useEffect(() => {
    const timeout = setTimeout(() => setIntro(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <IntroContext.Provider value={intro}>{children}</IntroContext.Provider>
  );
};

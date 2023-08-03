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

  useEffect(() => {
    const timeout = setTimeout(() => setIntro(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <IntroContext.Provider value={intro}>{children}</IntroContext.Provider>
  );
};

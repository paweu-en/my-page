import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;

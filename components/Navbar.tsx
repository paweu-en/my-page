import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavbarTypes = {
  font: string;
};

const Navbar = ({ font }: NavbarTypes) => {
  const path = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1.5, ease: "easeInOut" }}
      className={`${font} navbar text-white text-sm lg:text-base fixed w-full h-[100px] p-6 bg-transparent flex justify-between items-center z-20`}>
      <h1 className=''>Paweł Naradowski</h1>
      <nav className='max-[320px]:flex items-end flex-col'>
        <Link
          href='/'
          scroll={false}
          className={`ml-5 transition-opacity duration-500 ${
            path === "/"
              ? "cursor-default pointer-events-none"
              : "opacity-50 hover:opacity-100"
          }`}>
          Index
        </Link>
        <Link
          href='/about'
          scroll={false}
          className={`ml-5 transition-opacity duration-500 ${
            path === "/about"
              ? "cursor-default pointer-events-none"
              : "opacity-50 hover:opacity-100"
          }`}>
          About
        </Link>
      </nav>
    </motion.div>
  );
};
export default Navbar;

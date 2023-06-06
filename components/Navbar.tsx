import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const path = usePathname();

  return (
    <motion.div className='text-sm xl:text-base fixed w-full h-[100px] p-6 bg-transparent mix-blend-difference flex justify-between items-center z-10'>
      <h1 className='text-white'>Paweł Naradowski</h1>
      <nav>
        <Link
          href='/'
          scroll={false}
          className={`ml-5 text-white transition-opacity duration-500 delay-500 ${
            path === "/" ? "opacity-50 cursor-default pointer-events-none" : ""
          }`}>
          Index
        </Link>
        <Link
          href='/about'
          scroll={false}
          className={`ml-5 text-white transition-opacity duration-500 delay-200 ${
            path === "/about"
              ? "opacity-50 cursor-default pointer-events-none"
              : ""
          }`}>
          About
        </Link>
      </nav>
    </motion.div>
  );
};
export default Navbar;

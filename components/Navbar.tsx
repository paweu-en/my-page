import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const path = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
      className='text-sm xl:text-base fixed w-full h-[100px] p-6 bg-transparent mix-blend-difference flex justify-between items-center z-20'>
      <h1 className='text-white'>Paweł Naradowski</h1>
      <nav>
        <Link
          href='/'
          scroll={false}
          className={`ml-5 text-white transition-opacity duration-500 ${
            path === "/"
              ? "cursor-default pointer-events-none"
              : "opacity-50 hover:opacity-100"
          }`}>
          Index
        </Link>
        <Link
          href='/about'
          scroll={false}
          className={`ml-5 text-white transition-opacity duration-500 ${
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

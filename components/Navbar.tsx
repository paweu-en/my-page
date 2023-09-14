import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navbarAnimation } from "@/utils/animations";

const navigation = [
  { name: "Index", path: "/" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <motion.div
      variants={navbarAnimation()}
      initial='init'
      animate='fadeIn'
      className={`navbar text-white text-sm lg:text-base fixed w-full h-[100px] p-6 bg-transparent flex justify-between items-center z-20 select-none`}>
      <h1 className=''>Paweł Naradowski</h1>
      <nav className='max-[320px]:flex items-end flex-col'>
        {navigation.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            scroll={false}
            className={`ml-5 transition-opacity duration-500 ${
              path === link.path
                ? "cursor-default pointer-events-none"
                : "opacity-50 hover:opacity-100"
            }`}>
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};
export default Navbar;

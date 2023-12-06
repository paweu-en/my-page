import Link from "next/link";

const SecretButton = () => {
  return (
    <Link
      href='/wp'
      className='absolute top-0 w-10 h-5 -translate-x-1/2 bg-black mix-blend-difference left-1/2 z-[9999999]'
    />
  );
};
export default SecretButton;

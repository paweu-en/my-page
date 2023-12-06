import Image from "next/image";
import woman from "@/public/woman.jpg";
import PageTransition from "@/components/PageTransition";

const WordpressTest = () => {
  return (
    <PageTransition bgColor='bg-red' textColor='text-white'>
      <div className='w-full h-screen'>
        <span>w</span>
        <span> </span>
        <span>p</span>
        {/* <Image
          src={woman}
          alt='My picture'
          fill
          // width={1000}
          // height={1500}
          // class
          // className='opacity-0'
          placeholder='blur'
        /> */}
      </div>
    </PageTransition>
  );
};
export default WordpressTest;

import { Dispatch, SetStateAction, useState } from "react";

type BodyColorSwitchType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
};

const BodyColorSwitch = ({ theme, setTheme }: BodyColorSwitchType) => {
  return (
    <button
      onClick={() => setTheme((prev) => !prev)}
      className='fixed bottom-0 right-0 z-10 px-5 py-2 mb-5 mr-5 bg-emerald-500 rounded-3xl'>
      Now is {theme ? "black" : "white"}!
    </button>
  );
};
export default BodyColorSwitch;

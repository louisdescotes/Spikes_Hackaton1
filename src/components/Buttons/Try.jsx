import React from 'react';

export default function Try({ children }) {
  return (
    <button className="flex justify-center items-center rounded-lg py-[15px] px-[20px] gap-[10px] bg-[#314EE7] text-white dm-bold w-full md:w-[145px]">
      {children}
    </button>
  );
}

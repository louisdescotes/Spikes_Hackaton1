import React from "react";
import NewPlatform from "../components/Buttons/NewPlatform";
import EmailInput from "../components/Buttons/EmailInput";
import Try from "../components/Buttons/Try";

export default function Landing() {
  return (
    <main className=" overflow-hidden text-center">
      <img className="absolute -z-10 w-max" src="/src/assets/Images/Grid.png" alt=""/>

      <div className="absolute -top-40 right-32 -z-20 rounded-full blur-custom bg-[#92C4FE] w-[430px] h-[430px]"></div>
      <div className="absolute -top-20 -left-15 -z-20 rounded-full blur-custom bg-[#FEA49280] w-[550px] h-[550px]"></div>

      <section className="py-16">
        <NewPlatform />
        <aside className="w-full flex flex-col justify-center items-center">
          <div className=" w-10/12 flex flex-col gap-5 justify-center items-center py-6">
            <h1 className="text-5xl dela-regular ">Best way to sell your digital product</h1>
            <p className="text-sm dm-medium text-[#626262] w-7/12">
              Go from Zero to Hero with simple platform that helps creators like
              you sell their digital products online.
            </p>
          </div>
          <div className="flex gap-2 w-7/12 justify-center">
            <EmailInput />
            <Try>
            Try it out
            </Try>
          </div>
          <div className="flex gap-[10px] my-4 justify-center">
            <img src="/src/assets/Images/profilUser.png" alt="" />
            <div className="w-3/6 "> 
            <p className="text-[#00000080] text-[10px] dm-medium text-start" >
              <span className="text-[#000000]">More than 100+ </span>users are selling their products online
              with simple & easy ways
            </p>
            </div>
            
          </div>
        </aside>
      </section>
    </main>
  );
}

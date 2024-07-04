import React from "react";

export default function CardThree() {
  return (
    <article className="relative flex-1 bg-white rounded-[10px] w-fit h-full px-4 py-6">
      <section className="flex flex-col gap-4">
        <div className="w-max h-12 flex flex-col gap-[26px] ">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">$ 7,283k</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.808 0.937012H0.337372L6.07267 7.15025L11.808 0.937012Z"
                fill="#8DDD2B"
              />
            </svg>
          </div>
          <div className="relative">
          <div className="absolute bg-[#EEEEEF] p-2 right-5 -top-10 rounded-[9.56px] rounded-tl-[9.56px] rounded-br-[0px]">
            <span className="text-base ">+10%</span>
          </div>
            <svg
              width="273"
              height="87"
              viewBox="0 0 273 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 28.1532L5.18966 32.5358C8.39797 36.7546 14.8706 45.7657 21.2126 52.1963C27.5732 58.8726 33.8966 62.9686 40.4251 54.3671C46.7672 45.7657 53.1092 23.6477 59.6377 23.7705C65.9611 23.6477 72.3217 45.7657 78.6638 52.1963C85.1363 58.8726 91.5343 49.8616 97.8763 54.3671C104.33 58.8726 110.747 76.0755 117.089 69.6449C123.506 62.9686 129.959 32.6587 136.301 34.7067C142.699 36.7546 149.172 52.74 155.514 70.0658C161.875 87.5554 168.198 87.5554 174.727 76.6193C181.955 66.1514 185.484 62.0566 193.258 56.2911C201.458 51.0002 206.623 58.8726 212.965 49.9845C219.438 41.2602 225.836 15.0462 232.178 10.6636C238.632 6.44476 245.048 23.6477 251.39 25.9823C257.807 28.1532 264.261 15.0462 267.432 8.49272L270.603 1.93924"
                stroke="#8DDD2B"
                stroke-width="3.82353"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </article>
  );
}
import React from "react";
import FeaturesCard from "../components/FeaturesCard";
import CardOne from "../components/Cards/CardOne";

export default function Features() {
  return (
    <section className="flex flex-col gap-14 w-full relative">

      <div className=" hidden md:flex absolute -right-24 top-20 h-24 items-center justify-center flex gap-3 border border-[#0000000D] bg-[#FDFDFD] rounded-lg p-3 w-fit shadow-custom-light">
        <div>
          <p className="text-[#314EE7] font-bold text-lg">Try for free</p>
          <p className="text-[#242424] font-semibold text-sm">
            *No credit card required
          </p>
        </div>
        <div className="flex justify-center items-center bg-[#314EE7] rounded-full w-14 h-14">
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.926392 6.57024H14.1615L11.0125 9.67222L12.3488 11L17.9264 5.50572L12.3488 0L11.0125 1.32778L14.1499 4.40687H0.926392V6.57024Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="hidden md:flex absolute -right-64 top-60 -z-10">
        <CardOne />
      </div>

      <h3 className="text-4xl dela-regular">Features</h3>
      <aside className="w-4/5">
        <div className="grid grid-cols-2 grid-rows-2 gap-y-12  w-full">
          <FeaturesCard
            img="Dollar.png"
            title="Save time & Reduce cost"
            p="Building your own online store, shopping cart, checkout, and licensing is time-consuming "
          />

          <FeaturesCard
            img="Boite.png"
            title="More features"
            p="We simplify all that by combining all of the features and solutions you need to sell "
          />

          <FeaturesCard
            img="Love.png"
            title="Sell your popular product more"
            p="Designed from the ground up to be easy to use and quick to set up for sellers "
          />

          <FeaturesCard
            img="Internet.png"
            title="Sell it across the Globe"
            p="Expand into new global markets with ease when you automatically display popular pricing "
          />
        </div>
      </aside>
    </section>
  );
}

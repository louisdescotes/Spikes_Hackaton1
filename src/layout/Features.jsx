import React from "react";
import FeaturesCard from "../components/FeaturesCard";

export default function Features() {
  return (
    <section className="flex flex-col gap-14">
      <h3 className="text-4xl dela-regular">Features</h3>
      <aside>
        <div className="grid grid-cols-2 grid-rows-2 gap-12">
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

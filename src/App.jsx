import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Cards from "./layout/Cards";
import Features from "./layout/Features";
import NewLetters from "./layout/NewLetters";

const App = () => {
  return (
    <body className="overflow-hidden w-full">
      <div className="xl:w-7/12 w-8/12 m-auto">
        <Header />
        <Landing />
        <Cards />
        <Features />
        <NewLetters />
        <Footer />
      </div>
    </body>
  );
};

export default App;

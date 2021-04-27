import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <div className="App">
      <div className="theme-light">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;

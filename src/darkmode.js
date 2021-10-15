// Dark mode code gets here using react context
import MusicProvider from "./Context/MusicProvider";

function App() {
  return (
    <>
      <Navbar />
      <div className="App-div">
        <MusicProvider>
          <GrandParent />
        </MusicProvider>
      </div>
    </>
  );
}

// Dark mode code 
import "./App.css";
import GrandParent from "./Family/GrandParent";
import "./Family/Family.css";
import Navbar from "./Navbar/Navbar";
import MusicProvider from "./Context/MusicProvider";
import ThemeProvider from "./Context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="App-div">
        <MusicProvider>
          <GrandParent />
        </MusicProvider>
      </div>
    </ThemeProvider>
  );
}
import React, { useState },{ useContext }  from "react";

export default React.createContext();

import ThemeContext from "./ThemeContext";
import "./ToggleSwitch.css";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => {
    setIsDark((mode) => !mode);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ToggleSwitch = () => {
  const { toggleMode, isDark } = useContext(ThemeContext);

  return (
    <div className="ToggleSwitch-div">
      <label className="switch">
        <input onClick={toggleMode} type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};
const Button = () => {
  const { isDark } = useContext(ThemeContext);
  let darkMode = isDark ? "dark" : "";
  return (
    <button className={`Button-btn ${darkMode}`}>
      {isDark ? "Dark" : "Light "} button
    </button>
  );
};

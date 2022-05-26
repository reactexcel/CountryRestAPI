import React, { useState } from "react";
import Header from "./component/Header/Index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CountryDetails } from "./component/Country/CountryDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  console.log(darkMode, "darkMode");
  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<HomePage mode={darkMode} />}></Route>
        <Route
          path="/country_details"
          element={<CountryDetails mode={darkMode} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

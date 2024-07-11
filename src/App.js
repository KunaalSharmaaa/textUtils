import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FormForText from './components/FormForText';
import Alert from './components/Alert';
// import AboutComp from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  let changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      valAlert("success", "Light mode enabled")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light";
    } else {
      setMode("dark");
      valAlert("success", "Dark mode enabled")
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark";
    }
  }

  const [alert, setAlert] = useState(null);
  let valAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <FormForText heading="Enter your text to analyze" mode={mode} alert={alert} valAlert={valAlert}/>
        {/* <AboutComp mode={mode}/> */}
          {/* <Routes>
            <Route exact path="/about" element={<AboutComp/>}>
            </Route>
            <Route exact path="/" element={<FormForText heading="Enter your text to analyze" mode={mode} alert={alert} valAlert={valAlert}/>}>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

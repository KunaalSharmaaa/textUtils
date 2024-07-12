import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FormForText from "./components/FormForText";
import Alert from "./components/Alert";
// import AboutComp from './components/About';

let removeBodyClasses = () => {
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-warning");
}

let btnColor = "primary";

function App() {
  let changeMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if (cls === "dark") {
      valAlert("success", `${cls} mode enabled`);
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      btnColor = "primary";
    } else {
      valAlert("success", `${cls} mode enabled`);
      document.body.style.color = "black";
      if (cls === "primary") {
        btnColor = "success";
      } else if (cls === "success") {
        btnColor = "warning";
      } else if (cls === "warning") {
        btnColor = "danger";
      } else if (cls === "danger") {
        btnColor = "primary";
      } else {
        btnColor = "primary";
      }
    }
  };

  const [alert, setAlert] = useState(null);
  let valAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        changeMode={changeMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <FormForText
          heading="TextUtils - Word counter | Character counter | Lowercase to Uppercase"
          alert={alert}
          valAlert={valAlert}
          btnColor={btnColor}
        />
        {/* <AboutComp /> */}
      </div>
    </>
  );
}

export default App;


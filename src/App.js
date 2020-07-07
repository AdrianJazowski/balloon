import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animated from "./Animated";

function App() {
  return (
    <div className="App">
      <div className="balloon-animation">
        <Animated
          className="flying-cloud"
          src="../assets/cloud.png"
          ratioX="0.26"
          ratioY="0.34"
        />
        <Animated
          className="flying-cloud"
          src="../assets/cloud.png"
          ratioX="0.66"
          ratioY="0.44"
        />
        <Animated
          className="flying-cloud"
          src="../assets/cloud.png"
          ratioX="0.56"
          ratioY="0.44"
        />
        <Animated
          className="flying-cloud"
          src="../assets/cloud.png"
          ratioX="0.16"
          ratioY="0.24"
        />
        <Animated
          className="flying-cloud"
          src="../assets/cloud.png"
          ratioX="0.46"
          ratioY="0.24"
        />
        <Animated
          className="flying-balloon"
          src="../assets/balloon.png"
          ratioX="0.56"
          ratioY="0.54"
        />
      </div>
    </div>
  );
}

export default App;

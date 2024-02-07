import React, { useState } from "react";
import Yes from "./Yes";

const App = () => {
  const [showYes, setShowYes] = useState(false);

  const nextPage = () => {
    setShowYes(true);
  };

  const moveButton = () => {
    const x =
      Math.random() *
        (window.innerWidth - document.getElementById("noButton").offsetWidth) -
      85;
    const y =
      Math.random() *
        (window.innerHeight -
          document.getElementById("noButton").offsetHeight) -
      48;
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  };

  return (
    <div className="container">
      {!showYes ? (
        <>
          <div>
            <h1 className="header_text">Will you be my valentine?</h1>
          </div>

          <div className="gif_container">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
              alt="Cute animated illustration"
            />
          </div>
        </>
      ) : (
        <Yes />
      )}
      {!showYes && (
        <div className="buttons">
          <button className="btn" id="yesButton" onClick={nextPage}>
            Yes
          </button>
          <button
            className="btn"
            id="noButton"
            onMouseOver={moveButton}
            onClick={moveButton}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

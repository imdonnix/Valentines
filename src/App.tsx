import React, { useRef, useState } from "react";
import Confetti from "./Confetti";

import "./style.css";

const sadLines = [
  " ? Hehe Better Luck Next Time :)",
  " ? Why? :(",
  " ? :(",
  " ? Just click Yes :)",
  " ? Dont Click No :(",
  " ? Stop it! :(",
  " ? Oops! :(",
  " ? Sad! :(",
  " ? Please Choose Yes :(",
  " ? Just click Yes :)",
  " ? Oh no! Not this :(",
];

const getRandomSadLine = () => {
  const randomIndex = Math.floor(Math.random() * sadLines.length);
  return sadLines[randomIndex];
};

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sadLine, setSadLine] = useState("");

  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNoButtonMouseOver = () => {
    const noButton = noButtonRef.current;
    if (noButton) {
      const randomX =
        Math.random() * (window.innerWidth - noButton.offsetWidth);
      const randomY =
        Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = "absolute";
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
      setSadLine(getRandomSadLine());
    }
  };

  return (
    <div className="app">
      <h1>Will you be my date on Valentine's????????</h1>
      <button className="button" id="yesButton" onClick={handleYesClick}>
        Yes!
      </button>
      <button
        className="button"
        id="noButton"
        ref={noButtonRef}
        onMouseOver={handleNoButtonMouseOver}
      >
        No
        <span className="sad-line">{sadLine}</span>
      </button>
      {modalOpen && <Confetti onClose={handleModalClose} />}
    </div>
  );
};

export default App;

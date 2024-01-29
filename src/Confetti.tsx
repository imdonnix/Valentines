import React, { useEffect } from "react";

import "./style.css";

interface ConfettiProps {
  onClose: () => void;
}

const Confetti: React.FC<ConfettiProps> = ({ onClose }) => {
  useEffect(() => {
    const confettiContainer = document.getElementById("confettiContainer");

    const createConfetti = () => {
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDelay = Math.random() * 5 + "s";
        confettiContainer?.appendChild(confetti);
      }
    };

    createConfetti();

    return () => {
      const confettiElements = document.querySelectorAll(".confetti");
      confettiElements.forEach((confetti) => confetti.remove());
    };
  }, []);

  const randomColor = () => {
    const colors = [
      "#FF6F61",
      "#6B5B95",
      "#88B04B",
      "#F7CAC9",
      "#92A8D1",
      "#955251",
      "#B565A7",
      "#009B77",
      "#DD4124",
      "#D65076",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <p>See you on February 14 my Love!</p>
        <p>I love you so much.</p>
        <button id="exitButton" className="close button" onClick={onClose}>
          Exit
        </button>
        <div id="confettiContainer"></div>
      </div>
    </div>
  );
};

export default Confetti;

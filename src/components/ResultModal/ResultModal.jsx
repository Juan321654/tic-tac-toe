import React from "react";
import "./ResultModal.css";

const ResultModal = ({ winner,  isGameOver, onNewGameClicked }) => {
  const resultModalClasses = isGameOver && 'modal-open'

  const message = winner ? `Winner is ${winner}.` : 'It is a tie.';

  return (
    <div id="modal-overlay" className={resultModalClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={onNewGameClicked}>Start New Game</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

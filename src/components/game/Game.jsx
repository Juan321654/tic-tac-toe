import { useState } from "react";
import Board from "../board/Board";
import ResultModal from "../ResultModal/ResultModal";
import { calculateWinner } from "../utils/winnerCalculator";
import "./Game.css";

function Game() {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numbersOfTurnsLeft, setNumbersOfTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const restartGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumbersOfTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  };

  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "O";

      const newNumberOfTurnsLeft = numbersOfTurnsLeft - 1;

      const calcResult = calculateWinner(
        newCellValues,
        newNumberOfTurnsLeft,
        cellIndex
      );

      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumbersOfTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={cellClicked}
        />
      </div>
      <ResultModal
        isGameOver={isGameOver}
        winner={winner}
        onNewGameClicked={restartGame}
      />
    </>
  );
}

export default Game;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [turnResult, setTurnResult] = useState("lets start!");
  const [result, setResult] = useState("let' see who wins the game!");
  const [gameOver, steGameOver] = useState(false);
  const [disable, setDisable] = useState(false);

  const choices = ["Rock", "Paper", "Scissors"];

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const onClickHandler = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboChoice = userChoice + computerChoice;
    if (userPoint <= 4 && computerPoint <= 4) {
      if (
        comboChoice === "RockScissors" ||
        comboChoice === "ScissorsPaper" ||
        comboChoice === "PaperRock"
      ) {
        const updateUserdPoints = userPoint + 1;
        setUserPoint(updateUserdPoints);
        setTurnResult("User get points!");

        if (updateUserdPoints === 5) {
          setResult("User win!");
          steGameOver(true);
          setDisable(true);
        }
      }
      if (
        comboChoice === "PaperScissors" ||
        comboChoice === "RockPaper" ||
        comboChoice === "ScissorsRock"
      ) {
        const updatedComputerPoints = computerPoint + 1;
        setComputerPoint(updatedComputerPoints);
        setTurnResult("Computer get points!");
        if (updatedComputerPoints === 5) {
          setResult("Computer win!");
          steGameOver(true);
          setDisable(true);
        }
      }
      if (
        comboChoice === "ScissorsScissors" ||
        comboChoice === "PaperPaper" ||
        comboChoice === "RockRock"
      ) {
        setTurnResult("No one get points!");
      }
    }
  }, [userChoice, computerChoice]);

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1>User point: {userPoint}</h1>
        <h1>Computer point: {computerPoint}</h1>
      </div>
      <div className="choice">
        <div className="choice_user">
          <img className="user_hand" src={`../images/${userChoice}.png`} />
        </div>
        <div className="choice_computer">
          <img
            className="computer_hand"
            src={`../images/${computerChoice}.png`}
          />
        </div>
      </div>
      <div className="button_div">
        {choices.map((choice, index) => {
          return (
            <button
              disabled={disable}
              key={index}
              className="button"
              onClick={() => onClickHandler(choice)}
            >
              {choice}
            </button>
          );
        })}
      </div>
      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>result: {result}</h1>
      </div>
      <div className="button_div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

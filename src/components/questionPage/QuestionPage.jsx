import React, { useState, useEffect } from "react";
import "./questionPage.style.scss";
import AllQuestions from "../allQuestions/AllQuestions";
import timerSound from "../../assets/alarm-clock-short-6402.mp3";
import AnswerPage from "../answerPage/AnswerPage";

const QuestionPage = ({ selectedCategory, changePage }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [timer, setTimer] = useState(60);
  const [timerOn, setTimerOn] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (timerOn && !timerPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerOn, timerPaused, timer]);

  useEffect(() => {
    if (timer === 0) {
      handleStop();
      playTimerSound();
    }
  }, [timer]);

  const handleNumberClick = (number) => {
    setSelectedQuestion(number);
    setTimer(60);
    setTimerOn(true);
    setTimerPaused(false);
  };

  const handleBackButtonClick = () => {
    changePage("categories");
    setTimerOn(false);
    setTimerPaused(false);
  };

  const handlePause = () => {
    setTimerPaused(true);
  };

  const handleResume = () => {
    setTimerPaused(false);
  };

  const handleStop = () => {
    setTimerOn(false);
    setTimer(60);
  };

  const playTimerSound = () => {
    const audio = new Audio(timerSound);
    audio.play();
  };

  const renderNumberCards = () => {
    if (selectedCategory === "CSS") {
      return AllQuestions.css.map((question, index) => (
        <div
          key={index + 1}
          className={`number ${
            selectedQuestion === index + 1 ? "selected" : ""
          }`}
          onClick={() => handleNumberClick(index + 1)}
        >
          {index + 1}
        </div>
      ));
    } else if (selectedCategory === "HTML") {
      return AllQuestions.html.map((question, index) => (
        <div
          key={index + 1}
          className={`number ${
            selectedQuestion === index + 1 ? "selected" : ""
          }`}
          onClick={() => handleNumberClick(index + 1)}
        >
          {index + 1}
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="css">
      <div className="css__button" onClick={handleBackButtonClick}>
        Back to Categories
      </div>
      <h1>{selectedCategory}</h1>
      <div className="question">
        <div className="question__left">
          <div className="question__left__main">
            <div className="question__left__main__numbers">
              {renderNumberCards()}
            </div>
          </div>
        </div>
        <div className="question__container">
          <div className="question__container__timer">
            Timer: {timer} seconds
            <div className="question__container__timer__controls">
              {!timerOn && (
                <button onClick={() => handleNumberClick(1)}>Start</button>
              )}
              {timerOn && (
                <>
                  <button onClick={handlePause}>Pause</button>
                  <button onClick={handleStop}>Stop</button>
                </>
              )}
              {timerPaused && <button onClick={handleResume}>Resume</button>}
            </div>
          </div>
          {selectedQuestion && (
            <div className="question__container__q">
              {selectedCategory === "CSS"
                ? AllQuestions.css[selectedQuestion - 1]
                : selectedCategory === "HTML"
                ? AllQuestions.html[selectedQuestion - 1]
                : null}
              <button className="btn">See answer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;

import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useEffect } from "react";

import '../TimerStyle.scss';
import './FocusTimer.scss';

import { useTimer } from '../useTimer';
import { Modal } from "../../components/Modal/Modal";
import { TimerDelay } from '../TimerDelay';

export function FocusTimer({ defaultShortBreak, defaultFocusTime, defaultLongBreak }: TimerDelay) {

  const [focusTime, setFocusTime] = useState<number>(() => {
    const savedFocusTime = localStorage.getItem('focusTime');
    return savedFocusTime ? parseInt(savedFocusTime) : defaultFocusTime;
  });

  const [shortTime, setShortTime] = useState<number>(() => {
    const savedShortTime = localStorage.getItem('shortTime');
    return savedShortTime ? parseInt(savedShortTime) : defaultShortBreak;
  });

  const [longTime, setLongTime] = useState<number>(() => {
    const savedLongTime = localStorage.getItem('longTime');
    return savedLongTime ? parseInt(savedLongTime) : defaultLongBreak;
  });

  const {
    timeLeft,
    togglePlay,
    resetTimer,
    setTimeLeft,
    formatTime,
    isPressed,
    modalWindowIsOpen,
    windowIsOpen,
    windowIsClose,
    SECONDS_IN_MINUTE
  } = useTimer({ defaultTime: focusTime });

  const btnClass = classNames(
    'btn',
    'start__btn focus-start__btn',
    {
      'icon-play': !isPressed,
      'icon-pause': isPressed,
    });

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);
    windowIsClose();
    resetTimer();
    setTimeLeft(newFocusTime * SECONDS_IN_MINUTE);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    resetTimer();
    setTimeLeft(newFocusTime * SECONDS_IN_MINUTE);
  };

  useEffect(() => {
    setTimeLeft(focusTime * SECONDS_IN_MINUTE);
  }, [focusTime, SECONDS_IN_MINUTE, setTimeLeft]);

  return (
    <div className="focus-background background">
      <div className="focus-main-container main-container">
        <Link to="/LongBreak" className="focus-mode__btn mode__btn">
          <p className="focus-mode__ico mode__ico"></p>
          <p className="focus-mode__text mode__text">Focus</p>
        </Link>

        <div className="focus-timer timer">
          {formatTime(timeLeft)}
        </div>

        <div className="handler-buttons">
          <button
            className="focus-menu__btn handler__btn icon-menu"
            onClick={windowIsOpen}
          >
          </button>

          {modalWindowIsOpen && (
            <div className="modal-wrapper">
              <Modal
                isOpen={modalWindowIsOpen}
                onClose={windowIsClose}
                onSave={handleSaveSettings}
                focusTime={focusTime}
                shortTime={shortTime}
                longTime={longTime}
              />
            </div>
          )}

          <button
            className={btnClass}
            onClick={togglePlay}
          >
          </button>

          <button
            className="focus-forward__btn handler__btn icon-fast-forward"
            onClick={resetTimer}
          >
          </button>
        </div>
      </div>
    </div>
  );
}
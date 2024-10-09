import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useEffect } from "react";

import '../TimerStyle.scss';
import './FocusTimer.scss';

import { useTimer } from '../useTimer';
import { Modal } from "../../components/Modal/Modal";

interface FocusTimerProps {
  defaultFocusTime: number;
}

//TODO: move interfaces into a separate file -TimerDelay

export function FocusTimer({ defaultFocusTime = 25 }: FocusTimerProps) {

  const [focusTime, setFocusTime] = useState<number>(() => {
    const savedFocusTime = localStorage.getItem('focusTime');
    return savedFocusTime ? parseInt(savedFocusTime) : defaultFocusTime;
  });

  const [shortTime, setShortTime] = useState<number>(() => {
    const savedShortTime = localStorage.getItem('shortTime');
    return savedShortTime ? parseInt(savedShortTime) : 5;
  });

  const [longTime, setLongTime] = useState<number>(() => {
    const savedLongTime = localStorage.getItem('longTime');
    return savedLongTime ? parseInt(savedLongTime) : 15;
  });

  //TODO: need replace magical values (25, 5, 15)

  const {
    timeLeft,
    toggle,
    reset,
    setTimeLeft,
    formatTime,
    isPressed,
    modalWindowIsOpen,
    windowIsOpen,
    windowIsClose
  } = useTimer({ defaultTime: focusTime });

  const btnClass = classNames({
    btn: true,
    'start__btn focus-start__btn': true,
    'icon-play': !isPressed,
    'icon-pause': isPressed,
  });

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);
    windowIsClose();
    reset();
    setTimeLeft(newFocusTime * 60);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    reset();
    setTimeLeft(newFocusTime * 60);
  };

  useEffect(() => {
    setTimeLeft(focusTime * 60);
  }, [focusTime, setTimeLeft]);

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
            onClick={toggle}
          >
          </button>

          <button
            className="focus-forward__btn handler__btn icon-fast-forward"
            onClick={reset}
          >
          </button>
        </div>
      </div>
    </div>
  );
}
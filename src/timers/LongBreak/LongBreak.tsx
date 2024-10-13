import { Link } from "react-router-dom"
import classNames from "classnames";
import { useState, useEffect } from "react";

import '../TimerStyle.scss';
import './LongBreak.scss';

import { useTimer } from '../useTimer';
import { Modal } from "../../components/Modal/Modal";
import {TimerDelay} from '../TimerDelay';

export function LongBreak({ defaultShortBreak, defaultFocusTime, defaultLongBreak }: TimerDelay) {

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
    formatTime,
    setTimeLeft,
    isPressed,
    modalWindowIsOpen,
    windowIsOpen,
    windowIsClose,
    SECONDS_IN_MINUTE
  } = useTimer({ defaultTime: longTime });

  const btnClass = classNames(
    'btn',
    'start__btn long-break-start__btn',
    {
      'icon-play-long': !isPressed,
      'icon-pause-long': isPressed,
    });

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);
    windowIsClose();
    resetTimer();
    setTimeLeft(newLongTime * SECONDS_IN_MINUTE);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    resetTimer();
    setTimeLeft(newLongTime * SECONDS_IN_MINUTE);
  };

  useEffect(() => {
    setTimeLeft(longTime * SECONDS_IN_MINUTE);
  }, [longTime, SECONDS_IN_MINUTE, setTimeLeft]); 

  return (
    <div className="long-break-background background">
      <div className="long-break-main-container main-container">
        <Link to="/ShortBreak" className="long-break-mode__btn mode__btn" >
          <p className="mode__ico icon-cup-long"></p>
          <p className="long-break-mode__text mode__text" >Long Break</p>
        </Link>

        <div className="long-break-timer timer">
          {formatTime(timeLeft)}
        </div>

        <div className="handler-buttons">
          <button
            className="
              long-break-menu__btn 
              handler__btn 
              icon-menu-long"
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
            onClick={togglePlay}>
          </button>

          <button
            className="handler__btn
              long-break-forward__btn 
              icon-fast-forward-long"
            onClick={resetTimer}>
          </button>
        </div>
      </div>
    </div>
  )
}
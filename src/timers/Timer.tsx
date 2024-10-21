import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useEffect } from "react";
import './TimerStyle.scss';

import {
  getForwardButtonClass
} from './classNames';

import { useTimer } from "./useTimer";
import { Modal } from "../components/Modal/Modal";
import { TimerDelay } from "./TimerDelay";

interface TimerProps extends TimerDelay {
  timerName: 'focus' | 'short-break' | 'long-break';
}

export function Timer({ timerName, defaultFocusTime, defaultShortBreak, defaultLongBreak }: TimerProps) {

  const [focusTime, setFocusTime] = useState(
    () => parseInt(localStorage.getItem('focusTime') || `${defaultFocusTime}`)
  );
  const [shortTime, setShortTime] = useState(
    () => parseInt(localStorage.getItem('shortTime') || `${defaultShortBreak}`)
  );
  const [longTime, setLongTime] = useState(
    () => parseInt(localStorage.getItem('longTime') || `${defaultLongBreak}`)
  );

  const defaultTime = timerName === 'focus' ?focusTime
    : timerName === 'short-break' ? shortTime
    : longTime;
  
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
    SECONDS_IN_MINUTE,
  } = useTimer({ defaultTime });

  const btnClass = classNames(
    'btn',
    `start__btn ${timerName}-start__btn`,
    {
      [`icon-play-${timerName}`]: !isPressed,
      [`icon-pause-${timerName}`]: isPressed,
    }
  );

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);

    const newTime = timerName === 'focus' ? newFocusTime
      : timerName === 'short-break' ? newShortTime
        : newLongTime;
    setTimeLeft(newTime * SECONDS_IN_MINUTE);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    resetTimer();
  }

  useEffect(() => {
    setTimeLeft(defaultTime * SECONDS_IN_MINUTE);
  }, [defaultTime, SECONDS_IN_MINUTE, setTimeLeft])

  return (
    <div className={`${timerName}-background background`}>
      <div className={`${timerName}-main-container main-container`}>
        <Link 
          to={
            timerName === 'focus'
            ? '/LongBreak'
            : timerName === 'long-break'
            ? '/ShortBreak'
            : '/Focus'
          }
          className={`${timerName}-mode__btn mode__btn`}>
          <p className={`mode__ico ${timerName}-mode__ico icon-mode-${timerName}`}></p>

          <p className={`mode__text ${timerName}-mode__text`}>
            {timerName === 'focus' 
              ? 'Focus' 
              : timerName === 'short-break' 
              ? 'Short Break' 
              : 'Long Break'
            }
          </p>
        </Link>

        <div className={`${timerName}-timer timer`}>
          {formatTime(timeLeft)}
        </div>

        <div className="handler-buttons">
          <button
            className={
              `${timerName}-menu__btn 
              handler__btn 
              icon-menu-${timerName}`
            }
            onClick={windowIsOpen}
          ></button>

          {modalWindowIsOpen && (
            <div className="modal-wrapper">
              <Modal
                isOpen={modalWindowIsOpen}
                onClose={windowIsClose}
                onSave={handleSaveSettings}
                focusTime={focusTime}
                shortTime={shortTime}
                longTime={longTime}
                timerName={timerName}
              />
            </div>
          )}

          <button
            className={btnClass}
            onClick={togglePlay}
          ></button>
          
          <button
            className={getForwardButtonClass(timerName)}
            onClick={resetTimer}
          ></button>
        </div>
      </div>
    </div>
  )
} 
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useEffect } from "react";

import './TimerStyleLinks.scss';
import {
  getBackgroundClass,
  getMainContainerClass,
  getForwardButtonClass,
  getMenuButtonClass,
  getModeButtonClass,
  getModeIconClass,
  getModeTextClass,
  getTimerClass,
  getTimerNameContent,
  getModeLinkPath
} from './timerStylesHelper';

import { useTimer } from "./useTimer";
import { Modal } from "../Modal/components/Modal";
import { TimerDelay } from "./TimerDelay";

interface TimerProps extends TimerDelay {
  timerName: 'focus' | 'short-break' | 'long-break';
  themeClass: string;
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

  const defaultTime = timerName === 'focus' ? focusTime
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
    handleTimerExpiration,
    SECONDS_IN_MINUTE,
    handleAlertEnabled,
    alert
  } = useTimer({ defaultTime });

  const handleSaveSettings = (
    newFocusTime: number,
    newShortTime: number,
    newLongTime: number,
  ) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);

    const newTime = timerName === 'focus'
      ? newFocusTime
      : timerName === 'short-break'
        ? newShortTime
        : newLongTime;
    setTimeLeft(newTime * SECONDS_IN_MINUTE);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    resetTimer();
  }

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimerExpiration()
    }
  }, [timeLeft, handleTimerExpiration]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme) {
      setDarkTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    setTimeLeft(defaultTime * SECONDS_IN_MINUTE);
  }, [defaultTime, SECONDS_IN_MINUTE, setTimeLeft])

  const [darkTheme, setDarkTheme] = useState<Record<string, boolean>>({
    focus: false,
    shortBreak: false,
    longBreak: false,
  });

  const handleDarkTheme = (timerName: string) => {
    const updatedTheme = {
      ...darkTheme,
      [timerName]: !darkTheme[timerName],
    };
    setDarkTheme(updatedTheme);
    localStorage.setItem('darkTheme', JSON.stringify(updatedTheme));
  }

  const themeClass = darkTheme[timerName] ? `${timerName}-dark` : `${timerName}`;

  const btnClass = classNames(
    'btn',
    `start__btn ${themeClass}-start__btn`,
    {
      [`icon-play-${themeClass}`]: !isPressed,
      [`icon-pause-${themeClass}`]: isPressed,
    }
  );

  return (
    <div className={getBackgroundClass(themeClass)}>
      <div className={getMainContainerClass(themeClass)}>
        <Link
          to={getModeLinkPath(timerName)}
          className={getModeButtonClass(themeClass)}>
          <p className={getModeIconClass(themeClass)}></p>

          <p className={getModeTextClass(themeClass)}>
            {getTimerNameContent(timerName)}
          </p>
        </Link>

        <div className={getTimerClass(themeClass)}>
          {formatTime(timeLeft)}
        </div>

        <div className="handler-buttons">
          <button
            className={getMenuButtonClass(themeClass)}
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
                themeClass={themeClass}
                timerName={timerName}
                darkTheme={darkTheme}
                onThemeToggle={handleDarkTheme}
                onAlertToggle={handleAlertEnabled}
                alert={alert}
              />
            </div>
          )}

          <button
            className={btnClass}
            onClick={togglePlay}
          ></button>

          <button
            className={getForwardButtonClass(themeClass)}
            onClick={resetTimer}
          ></button>
        </div>
      </div>
    </div>
  )
} 
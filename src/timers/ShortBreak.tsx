import { Link } from "react-router-dom"
import classNames from "classnames";
import { useState, useEffect } from "react"; 

import './TimerStyle.scss';
import './ShortBreak.scss';

import { useTimer } from './useTimer';
import { Modal } from "../components/Modal/Modal";

interface ShortBreakProps {
  defaultShortBreak: number;
}

export function ShortBreak({ defaultShortBreak = 5 }: ShortBreakProps) {

  const [focusTime, setFocusTime] = useState<number>(() => {
    const savedFocusTime = localStorage.getItem('focusTime');
    return savedFocusTime ? parseInt(savedFocusTime) : 25;
  });

  const [shortTime, setShortTime] = useState<number>(() => {
    const savedShortTime = localStorage.getItem('shortTime');
    return savedShortTime ? parseInt(savedShortTime) : defaultShortBreak;
  });

  const [longTime, setLongTime] = useState<number>(() => {
    const savedLongTime = localStorage.getItem('longTime');
    return savedLongTime ? parseInt(savedLongTime) : 15;
  });

  const {
    timeLeft,
    toggle,
    reset,
    formatTime,
    setTimeLeft,
    isPressed,
    modalWindowIsOpen,
    windowIsOpen,
    windowIsClose
  } = useTimer({ defaultTime: shortTime });

  const btnClass = classNames({
    btn: true,
    'start__btn short-break-start__btn': true,
    'icon-play-short': !isPressed,
    'icon-pause-short': isPressed,
  });

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);
    windowIsClose();
    reset();
    setTimeLeft(newShortTime * 60);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    reset();
    setTimeLeft(newShortTime * 60);
  };

  useEffect(() => {
    setTimeLeft(shortTime * 60);
  }, [shortTime, setTimeLeft]);

  return (
    <div className="short-break-background background">
      <div className="short-break-main-container main-container">
        <Link to="/FocusTimer" className="short-break-mode__btn mode__btn" >
          <p className="short-break-mode__ico mode__ico icon-cup-short"></p>
          <p className="short-break-mode__text mode__text" >Short Break</p>
        </Link>

        <div className="short-break-timer timer">
          {formatTime(timeLeft)}
        </div>

        <div className="handler-buttons">
          <button className="
            short-break-menu__btn
            handler__btn
            icon-menu-short"onClick={windowIsOpen}
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
            onClick={toggle}>
          </button>

          <button
            className="
              short-break-forward__btn
              handler__btn
              icon-fast-forward-short"
            onClick={reset}>
          </button>
        </div>
      </div>
    </div>
  )
}
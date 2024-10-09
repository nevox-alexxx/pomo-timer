import { Link } from "react-router-dom"
import classNames from "classnames";
import { useState, useEffect } from "react";

import '../TimerStyle.scss';
import './LongBreak.scss';

import { useTimer } from '../useTimer';
import { Modal } from "../../components/Modal/Modal";

interface LongBreakProps {
  defaultLongBreak: number;
}

export function LongBreak({ defaultLongBreak = 15 }: LongBreakProps) {

  const [focusTime, setFocusTime] = useState<number>(() => {
    const savedFocusTime = localStorage.getItem('focusTime');
    return savedFocusTime ? parseInt(savedFocusTime) : 25;
  });

  const [shortTime, setShortTime] = useState<number>(() => {
    const savedShortTime = localStorage.getItem('shortTime');
    return savedShortTime ? parseInt(savedShortTime) : 5;
  });

  const [longTime, setLongTime] = useState<number>(() => {
    const savedLongTime = localStorage.getItem('longTime');
    return savedLongTime ? parseInt(savedLongTime) : defaultLongBreak;
  });

  //TODO: need replace magical values (25, 5, 15)

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
  } = useTimer({ defaultTime: longTime });

  const btnClass = classNames({
    btn: true,
    'start__btn long-break-start__btn': true,
    'icon-play-long': !isPressed,
    'icon-pause-long': isPressed,
  });

  const handleSaveSettings = (newFocusTime: number, newShortTime: number, newLongTime: number) => {
    setFocusTime(newFocusTime);
    setShortTime(newShortTime);
    setLongTime(newLongTime);
    windowIsClose();
    reset();
    setTimeLeft(newLongTime * 60);

    localStorage.setItem('focusTime', newFocusTime.toString());
    localStorage.setItem('shortTime', newShortTime.toString());
    localStorage.setItem('longTime', newLongTime.toString());

    windowIsClose();
    reset();
    setTimeLeft(newLongTime * 60);
  };

  useEffect(() => {
    setTimeLeft(longTime * 60);
  }, [longTime, setTimeLeft]); 

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
            onClick={toggle}>
          </button>

          <button
            className="handler__btn
              long-break-forward__btn 
              icon-fast-forward-long"
            onClick={reset}>
          </button>
        </div>
      </div>
    </div>
  )
}
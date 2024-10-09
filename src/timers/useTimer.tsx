import { useEffect, useState } from "react";

interface TimerProps {
  defaultTime: number;
}

export function useTimer({defaultTime}: TimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultTime * 60);

  const [isPressed, setIsPressed] = useState(false);
  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);


  useEffect(() => {
    let interval: number;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggle = () => {
    setIsActive(!isActive);
    setIsPressed(prev => !prev);
  };

  //TODO: rename (toggle what?)

  const reset = () => {
    if (isActive){
      setIsActive(false);
      setTimeLeft(defaultTime * 60);
      setIsPressed(!isActive);
    } else if (!isActive) {
      setIsActive(false);
      setTimeLeft(defaultTime * 60);
      setIsPressed(isActive);
    }
  };
  //TODO: rename (reset what?)

  //TODO: What is '60' magical value, replace

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return (
      <div>
        <span>{String(minutes).padStart(2, '0')}</span>
        <br />
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
    );
  };

  const windowIsOpen = () => setModalWindowIsOpen(true);
  const windowIsClose = () => setModalWindowIsOpen(false);

  return { 
    timeLeft, 
    isActive, 
    toggle, 
    reset, 
    formatTime, 
    isPressed, 
    modalWindowIsOpen, 
    windowIsOpen, 
    windowIsClose,
    setTimeLeft
  };
}
import { useEffect, useState } from "react";

interface TimerProps {
  defaultTime: number;
}

export function useTimer({defaultTime}: TimerProps) {
  const SECONDS_IN_MINUTE = 60;
  const [isActive, setIsActive] = useState(false);
  
  // Initialize the time in seconds by multiplying defaultTime (in minutes) by SECONDS_IN_MINUTE,
  // since the timer works in seconds intervals.
  const [timeLeft, setTimeLeft] = useState(defaultTime * SECONDS_IN_MINUTE);

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

  const togglePlay = () => {
    setIsActive(!isActive);
    setIsPressed(prev => !prev);
  };

  const resetTimer = () => {
    if (isActive){
      setIsActive(false);
      setTimeLeft(defaultTime * SECONDS_IN_MINUTE);
      setIsPressed(!isActive);
    } else if (!isActive) {
      setIsActive(false);
      setTimeLeft(defaultTime * SECONDS_IN_MINUTE);
      setIsPressed(isActive);
    }
  };

  //TODO: add a function that will be triggered when the timer expires (notification and reset)

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
    const seconds = totalSeconds % SECONDS_IN_MINUTE;
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
    togglePlay, 
    resetTimer, 
    formatTime, 
    isPressed, 
    modalWindowIsOpen, 
    windowIsOpen, 
    windowIsClose,
    setTimeLeft,
    SECONDS_IN_MINUTE
  };
}
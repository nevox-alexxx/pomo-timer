import { useState, useEffect } from "react";
import { ModalProps } from "../types/ModalProps";

export function useModal({
  isOpen,
  focusTime: initialFocusTime,
  shortTime: initialShortTime,
  longTime: initialLongTime,
  onSave,
  onClose,
}: ModalProps) {
  const [focusTime, setFocusTime] = useState<number>(initialFocusTime);
  const [shortTime, setShortTime] = useState<number>(initialShortTime);
  const [longTime, setLongTime] = useState<number>(initialLongTime);

  const [darkTheme, setDarkTheme] = useState<Record<string, boolean>>({
    focus: false,
    shortBreak: false,
    longBreak: false,
  });

  const [notifications, setNotifications] = useState<boolean>(false)

  useEffect(() => {
    const savedFocusTime = localStorage.getItem("focusTime");
    const savedShortTime = localStorage.getItem("shortTime");
    const savedLongTime = localStorage.getItem("longTime");

    if (savedFocusTime) setFocusTime(Number(savedFocusTime));
    if (savedShortTime) setShortTime(Number(savedShortTime));
    if (savedLongTime) setLongTime(Number(savedLongTime));

    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme) {
      setDarkTheme(JSON.parse(savedTheme));
    }
  }, [isOpen]);

  const incrementValue = (value: number) => value + 1;
  const decrementValue = (value: number) => (value > 0 ? value - 1 : 0);

  const handleSaving = () => {
    onSave(focusTime, shortTime, longTime);
    onClose();
  };

  const handleDarkTheme = (timerName: string) => {
    const updatedTheme = {
      ...darkTheme,
      [timerName]: !darkTheme[timerName],
    }
    setDarkTheme(updatedTheme);
    localStorage.setItem('darkTheme', JSON.stringify(updatedTheme));
  }

  const handleNotification = () => {
    setNotifications(!notifications)
  }

  return {
    focusTime,
    shortTime,
    longTime,
    setFocusTime,
    setShortTime,
    setLongTime,
    incrementValue,
    decrementValue,
    handleSaving,
    handleDarkTheme,
    handleNotification,
    darkTheme
  };
}
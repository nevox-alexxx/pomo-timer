import { useState, useEffect } from "react";
import { ModalProps } from "../types/ModalProps";

export function useModal({
  focusTime: initialFocusTime,
  shortTime: initialShortTime,
  longTime: initialLongTime,
  onSave,
  onClose,
}: ModalProps) {
  const [focusTime, setFocusTime] = useState<number>(initialFocusTime);
  const [shortTime, setShortTime] = useState<number>(initialShortTime);
  const [longTime, setLongTime] = useState<number>(initialLongTime);

  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const savedFocusTime = localStorage.getItem("focusTime");
    const savedShortTime = localStorage.getItem("shortTime");
    const savedLongTime = localStorage.getItem("longTime");

    if (savedFocusTime) setFocusTime(Number(savedFocusTime));
    if (savedShortTime) setShortTime(Number(savedShortTime));
    if (savedLongTime) setLongTime(Number(savedLongTime));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  const incrementValue = (value: number) => value + 1;
  const decrementValue = (value: number) => (value > 0 ? value - 1 : 0);

  const handleSaving = () => {
    onSave(focusTime, shortTime, longTime);
    onClose();
  };

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
    darkTheme,
    setDarkTheme,
  };
}
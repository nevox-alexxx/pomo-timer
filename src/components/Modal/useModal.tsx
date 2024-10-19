import { useState, useEffect } from "react";
import { ModalProps } from "./ModalProps";

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

  useEffect(() => {
    const savedFocusTime = localStorage.getItem("focusTime");
    const savedShortTime = localStorage.getItem("shortTime");
    const savedLongTime = localStorage.getItem("longTime");

    if (savedFocusTime) setFocusTime(Number(savedFocusTime));
    if (savedShortTime) setShortTime(Number(savedShortTime));
    if (savedLongTime) setLongTime(Number(savedLongTime));
  }, [isOpen]);

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
  };
}
import "./ModalStyle.scss";

import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  focusTime: number;
  shortTime: number;
  longTime: number;
  onSave: (newFocusTime: number, newShortTime: number, newLongTime: number) => void;
}

export function Modal({ 
  isOpen,
  onClose,
  focusTime: initialFocusTime,
  shortTime: initialShortTime,
  longTime: initialLongTime,
  onSave,
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

  const incrementValue = (prevValue: number): number => {
    return prevValue + 1;
  };

  const decrementValue = (prevValue: number): number => {
    return prevValue > 0 ? prevValue - 1 : 0;
  };

  const handleFocusIncrement = () => {setFocusTime(incrementValue)};
  const handleShortIncrement = () => {setShortTime(incrementValue)};
  const handleLongIncrement = () => {setLongTime(incrementValue)};

  const handleFocusDecrement = () => {setFocusTime(decrementValue)};
  const handleShortDecrement = () => {setShortTime(decrementValue)};
  const handleLongDecrement = () => {setLongTime(decrementValue)};

  const handleFocusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocusTime(Number(event.target.value));
  };

  const handleShortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShortTime(Number(event.target.value));
  };

  const handleLongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongTime(Number(event.target.value));
  };

  const handleSaveAndClose = () => {
    onSave(focusTime, shortTime, longTime);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Settings</h2>
        <button 
          className="close-btn" 
          onClick={handleSaveAndClose}
        >&times;</button>
      </div>

      <div className="settings-item toggle">
        <label htmlFor="dark-mode">Dark mode</label>
        <input type="checkbox" id="dark-mode" />
        <label htmlFor="dark-mode" className="slider"></label>
      </div>

      <div className="settings-item">
        <label htmlFor="focus-length">Focus length</label>
        <div className="custom-number-input">
          <input
            type="number"
            value={focusTime}
            onChange={handleFocusChange}
          />
          <div className="button-wrapper">
            <button className="arrow-up" onClick={handleFocusIncrement}>▲</button>
            <div className="line"></div>
            <button className="arrow-down" onClick={handleFocusDecrement}>▼</button>
          </div>
        </div>
      </div>

      <div className="settings-item">
        <label htmlFor="long-break-length">Long break length</label>
        <div className="custom-number-input">
          <input
            type="number"
            value={longTime}
            onChange={handleLongChange}
          />
          <div className="button-wrapper">
            <button className="arrow-up" onClick={handleLongIncrement}>▲</button>
            <button className="arrow-down" onClick={handleLongDecrement}>▼</button>
          </div>
        </div>
      </div>

      <div className="settings-item">
        <label htmlFor="long-break-length">Short break length</label>
        <div className="custom-number-input">
          <input
            type="number"
            value={shortTime}
            onChange={handleShortChange}
          />
          <div className="button-wrapper">
            <button className="arrow-up" onClick={handleShortIncrement}>▲</button>
            <button className="arrow-down" onClick={handleShortDecrement}>▼</button>
          </div>
        </div>
      </div>

      <div className="settings-item toggle">
        <label htmlFor="notifications">Notifications</label>
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications" className="slider"></label>
      </div>
    </div>
  )
}
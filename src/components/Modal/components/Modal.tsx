import "../styles/ModalStyle.scss";
import "../styles/ModalColorStyle.scss";
import { ModalProps } from "../types/ModalProps";
import { useModal } from "../hooks/useModal";
import { SettingsItem } from "./SettingsItem";
import { ToggleSwitch } from "./ToggleSwitch";

interface ModalNames extends ModalProps {
  timerName: 'focus' | 'short-break' | 'long-break';
}

export function Modal({ timerName, ...props}: ModalNames) {
  const {
    focusTime,
    shortTime,
    longTime,
    setFocusTime,
    setShortTime,
    setLongTime,
    incrementValue,
    decrementValue,
    handleSaving,
  } = useModal(props);

  if (!props.isOpen) return null;

  return (
    <div className={`${timerName}-settings-container settings-container`}>
      <div className="settings-container--header">
        <h2>Settings</h2>
        <button className="close-btn" onClick={handleSaving}>&times;</button>
      </div>
      <ToggleSwitch 
        label="Dark mode" 
        id="dark-mode" 
        timerName={timerName}
      />

      <SettingsItem
        label="Focus length"
        value={focusTime}
        timerName={timerName}
        onIncrement={() => setFocusTime(incrementValue)}
        onDecrement={() => setFocusTime(decrementValue)}
        onChange={(e) => setFocusTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Long break length"
        value={longTime}
        timerName={timerName}
        onIncrement={() => setLongTime(incrementValue)}
        onDecrement={() => setLongTime(decrementValue)}
        onChange={(e) => setLongTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Short break length"
        value={shortTime}
        timerName={timerName}
        onIncrement={() => setShortTime(incrementValue)}
        onDecrement={() => setShortTime(decrementValue)}
        onChange={(e) => setShortTime(Number(e.target.value))}
      />

      <ToggleSwitch 
        label="Notifications" 
        id="notifications" 
        timerName={timerName}
      />
    </div>
  );
}
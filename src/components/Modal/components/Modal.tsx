import "../styles/ModalStyle.scss";
import "../styles/ModalColorStyle.scss";
import "../styles/ModalDarkColorStyle.scss";
import { ModalProps } from "../types/ModalProps";
import { useModal } from "../hooks/useModal";
import { SettingsItem } from "./SettingsItem";
import { ToggleSwitch } from "./ToggleSwitch";

interface ModalNames extends ModalProps {
  timerName: 'focus' | 'short-break' | 'long-break';
  themeClass: string;
  darkTheme: Record<string, boolean>;
  onThemeToggle: (timerName: string) => void;
}

export function Modal({ timerName, themeClass, darkTheme, onThemeToggle, ...props}: ModalNames) {
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
    handleNotification
  } = useModal(props);

  if (!props.isOpen) return null;

  return (
    <div className={`${themeClass}-settings-container settings-container`}>
      <div className="settings-container--header">
        <h2>Settings</h2>
        <button className="close-btn" onClick={handleSaving}>&times;</button>
      </div>
      <ToggleSwitch 
        label="Dark mode" 
        id="dark-mode"
        timerName={timerName}
        themeClass={themeClass} 
        isChecked={darkTheme[timerName]}
        onToggle={() => onThemeToggle(timerName)}
      />

      <SettingsItem
        label="Focus length"
        value={focusTime}
        timerName={timerName}
        themeClass={themeClass}
        onIncrement={() => setFocusTime(incrementValue)}
        onDecrement={() => setFocusTime(decrementValue)}
        onChange={(e) => setFocusTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Long break length"
        value={longTime}
        timerName={timerName}
        themeClass={themeClass}
        onIncrement={() => setLongTime(incrementValue)}
        onDecrement={() => setLongTime(decrementValue)}
        onChange={(e) => setLongTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Short break length"
        value={shortTime}
        timerName={timerName}
        themeClass={themeClass}
        onIncrement={() => setShortTime(incrementValue)}
        onDecrement={() => setShortTime(decrementValue)}
        onChange={(e) => setShortTime(Number(e.target.value))}
      />

      <ToggleSwitch 
        label="Notifications" 
        id="notifications" 
        timerName={timerName}
        themeClass={themeClass}
        isChecked={darkTheme[timerName]}
        onToggle={handleNotification}
      />
    </div>
  );
}
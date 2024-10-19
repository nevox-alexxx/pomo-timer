import "./ModalStyle.scss";
import { ModalProps } from "./ModalProps";
import { useModal } from "./useModal";
import { SettingsItem } from "./SettingsItem";
import { ToggleSwitch } from "./ToggleSwitch";

export function Modal(props: ModalProps) {
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
    <div className="settings-container">
      <div className="settings-container--header">
        <h2>Settings</h2>
        <button className="close-btn" onClick={handleSaving}>&times;</button>
      </div>
      <ToggleSwitch label="Dark mode" id="dark-mode" />

      <SettingsItem
        label="Focus length"
        value={focusTime}
        onIncrement={() => setFocusTime(incrementValue)}
        onDecrement={() => setFocusTime(decrementValue)}
        onChange={(e) => setFocusTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Long break length"
        value={longTime}
        onIncrement={() => setLongTime(incrementValue)}
        onDecrement={() => setLongTime(decrementValue)}
        onChange={(e) => setLongTime(Number(e.target.value))}
      />

      <SettingsItem
        label="Short break length"
        value={shortTime}
        onIncrement={() => setShortTime(incrementValue)}
        onDecrement={() => setShortTime(decrementValue)}
        onChange={(e) => setShortTime(Number(e.target.value))}
      />

      <ToggleSwitch label="Notifications" id="notifications" />
    </div>
  );
}
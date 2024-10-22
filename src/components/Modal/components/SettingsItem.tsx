import { SettingsItemProps } from "../types/ModalProps";

export function SettingsItem({
  label,
  value,
  onIncrement,
  onDecrement,
  onChange,
  timerName
}: SettingsItemProps) {

  return (
    <div className="settings-item">
      <label>{label}</label>
      <div 
        className={`${timerName}-custom-number-input custom-number-input`}>
        <input 
          type="number"
          value={value}
          onChange={onChange}
          className={`${timerName}-number-input number-input`} 
        />
        <div className="button-wrapper">
          <button className="arrow-up" onClick={onIncrement}>▲</button>
          <button className="arrow-down" onClick={onDecrement}>▼</button>
        </div>
      </div>
    </div>
  );
}
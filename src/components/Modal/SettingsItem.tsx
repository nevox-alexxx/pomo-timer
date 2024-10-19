import { SettingsItemProps } from "./ModalProps";

export function SettingsItem({
  label,
  value,
  onIncrement,
  onDecrement,
  onChange,
}: SettingsItemProps) {

  return (
    <div className="settings-item">
      <label>{label}</label>
      <div className="custom-number-input">
        <input type="number" value={value} onChange={onChange} />
        <div className="button-wrapper">
          <button className="arrow-up" onClick={onIncrement}>▲</button>
          <button className="arrow-down" onClick={onDecrement}>▼</button>
        </div>
      </div>
    </div>
  );
}
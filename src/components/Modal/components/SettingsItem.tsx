import { SettingsItemProps } from "../types/ModalProps";

export function SettingsItem({
  label,
  value,
  onIncrement,
  onDecrement,
  onChange,
  themeClass
}: SettingsItemProps) {

  return (
    <div className="settings-item">
      <label className={`${themeClass}-text-options`}>{label}</label>
      <div 
        className={
          `${themeClass}-custom-number-input 
          custom-number-input`}>
        <input
          type="number"
          value={value}
          onChange={onChange}
          className={`${themeClass}-number-input number-input`} 
        />
        <div className="button-wrapper">
          <button className="arrow-up" onClick={onIncrement}>▲</button>
          <button className="arrow-down" onClick={onDecrement}>▼</button>
        </div>
      </div>
    </div>
  );
}
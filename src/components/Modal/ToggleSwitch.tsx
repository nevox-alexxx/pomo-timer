import { ToggleSwitchProps } from "./ModalProps";

export function ToggleSwitch({ label, id, timerName }: ToggleSwitchProps) {
  return (
    <div className="settings-item toggle">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} />
      <label
        htmlFor={id}
        className={`${timerName}-slider slider`}
      >
      </label>
    </div>
  );
}
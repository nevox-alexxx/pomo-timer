import { ToggleSwitchProps } from "./ModalProps";

export function ToggleSwitch({ label, id }: ToggleSwitchProps) {
  return (
    <div className="settings-item toggle">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="slider"></label>
    </div>
  );
}
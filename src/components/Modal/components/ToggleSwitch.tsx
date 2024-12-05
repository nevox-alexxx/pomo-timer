import { useEffect, useState } from "react";
import { ToggleSwitchProps } from "../types/ModalProps";

export function ToggleSwitch({
  label,
  id,
  isChecked = false,
  themeClass,
  onToggle
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = () => {
    setChecked(!checked);
    onToggle();
  };

  return (
    <div className="settings-item toggle">
      <label 
        htmlFor={id} 
        className={`${themeClass}-text-options`}
      >
        {label}
      </label>

      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />

      <label
        htmlFor={id}
        className={`${themeClass}-slider slider`}
      >
      </label>
    </div>
  );
}
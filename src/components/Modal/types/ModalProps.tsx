export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  focusTime: number;
  shortTime: number;
  longTime: number;
  onSave: (newFocusTime: number, newShortTime: number, newLongTime: number) => void;
}

export interface SettingsItemProps {
  label: string;
  value: number;
  themeClass: string;
  timerName: 'focus' | 'short-break' | 'long-break';
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ToggleSwitchProps {
  label: string;
  id: string;
  themeClass: string;
  onToggle: () => void;
  isChecked: boolean;
  timerName: 'focus' | 'short-break' | 'long-break';
}
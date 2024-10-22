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
  timerName: 'focus' | 'short-break' | 'long-break';
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ToggleSwitchProps {
  label: string;
  id: string;
  timerName: 'focus' | 'short-break' | 'long-break';
}
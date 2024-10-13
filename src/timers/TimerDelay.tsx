export interface TimerDelay {
  defaultFocusTime: number;
  defaultShortBreak: number;
  defaultLongBreak: number;
}

export function defaultTime(): TimerDelay {
  return {
    defaultFocusTime: 25,
    defaultShortBreak: 5,
    defaultLongBreak: 15,
  };
}
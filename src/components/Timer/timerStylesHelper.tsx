export const getBackgroundClass = (timerName: string) =>
  `${timerName}-background 
  background`;

export const getMainContainerClass = (timerName: string) =>
  `${timerName}-main-container 
  main-container`;

export const getForwardButtonClass = (timerName: string) =>
  `handler__btn
  ${timerName}-forward__btn
  icon-fast-forward-${timerName}`;

export const getMenuButtonClass = (timerName: string) =>
  `${timerName}-menu__btn 
  handler__btn 
  icon-menu-${timerName}`;

export const getModeButtonClass = (timerName: string) =>
  `${timerName}-mode__btn 
  mode__btn`;

export const getModeIconClass = (timerName: string) =>
  `mode__ico 
  ${timerName}-mode__ico 
  icon-mode-${timerName}`;

export const getModeTextClass = (timerName: string) =>
  `mode__text
  ${timerName}-mode__text`;

export const getTimerClass = (timerName: string) =>
  `${timerName}-timer 
    timer`;

export const getTimerNameContent = (timerName: string) =>
  timerName === 'focus'
    ? 'Focus'
    : timerName === 'short-break'
      ? 'Short Break'
      : 'Long Break';

export const getModeLinkPath = (timerName: string) =>
  timerName === 'focus'
    ? '/LongBreak'
    : timerName === 'long-break'
      ? '/ShortBreak'
      : '/Focus'
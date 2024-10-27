export const getBackgroundClass = (themeClass: string) =>
  `${themeClass}-background 
  background`;

export const getMainContainerClass = (themeClass: string) =>
  `${themeClass}-main-container 
  main-container`;

export const getForwardButtonClass = (themeClass: string) =>
  `handler__btn
  ${themeClass}-forward__btn
  icon-fast-forward-${themeClass}`;

export const getMenuButtonClass = (themeClass: string) =>
  `${themeClass}-menu__btn 
  handler__btn 
  icon-menu-${themeClass}`;

export const getModeButtonClass = (themeClass: string) =>
  `${themeClass}-mode__btn 
  mode__btn`;

export const getModeIconClass = (themeClass: string) =>
  `mode__ico 
  ${themeClass}-mode__ico 
  icon-mode-${themeClass}`;

export const getModeTextClass = (themeClass: string) =>
  `mode__text
  ${themeClass}-mode__text`;

export const getTimerClass = (themeClass: string) =>
  `${themeClass}-timer 
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
      : '/Focus';
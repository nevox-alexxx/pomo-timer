import { useState, useEffect } from "react";

export function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState<Record<string, boolean>>({
    focus: false,
    shortBreak: false,
    longBreak: false,
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme) {
      setDarkTheme(JSON.parse(savedTheme));
    }
  }, []);

  const handleDarkTheme = (timerName: string) => {
    const updatedTheme = {
      ...darkTheme,
      [timerName]: !darkTheme[timerName],
    };
    setDarkTheme(updatedTheme);
    localStorage.setItem('darkTheme', JSON.stringify(updatedTheme));
  }

  return {
    darkTheme,
    handleDarkTheme,
  }
}
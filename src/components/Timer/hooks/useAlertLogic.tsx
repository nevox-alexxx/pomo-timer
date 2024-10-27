import { useState, useEffect } from "react";
import timerIsUp from '../../../assets/sounds/timerIsUp.mp3';

export function useAlertLogic() {
  const [alertEnabled, setAlertEnabled] = useState(false);
  const audio = new Audio(timerIsUp);

  useEffect(() => {
    if (alertEnabled) {
      requestNotificationPermission();
    }
  }, [alertEnabled]);

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('Permission granted for notifications');
    }
  };

  const playAlert = () => {
    if (alertEnabled && Notification.permission === 'granted') {
      new Notification("Time's up!", { body: "The timer has finished!" });
      audio.play();

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 10000);
    }
  };

  return {
    alertEnabled,
    playAlert,
    setAlertEnabled
  };
}
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
    } else {
      console.warn('Permission denied for notifications');
    }
    
  };

  const playAlert = () => {
    if (alertEnabled && Notification.permission === 'granted') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification("Time's up!", {
            body: 'The timer has finished!',
            icon: '/pomo-timer/icon512.png',
            tag: 'pomo-timer-notification',
          });
        });
      }

      // new Notification("Time's up!", { body: "The timer has finished!" });
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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Timer } from './components/Timer/Timer.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/pomo-timer/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Focus",
    element: <Timer
      timerName='focus'
      defaultFocusTime={25}
      defaultShortBreak={5}
      defaultLongBreak={15}
      themeClass='focus'
    />,
  },
  {
    path: "/LongBreak",
    element: <Timer
      timerName='long-break'
      defaultFocusTime={25}
      defaultShortBreak={5}
      defaultLongBreak={15}
      themeClass=''
    />,
  },
  {
    path: "/ShortBreak",
    element: < Timer
      timerName='short-break'
      defaultFocusTime={25}
      defaultShortBreak={5}
      defaultLongBreak={15}
      themeClass=''
    />,
  },
],
  {
    basename: "/pomo-timer/",
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

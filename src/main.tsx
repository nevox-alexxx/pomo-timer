import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Timer } from './components/Timer/Timer.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    />,
  },
  {
    path: "/LongBreak",
    element: <Timer
      timerName='long-break'
      defaultFocusTime={25}
      defaultShortBreak={5}
      defaultLongBreak={15}
    />,
  },
  {
    path: "/ShortBreak",
    element: < Timer
      timerName='short-break'
      defaultFocusTime={25}
      defaultShortBreak={5}
      defaultLongBreak={15}
    />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

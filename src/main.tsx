import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { FocusTimer } from './timers/FocusTimer/FocusTimer.tsx'
import { LongBreak } from './timers/LongBreak/LongBreak.tsx'
import { ShortBreak } from './timers/ShortBreak/ShortBreak.tsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/FocusTimer",
    element:<FocusTimer defaultFocusTime={0} />,
  },
  {
    path:"/LongBreak",
    element:<LongBreak defaultLongBreak={0}/>,
  },
  {
    path:"/ShortBreak",
    element:<ShortBreak defaultShortBreak={0}/>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

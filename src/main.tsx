import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { FocusTimer } from './timers/FocusTimer.tsx'
import { LongBreak } from './timers/LongBreak.tsx'
import { ShortBreak } from './timers/ShortBreak.tsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/FocusTimer",
    element:<FocusTimer />,
  },
  {
    path:"/LongBreak",
    element:<LongBreak />,
  },
  {
    path:"/ShortBreak",
    element:<ShortBreak />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

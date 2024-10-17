import './App.scss';
import { InfoBlock } from './components/InfoBlock/InfoBlock';

import { Timer } from './timers/Timer';

function App() {

  return (
    <div className="container">
      <InfoBlock />

      <div className="timerX">
        <div className="timer-box focus">
          <Timer
            timerName='focus'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
          />
        </div>

        <div className="timer-box long-break">
          <Timer
            timerName='short-break'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
          />
        </div>

        <div className="timer-box short-break">
          <Timer
            timerName='long-break'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
          />
        </div>
      </div>
    </div>
  )
}

export default App

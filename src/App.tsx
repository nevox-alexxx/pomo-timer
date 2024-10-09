import './App.scss';
import { InfoBlock } from './components/InfoBlock/InfoBlock';

import { FocusTimer } from './timers/FocusTimer/FocusTimer';
import { LongBreak } from './timers/LongBreak/LongBreak';
import { ShortBreak } from './timers/ShortBreak/ShortBreak';

function App() {

  return (
    <div className="container">
      <InfoBlock />

      <div className="timerX">
        <div className="timer-box focus">
          <FocusTimer defaultFocusTime={25} />
        </div>

        <div className="timer-box long-break">
          <LongBreak defaultLongBreak={15}/>
        </div>

        <div className="timer-box short-break">
          <ShortBreak defaultShortBreak={5} />
        </div>
      </div>
    </div>
  )
}

export default App

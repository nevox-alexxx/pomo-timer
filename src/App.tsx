import { useNavigate } from 'react-router-dom';

import './App.scss';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Timer } from './components/Timer/Timer';

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <InfoBlock />

      <div className="timerX">
        <div 
          className="timer-box focus" 
          onClick={() => navigate('/Focus')} >
          <Timer
            timerName='focus'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
            themeClass=''
          />
        </div>

        <div 
          className="timer-box long-break" 
          onClick={() => navigate('/ShortBreak')}>
          <Timer
            timerName='short-break'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
            themeClass=''
          />
        </div>

        <div 
          className="timer-box short-break" 
          onClick={() => navigate('/LongBreak')}>
          <Timer
            timerName='long-break'
            defaultFocusTime={25}
            defaultShortBreak={5}
            defaultLongBreak={15}
            themeClass=''
          />
        </div>
      </div>
    </div>
  )
}

export default App

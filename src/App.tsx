import './App.scss';
import { useState, useEffect } from 'react';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { TimersBlock } from './components/TimersBlock/TimersBlock';
import { PhoneMainPage } from './components/PhoneMainPage/PhoneMainPage';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1080);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      {isMobile ? (
        <PhoneMainPage />
      ) : (
        <>
          <InfoBlock />
          <TimersBlock />
        </>
      )}
    </div>
  );
}

export default App;
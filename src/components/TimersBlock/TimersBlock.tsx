import '../TimersBlock/TimersBlockStyle.scss';
import { useNavigate } from 'react-router-dom';

export function TimersBlock() {
  const navigate = useNavigate();

  return (
    <div className="timer-container">
      <div
        className="timer-block focus"
        onClick={() => navigate('/Focus')}>
        <div className="focus-timer">
          <div className="focus-mode">
            <p className="focus-mode__ico"></p>
            <p className="focus-mode__name">Focus</p>
          </div>

          <div className='time'>
            <span>20</span>
            <br />
            <span>00</span>
          </div>

          <div>
            <button
              className="
              handler
              menu__btn 
              handler-focus
              icon-menu-focus"
            >
            </button>

            <button
              className="
                icon-play-focus 
                focus-start__btn 
                start__btn">
            </button>

            <button
              className="
              handler
              handler-focus
              forward__btn
              icon-fast-forward-focus">
            </button>
          </div>
        </div>
      </div>

      <div
        className="timer-block long-break"
        onClick={() => navigate('/LongBreak')}>
        <div className="long-break-timer">
          <div className="long-break-mode">
            <p className="icon-mode-long-break mode__ico"></p>
            <p className="long-break-mode__name">Long Break</p>
          </div>

          <div className='time'>
            <span>15</span>
            <br />
            <span>00</span>
          </div>

          <div>
            <button
              className="
              menu__btn 
              handler 
              handler-long-break
              icon-menu-short-break"
            >
            </button>

            <button
              className="
                icon-play-long-break 
                long-break-start__btn 
                start__btn">
            </button>

            <button
              className="
              handler
              handler-long-break
              forward__btn
              icon-fast-forward-long-break">
            </button>
          </div>
        </div>
      </div>

      <div
        className="timer-block short-break"
        onClick={() => navigate('/ShortBreak')}>
        <div className="short-break-timer">
          <div className="short-break-mode">
            <p className="icon-mode-short-break mode__ico"></p>
            <p className="short-break-mode__name">Short Break</p>
          </div>

          <div className='time'>
            <span>05</span>
            <br />
            <span>00</span>
          </div>

          <div>
            <button
              className="
              menu__btn 
              handler
              handler-short-break
              icon-menu-short-break"
            >
            </button>

            <button
              className="
                icon-play-short-break 
                short-break-start__btn 
                start__btn">
            </button>

            <button
              className="
              handler
              handler-short-break
              forward__btn
              icon-fast-forward-short-break">
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
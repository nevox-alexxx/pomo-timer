import { InfoBlock } from "../InfoBlock/InfoBlock";
import './PhoneMainPageStyle.scss';
import { useNavigate } from "react-router-dom";

export function PhoneMainPage() {
  const navigate = useNavigate();
  return (
    <div className="phone-main-page">
      <div className="carousel">
        <div className="carousel-item">
          <InfoBlock />
        </div>
        <div className="carousel-item">
          <div
            className="focus-mode"
            onClick={() => navigate('/Focus')}
          >
            <p className="focus-mode__ico"></p>
            <p className="focus-mode__name">Focus</p>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="long-break-mode"
            onClick={() => navigate('/LongBreak')}
          >
            <p className="icon-mode-long-break mode__ico"></p>
            <p className="long-break-mode__name">Long Break</p>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="short-break-mode"
            onClick={() => navigate('/ShortBreak')}
          >
            <p className="icon-mode-short-break mode__ico"></p>
            <p className="short-break-mode__name">Short Break</p>
          </div>
        </div>
      </div>
    </div>
  );
}
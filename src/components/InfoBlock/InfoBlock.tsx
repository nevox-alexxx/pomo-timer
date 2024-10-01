import './InfoBlock.scss';

export function InfoBlock() {
  return (
    <div className="info-block">

      <div className="logo-block">
        <div className="logo-icon"></div>
        <h1 className="logo-text">Pomo</h1>
      </div>

      <div className="intro-block">
        <h2 className="logo-title">Pomodoro Timer <br /> App Prototype</h2>
        <h3 className="logo-sub-title">Desktop & Mobile</h3>
      </div>

      <p className="version">V. 0.1.0</p>

    </div>
  )
}
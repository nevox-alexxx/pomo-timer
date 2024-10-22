import './InfoBlock.scss';

export function InfoBlock() {
  const version = '0.2.0';

  return (
    <div className="info-block">
      <div className="logo-block">
        <div className="logo-block__icon"></div>
        <h1 className="logo-block__text">Pomo</h1>
      </div>

      <div className="intro-block">
        <h2 className="intro-block__title">Pomodoro Timer <br /> App Prototype</h2>
        <h3 className="intro-block__sub-title">Desktop & Mobile</h3>
      </div>

      <p className="version">V. {version}</p>
    </div>
  )
}
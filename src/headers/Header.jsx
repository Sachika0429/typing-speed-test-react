import './Header.css';

export function Header({ bestWpm, isMobile }) {
  return (
    <>
      {isMobile ? (
        <div className="logo-best-score">
          <img src="../../images/logo-small.svg" />
          <div className="best-wpm">
            <img src="../../images/icon-personal-best.svg" alt="trophy" className="trophy" />
            <p>
              <span className="best">Best: </span>
              {bestWpm}
              WPM
            </p>
          </div>
        </div>
      ) : (
        <div className="logo-best-score">
          <div className="header-logo-desktop">
            <img className="header-logo-desktop" src="../../images/logo-small.svg" />
            <div className="header-logo-text-desktop">
              <h1>Typing Speed Test</h1>
              <p className="header-logo-text-desktop-small">
                Type as fast as you can in 60 seconds
              </p>
            </div>
          </div>

          <div className="best-wpm">
            <img src="../../images/icon-personal-best.svg" alt="trophy" className="trophy" />
            <p>
              <span className="best">Personal Best: </span>
              {bestWpm}
              WPM
            </p>
          </div>
        </div>
      )}
    </>
  )
}
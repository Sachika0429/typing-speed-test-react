import { useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';
import { Header } from './headers/Header';
import { Footer } from './footers/Footer';
import { Scores } from './components/Scores';
import { DroppedSelector } from './components/DroppedSelector';
import { Passage } from './components/Passage';
import './TypingScreen.css';


export function TypingScreen({ isOpenDifficulty, setIsOpenDifficulty, isOpenMode, setIsOpenMode, selectedDifficulty, selectedMode, handleDifficulty, handleMode, isTimer, setIsTimer, isTyping, setIsTyping, isPassage1, setIsPassage1, isForScore, setIsForScore, isTestEnd, setIsTestEnd, playTimes, setPlayTimes, bestWpm, setBestWpm, userTyping, setUserTyping, wpmCount, setWpmCount, correctCharacters, setCorrectCharacters, index, setIndex, accuracy, setAccuracy, wrongCharacters, setWrongCharacters, backSpaceTimes, setBackSpaceTimes, isMobile, minuites, setMinuites }) {

  // const [accuracy, setAccuracy] = useState(100);

  // const [userTyping, setUserTyping] = useState([]);

  const hasHandledTestEnd = useRef(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect (() => {
    setIsOpenDifficulty(false);
    setIsOpenMode(false);
  }, []);

  useEffect(() => {
    setIsForScore(false);

    setIsTimer(true);

    setIsTyping(true);

    setIsPassage1(true);
  }, [setIsForScore, setIsPassage1, setIsTimer, setIsTyping]);

  // accuracyの渡し方は大事！！ ここはあとでちゃんと復習する。
  // stateをtypingscreenで定義→setAccuracyを子供のpasageに、accuracyそのものを子供のscoresに渡す→子供のpassageでstateを更新→scoresのaccuracyが更新される


  // ここの、useRefを使った終了処理のところ、最後に復讐する！！

  useEffect(() => {
    if (isTestEnd !== 'end') {
      hasHandledTestEnd.current = false;
      return;
    }

    if (hasHandledTestEnd.current) {
      return;
    }

    hasHandledTestEnd.current = true;
    const completedPlayTimes = playTimes + 1;

    localStorage.setItem('accuracyScore', accuracy);

    localStorage.setItem('correctCharacters', correctCharacters.length);
    localStorage.setItem('wrongCharacters', wrongCharacters);

    setPlayTimes((previousPlayTimes) => previousPlayTimes + 1);

    /*

    if (completedPlayTimes === 1 || bestWpm < localStorage.getItem('wpmScore')) {
      setBestWpm(localStorage.getItem('wpmScore'));
    }

    */

    if (completedPlayTimes === 1) {
      setBestWpm(Number(localStorage.getItem('wpmScore')));
      navigate('/first-result');
    } else if (bestWpm < Number(localStorage.getItem('wpmScore'))) {
      setBestWpm(Number(localStorage.getItem('wpmScore')));
      navigate('/best-result');
    } else {
      navigate('/result');
    }
  }, [isTestEnd, playTimes, accuracy, setPlayTimes, setBestWpm, navigate, bestWpm]);

  useEffect(() => {
    localStorage.setItem("playTimes", playTimes);
  }, [playTimes]);

  useEffect(() => {
    localStorage.setItem('bestWpm', bestWpm);
  }, [bestWpm]);


  return (
    <div className="typing-screen">
      <main>
        <Header
          bestWpm={bestWpm}
          isMobile={isMobile}
        />

        <Scores
          isOpenDifficulty={isOpenDifficulty} setIsOpenDifficulty={setIsOpenDifficulty} isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty} handleMode={handleMode}
          isTimer={isTimer} setIsTimer={setIsTimer}

          isPassage1={isPassage1}
          isForScore={isForScore}

          accuracy={accuracy}

          userTyping={userTyping}

          isTestEnd={isTestEnd}
          setIsTestEnd={setIsTestEnd}

          wpmCount={wpmCount}
          setWpmCount={setWpmCount}

          backSpaceTimes={backSpaceTimes}
          setBackSpaceTimes={setBackSpaceTimes}

          isTyping={isTyping}

          isMobile={isMobile}

          minuites={minuites}
          setMinuites={setMinuites}
        />

        <div className="passage">
          <div className="passage-position">

            <DroppedSelector
              isOpenDifficulty={isOpenDifficulty} setIsOpenDifficulty={setIsOpenDifficulty} isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty}
              handleMode={handleMode}
            />

            <Passage
              selectedDifficulty={selectedDifficulty}
              isTyping={isTyping}
              isPassage1={isPassage1}

              accuracy={accuracy}
              setAccuracy={setAccuracy}

              userTyping={userTyping}
              setUserTyping={setUserTyping}

              isTestEnd={isTestEnd}
              setIsTestEnd={setIsTestEnd}

              playTimes={playTimes}
              setPlayTimes={setPlayTimes}

              bestWpm={bestWpm}
              setBestWpm={setBestWpm}

              correctCharacters={correctCharacters}
              setCorrectCharacters={setCorrectCharacters}

              index={index}
              setIndex={setIndex}

              wrongCharacters={wrongCharacters}
              setWrongCharacters={setWrongCharacters}

              setBackSpaceTimes={setBackSpaceTimes}
            />

          </div>
        </div>

        <div className="restart-button-box">
          <button className="restart-button"
            onClick={() => {
              setIsOpenDifficulty(false);
              setIsOpenMode(false);
              handleClick();

              setIsPassage1(true);
              setIsTimer(false);
              setIsTyping(false);
            }}
          >
            <p className="restart-text">Restart Test</p>
            <img src="../images/icon-restart.svg" alt="restart-img" className="restart-image" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

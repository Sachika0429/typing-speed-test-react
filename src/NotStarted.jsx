import { Link, useNavigate } from 'react-router';
import { Header } from './headers/Header';
import { Footer } from './footers/Footer';
import { ScoresNot } from './components/ScoresNot';
import { DroppedSelector } from './components/DroppedSelector';
import { Passage } from './components/Passage';
import './NotStarted.css';

export function NotStarted({ isOpenDifficulty, setIsOpenDifficulty, isOpenMode, setIsOpenMode, selectedDifficulty, selectedMode, handleDifficulty, handleMode, isTimer, setIsTimer, isTyping, isPassage1, bestWpm, setUserTyping, setCorrectCharacters, setIndex, setAccuracy, setWpmCount, wrongCharacters, setWrongCharacters, backSpaceTimes, setBackSpaceTimes, isMobile, difficultySelectButton, setDifficultySelectButton, setMinuites }) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/started');
    };

    /*

    useEffect(() => {
        setIsPassage1(true);

        setIsTimer(false);

        setIsTyping(false);
    }, [setIsPassage1, setIsTimer, setIsTyping]);

    */

    return (
        <div className="not-started-screen">
            <main>
                <Header
                    bestWpm={bestWpm}
                    isMobile={isMobile}
                />
                <ScoresNot 
                    isOpenDifficulty={isOpenDifficulty} 
                    setIsOpenDifficulty={setIsOpenDifficulty} 
                    isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty} handleMode={handleMode}
                    isTimer={isTimer} setIsTimer={setIsTimer}
                    isTyping={isTyping}

                    isMobile={isMobile}

                    difficultySelectButton={difficultySelectButton}
                    setDifficultySelectButton={setDifficultySelectButton}
                />

                <div className="blurred-passage-box">
                    <div className="passage-position">

                        <DroppedSelector isOpenDifficulty={isOpenDifficulty} setIsOpenDifficulty={setIsOpenDifficulty} isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty}
                            handleMode={handleMode}
                        />

                        <div
                            className="blurred-passage">
                            <Link to="/started"
                                className="passage-link"
                                onClick={() => {
                                    setIsOpenDifficulty(false);
                                    setIsOpenMode(false);

                                    setUserTyping([]);
                                    setCorrectCharacters([]);
                                    setIndex(0);
                                    setAccuracy(100);

                                    handleNavigate();

                                    setWpmCount(0);

                                    setWrongCharacters(0);
                                    setBackSpaceTimes(0);

                                    setMinuites(0);
                                }}
                            >
                                <Passage
                                    selectedDifficulty={selectedDifficulty}
                                    isTyping={isTyping}

                                    isPassage1={isPassage1}

                                    wrongCharacters={wrongCharacters}
                                    setWrongCharacters={setWrongCharacters}

                                    backSpaceTimes={backSpaceTimes}
                                    setBackSpaceTimes={setBackSpaceTimes}
                                />
                            </Link>
                        </div>

                    </div>

                    <div className="start-typing-button-box">
                        <button className="start-typing-button"
                            onClick={() => {
                                setIsOpenDifficulty(false);
                                setIsOpenMode(false);

                                setUserTyping([]);
                                setCorrectCharacters([]);
                                setIndex(0);
                                setAccuracy(100);

                                handleNavigate();

                                setWpmCount(0);

                                setWrongCharacters(0);
                                setBackSpaceTimes(0);
                                setMinuites(0);
                            }}
                        >
                            <p
                                className="start-typing-button-text">
                                Start Typing Test
                            </p>
                        </button>

                        <p className="start-typing-text">
                            Or click the text and start typing
                        </p>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}
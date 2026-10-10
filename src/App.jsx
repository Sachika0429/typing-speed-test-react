import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NotStarted } from './NotStarted.jsx';
import { TypingScreen } from './TypingScreen.jsx';
import { Result } from './results/Results.jsx';
import { FirstResult } from './results/FirstResults.jsx';
import { BestResult } from './results/BestResults.jsx';

function App() {

    const [isOpenDifficulty, setIsOpenDifficulty] = useState(false);

    const [isOpenMode, setIsOpenMode] = useState(false);

    const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');

    const handleDifficulty = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const [selectedMode, setSelectedMode] = useState('Timed(60s)');

    const handleMode = (event) => {
        setSelectedMode(event.target.value);
    }

    const [isTimer, setIsTimer] = useState(false);

    let testState = "Test Complete!";
    let testAssessment = "Solid run. Keep pushing to beat your high score.";
    let testAgain = "Go Again";

    let isBest = false;

    const [isTyping, setIsTyping] = useState(false);

    const [isPassage1, setIsPassage1] = useState(false);

    const [isForScore, setIsForScore] = useState(false);

    const [isTestEnd, setIsTestEnd] = useState('');

    const [playTimes, setPlayTimes] = useState(() => {
        const saved = localStorage.getItem('playTimes');
        return saved ? Number(saved) : 0;
    });

    const [bestWpm, setBestWpm] = useState(() => {
        const savedBest = localStorage.getItem('bestWpm');
        return savedBest ? Number(savedBest) : 0;
    });

    const [userTyping, setUserTyping] = useState([]);

    const [wpmCount, setWpmCount] = useState(0);

    const [correctCharacters, setCorrectCharacters] = useState([]);

    const [index, setIndex] = useState(0);

    const [accuracy, setAccuracy] = useState(100);

    const [wrongCharacters, setWrongCharacters] = useState(0);

    // const [ifBackSpace, setIfBackSpace] = useState(false);

    const [backSpaceTimes, setBackSpaceTimes] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 960);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [minuites, setMinuites] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={
                        <NotStarted
                            isOpenDifficulty={isOpenDifficulty} setIsOpenDifficulty={setIsOpenDifficulty} isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty} handleMode={handleMode}
                            isTimer={isTimer} setIsTimer={setIsTimer}
                            isTyping={isTyping}
                            setIsTyping={setIsTyping}

                            isPassage1={isPassage1}
                            setIsPassage1={setIsPassage1}

                            bestWpm={bestWpm}

                            setUserTyping={setUserTyping}
                            setCorrectCharacters={setCorrectCharacters}
                            setIndex={setIndex}
                            setAccuracy={setAccuracy}

                            setWpmCount={setWpmCount}

                            wrongCharacters={wrongCharacters}
                            setWrongCharacters={setWrongCharacters}

                            backSpaceTimes={backSpaceTimes}
                            setBackSpaceTimes={setBackSpaceTimes}

                            isMobile={isMobile}
                            setIsMobile={setIsMobile}

                            setMinuites={setMinuites}
                        />
                    }
                />

                <Route path="/started"
                    element={
                        <TypingScreen
                            isOpenDifficulty={isOpenDifficulty} setIsOpenDifficulty={setIsOpenDifficulty} isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} selectedDifficulty={selectedDifficulty} selectedMode={selectedMode} handleDifficulty={handleDifficulty} handleMode={handleMode}
                            isTimer={isTimer} setIsTimer={setIsTimer}
                            isTyping={isTyping}
                            setIsTyping={setIsTyping}

                            isPassage1={isPassage1}
                            setIsPassage1={setIsPassage1}

                            isForScore={isForScore}
                            setIsForScore={setIsForScore}

                            isTestEnd={isTestEnd}
                            setIsTestEnd={setIsTestEnd}

                            playTimes={playTimes}
                            setPlayTimes={setPlayTimes}

                            bestWpm={bestWpm}
                            setBestWpm={setBestWpm}

                            userTyping={userTyping}
                            setUserTyping={setUserTyping}

                            wpmCount={wpmCount}
                            setWpmCount={setWpmCount}

                            correctCharacters={correctCharacters}
                            setCorrectCharacters={setCorrectCharacters}

                            index={index}
                            setIndex={setIndex}

                            accuracy={accuracy}
                            setAccuracy={setAccuracy}

                            wrongCharacters={wrongCharacters}
                            setWrongCharacters={setWrongCharacters}

                            backSpaceTimes={backSpaceTimes}
                            setBackSpaceTimes={setBackSpaceTimes}

                            
                            isMobile={isMobile}
                            setIsMobile={setIsMobile}

                            minuites={minuites}
                            setMinuites={setMinuites}
                        />
                    }
                />

                <Route path="/result"
                    element={
                        <Result
                            testState={testState}
                            testAssessment={testAssessment}
                            testAgain={testAgain}
                            isBest={isBest}
                            setIsTyping={setIsTyping}
                            setIsTimer={setIsTimer}

                            setIsTestEnd={setIsTestEnd}

                            bestWpm={bestWpm}

                            userTyping={userTyping}

                            wpmCount={wpmCount}
                            setWpmCount={setWpmCount}

                            isTestEnd={isTestEnd}

                            accuracy={accuracy}

                            correctCharacters={correctCharacters}
                            wrongCharacters={wrongCharacters}
                            setWrongCharacters={setWrongCharacters}

                            isMobile={isMobile}
                        />
                    }
                />

                <Route path="/first-result"
                    element={
                        <FirstResult
                            setIsTyping={setIsTyping}
                            setIsTimer={setIsTimer}

                            setIsTestEnd={setIsTestEnd}

                            bestWpm={bestWpm}

                            userTyping={userTyping}

                            wpmCount={wpmCount}
                            setWpmCount={setWpmCount}

                            correctCharacters={correctCharacters}
                            wrongCharacters={wrongCharacters}
                            setWrongCharacters={setWrongCharacters}

                            accuracy={accuracy}

                            isMobile={isMobile}
                        />
                    }
                />

                <Route path="/best-result"
                    element={
                        <BestResult
                            isBest={isBest}

                            setIsTyping={setIsTyping}
                            setIsTimer={setIsTimer}

                            setIsTestEnd={setIsTestEnd}

                            bestWpm={bestWpm}

                            userTyping={userTyping}

                            wpmCount={wpmCount}
                            setWpmCount={setWpmCount}

                            correctCharacters={correctCharacters}
                            wrongCharacters={wrongCharacters}
                            setWrongCharacters={setWrongCharacters}

                            accuracy={accuracy}

                            isMobile={isMobile}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
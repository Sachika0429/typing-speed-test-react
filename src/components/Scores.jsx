// import { useState } from 'react';
import { Timer } from '../utils/Timer';
import { Buttons } from './Buttons';
import { WpmCounter } from '../utils/WpmCounter';
import './Scores.css';

export function Scores({ isOpenDifficulty, setIsOpenDifficulty, isOpenMode, setIsOpenMode, selectedDifficulty, selectedMode, isTimer, isForScore, accuracy, userTyping, isTestEnd, setIsTestEnd, wpmCount, setWpmCount, backSpaceTimes, isTyping, isMobile, minuites, setMinuites }) {

    isForScore = true;

    let defaultTime = '00';

    if (selectedMode === 'Timed(60s)') {
        defaultTime = '60';
    }

    // const [wpmCount, setWpmCount] = useState(0);

    return (
        <>
            {isMobile ? (
                <>
                    <div className="current-state">
                        <div className="current-state-box">
                            <p className="title">
                                WPM:
                            </p>

                            <p className="score">
                                <WpmCounter
                                    userTyping={userTyping}
                                    wpmCount={wpmCount}
                                    isTestEnd={isTestEnd}

                                    backSpaceTimes={backSpaceTimes}
                                />
                            </p>
                        </div>

                        <div className="current-state-box">
                            <p className="title">
                                Accuracy:
                            </p>

                            <p className="score accuracy-color">
                                {isForScore
                                    ? accuracy
                                    : 100
                                }
                                %
                            </p>
                        </div>

                        <div className="current-state-box">
                            <p className="title">
                                Time:
                            </p>

                            <p className={isTimer ? "score timer" : "score"}>
                                {minuites}:{
                                    isTimer
                                        ? <Timer
                                            selectedMode={selectedMode}
                                            setWpmCount={setWpmCount}

                                            isTestEnd={isTestEnd}
                                            setIsTestEnd={setIsTestEnd}

                                            minuites={minuites}
                                            setMinuites={setMinuites}
                                        />
                                        : defaultTime
                                }
                            </p>
                        </div>
                    </div>

                    <Buttons
                        setIsOpenDifficulty={setIsOpenDifficulty}
                        isOpenDifficulty={isOpenDifficulty}
                        selectedDifficulty={selectedDifficulty}
                        setIsOpenMode={setIsOpenMode}
                        isOpenMode={isOpenMode}
                        selectedMode={selectedMode}

                        isTyping={isTyping}
                    />
                </>
            ) : (
                <>
                    <div className="current-state-desktop">
                        <div className="current-state-boxes">
                            <div className="current-state-box-desktop">
                                <p className="title">
                                    WPM:
                                </p>

                                <p className="score">
                                    <WpmCounter
                                        userTyping={userTyping}
                                        wpmCount={wpmCount}
                                        isTestEnd={isTestEnd}

                                        backSpaceTimes={backSpaceTimes}
                                    />
                                </p>
                            </div>

                            <div className="current-state-box-desktop">
                                <p className="title">
                                    Accuracy:
                                </p>

                                <p className="score accuracy-color">
                                    {isForScore
                                        ? accuracy
                                        : 100
                                    }
                                    %
                                </p>
                            </div>

                            <div className="current-state-box-desktop">
                                <p className="title">
                                    Time:
                                </p>

                                <p className={isTimer ? "score timer" : "score"}>
                                    {minuites}:{
                                        isTimer
                                            ? <Timer
                                                selectedMode={selectedMode}
                                                setWpmCount={setWpmCount}

                                                isTestEnd={isTestEnd}
                                                setIsTestEnd={setIsTestEnd}

                                                minuites={minuites}
                                                setMinuites={setMinuites}
                                            />
                                            : defaultTime
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="selectors-desktop">
                            <div className="difficulty-selector-desktop">
                                <p>Difficulty:</p>

                                <div className="buttons-desktop">
                                    <button
                                        className={
                                            selectedDifficulty === 'Easy'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Easy
                                    </button>

                                    <button
                                        className={
                                            selectedDifficulty === 'Medium'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Medium
                                    </button>

                                    <button
                                        className={
                                            selectedDifficulty === 'Hard'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Hard
                                    </button>
                                </div>
                            </div>

                            <div className="mode-selector-desktop">
                                <p>Mode:</p>

                                <div className="buttons-desktop">
                                    <button
                                        className={
                                            selectedMode === 'Timed(60s)'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Timed(60s)
                                    </button>

                                    <button
                                        className={
                                            selectedMode === 'Passage'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Passage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
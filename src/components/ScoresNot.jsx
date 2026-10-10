import { Timer } from '../utils/Timer';
import { Buttons } from './Buttons';
import './ScoresNot.css';

export function ScoresNot({ isOpenDifficulty, setIsOpenDifficulty, isOpenMode, setIsOpenMode, selectedDifficulty, selectedMode, isTimer, isTyping, isMobile, handleDifficulty, handleMode }) {

    let defaultTime = '00';

    if (selectedMode === 'Timed(60s)') {
        defaultTime = '60';
    }

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
                                0
                            </p>
                        </div>

                        <div className="current-state-box">
                            <p className="title">
                                Accuracy:
                            </p>

                            <p className="score">
                                100%
                            </p>
                        </div>

                        <div className="current-state-box">
                            <p className="title">
                                Time:
                            </p>

                            <p className={isTimer ? "score timer" : "score"}>
                                0:{
                                    isTimer ? Timer(selectedMode) : defaultTime
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
                                    0
                                </p>
                            </div>

                            <div className="current-state-box-desktop">
                                <p className="title">
                                    Accuracy:
                                </p>

                                <p className="score">
                                    100%
                                </p>
                            </div>

                            <div className="current-state-box-desktop">
                                <p className="title">
                                    Time:
                                </p>

                                <p className={isTimer ? "score timer" : "score"}>
                                    0:{
                                        isTimer ? Timer(selectedMode) : defaultTime
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="selectors-desktop">
                            <div className="difficulty-selector-desktop">
                                <p>Difficulty:</p>

                                <div className="buttons-desktop">
                                    <button
                                        value="Easy"
                                        onClick={handleDifficulty}
                                        className={
                                            selectedDifficulty === 'Easy'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Easy
                                    </button>

                                    <button
                                        value="Medium"
                                        onClick={handleDifficulty}
                                        className={
                                            selectedDifficulty === 'Medium'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Medium
                                    </button>

                                    <button
                                        value="Hard"
                                        onClick={handleDifficulty}
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
                                        value="Timed(60s)"
                                        onClick={handleMode}
                                        className={
                                            selectedMode === 'Timed(60s)'
                                                ? "selected-button"
                                                : ""
                                        }
                                    >
                                        Timed(60s)
                                    </button>

                                    <button
                                        value="Passage"
                                        onClick={handleMode}
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
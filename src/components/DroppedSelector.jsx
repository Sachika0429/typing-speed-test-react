import './DroppedSelector.css';

export function DroppedSelector({ isOpenDifficulty, isOpenMode, selectedDifficulty, selectedMode, handleDifficulty, handleMode }) {
    return (
        <>
            <div className="dropped-selector-box">
                <div className={isOpenDifficulty ? "dropped-difficulty-selector open" : "dropped-difficulty-selector"}>
                    <label>
                        <input type="radio" name="difficulty" value="Easy"
                            checked={selectedDifficulty === 'Easy'}
                            onChange={handleDifficulty} />Easy
                    </label>

                    <label>
                        <input type="radio" name="difficulty"
                            value="Medium"
                            checked={selectedDifficulty === 'Medium'}
                            onChange={handleDifficulty} />Medium
                    </label>

                    <label>
                        <input type="radio" name="difficulty" value="Hard"
                            checked={selectedDifficulty === 'Hard'}
                            onChange={handleDifficulty} />Hard
                    </label>
                </div>

                <div className={isOpenMode ? "dropped-mode-selector open" : "dropped-mode-selector"}>
                    <label>
                        <input type="radio" name="mode" value="Timed(60s)" checked={selectedMode === 'Timed(60s)'} onChange={handleMode} />Timed(60s)
                    </label>

                    <label>
                        <input type="radio" name="mode" value="Passage" checked={selectedMode === 'Passage'} onChange={handleMode} />Passage
                    </label>
                </div>
            </div>
        </>
    )
}
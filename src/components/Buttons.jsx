import './Buttons.css';

export function Buttons({ setIsOpenDifficulty, isOpenDifficulty, selectedDifficulty, setIsOpenMode, isOpenMode, selectedMode, isTyping }) {
    return (
        <div className="buttons">
            <button className="difficulty-selector"
                onClick={() => {
                    if (!isTyping) {
                        setIsOpenDifficulty(!isOpenDifficulty)
                    }
                }}>
                <p>{selectedDifficulty}</p>
                <img src="../images/icon-down-arrow.svg" alt="arrow" className="select-arrow" />
            </button>

            <button className="mode-selector" onClick={() => {
                if (!isTyping) {
                    setIsOpenMode(!isOpenMode)
                }
            }}>
                <p>{selectedMode}</p>
                <img src="../images/icon-down-arrow.svg" alt="arrow" className="select-arrow" />
            </button>
        </div>
    );
}
import { Link } from 'react-router';
import { Header } from '../headers/Header';
import { Footer } from '../footers/Footer';
// import { WpmCounter } from '../utils/WpmCounter';
import './Results.css';

export function Result({ testState, testAssessment, testAgain, isBest, setIsTyping, setIsTimer, setIsTestEnd, bestWpm, isTestEnd, isMobile }) {

    return (
        <div className="result-screen">
            <main>

                <Header 
                    bestWpm={bestWpm}
                    isTestEnd={isTestEnd}

                    isMobile={isMobile}
                />
        
                <div className="complete-img-box">

                    {isBest ? "" : <img src="../../images/pattern-star-2.svg"
                    alt="red-star" className="red-star" />}

                    <img src={isBest ? "../../images/icon-new-pb.svg" : "../../images/icon-completed.svg"}
                    alt="completed-mark" className="completed-image" />
                </div>

                <div className="test-state">
                    <h1>{testState}</h1>
                </div>

                <p className="test-assessment">{testAssessment}</p>

                <div className="score-flex">
                    <div className="score-flex-box">
                        <p className="score-item">WPM:</p>
                        <p className="actual-score">
                            {localStorage.getItem('wpmScore')}
                        </p>
                    </div>

                    <div className="score-flex-box">
                        <p className="score-item">Accuracy:</p>
                        <p className="actual-score score-accuracy">
                            {Number(localStorage.getItem('accuracyScore'))}
                            %
                        </p>
                    </div>

                    <div className="score-flex-box">
                        <p className="score-item">Characters: {/* Correct/Incorrect */}</p>
                        <p className="actual-score">
                            <span className="correct-number">
                                {localStorage.getItem('correctCharacters')}
                            </span>

                            <span className="rate">/</span>

                            <span className="mistype-number">
                                {localStorage.getItem('wrongCharacters')}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="test-again-box">
                    <Link
                        to="/"
                        className="test-again"
                        onClick={() => {
                            setIsTyping(false);
                            setIsTimer(false);
                            setIsTestEnd('');
                        }}
                    >
                        {testAgain}
                    </Link>

                    <img src="../../images/icon-restart-black.svg" alt="restart-icon" className="restart-icon-link" />  
                </div>

                <div className="yellow-star-box">

                    {isBest ? "" : <img src="../../images/pattern-star-1.svg" alt="yellow-star" 
                    className="yellow-star" />}

                    {isBest ? <img src="../../images/pattern-confetti.svg"
                    className="color-paper"
                    alt="color-papers" /> : ""}

                </div> 

            </main>

            <Footer />
        </div>
    )
}
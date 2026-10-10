import { Result } from './Results';
import './BestResults.css';

export function BestResult({ testState, testAssessment, testAgain, isBest, setIsTyping, setIsTimer, setIsTestEnd, bestWpm, userTyping, wpmCount, setWpmCount, correctCharacters, wrongCharacters, setWrongCharacters, accuracy, isMobile }) {

    testState = "High Score Smashed!";
    testAssessment = "You're getting faster. That was incredible typing.";
    testAgain = isMobile ? "Go Again" : "Beat This Score";

    isBest = true;

    return (
        <div className="best-result">
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

                correctCharacters={correctCharacters}
                wrongCharacters={wrongCharacters}
                setWrongCharacters={setWrongCharacters}

                accuracy={accuracy}

                isMobile={isMobile}
            />
        </div>
    )
}
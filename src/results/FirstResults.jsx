import { Result } from './Results';
import './FirstResults.css';

export function FirstResult({ testState, testAssessment, testAgain, setIsTyping, setIsTimer, setIsTestEnd, bestWpm, userTyping, wpmCount, setWpmCount, correctCharacters, wrongCharacters, setWrongCharacters, accuracy, isMobile }) {

    testState = "Baseline Established!";
    testAssessment = "You've set the bar. Now the real challenge begins―time to beat it.";
    testAgain = "Beat This Score";

    return (
        <div className="first-test">
            <Result 
                testState={testState}
                testAssessment={testAssessment}
                testAgain={testAgain} 

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
import { useState, useEffect, useRef } from 'react';
import { AddClassName } from '../utils/AddClassName';
import './Passage.css';
import data from '../../data.json';

export function Passage({ selectedDifficulty, isTyping, setAccuracy, userTyping, setUserTyping, isTestEnd, setIsTestEnd, correctCharacters, setCorrectCharacters, wrongCharacters, setWrongCharacters, index, setIndex, setBackSpaceTimes }) {

    const difficulty = selectedDifficulty.toLowerCase();

    const selectDifficultyOfPassage = data[difficulty];

    const [randomIndex] = useState(
        () => Math.floor(Math.random() * selectDifficultyOfPassage.length)
    );

    const randomPassage = selectDifficultyOfPassage[randomIndex];

    const passageText = randomPassage.text;

    const passageArray = passageText.split("");

    const typingTextRef = useRef(null);

    const backSpaceTimesRef = useRef(0);

    useEffect(() => {

        if (isTyping) {

            const handleKeyDown = (event) => {
                if (isTestEnd === 'end') {
                    return;
                }

                if (event.key === 'Backspace' && userTyping.length > 0) {
                    backSpaceTimesRef.current += 1;
                    setBackSpaceTimes(backSpaceTimesRef.current);
                    setUserTyping((previous) => previous.slice(0, -1));
                    setIndex(index - 1);
                    return;
                }

                if (!/^[a-zA-Z,. ]$/.test(event.key)) {
                    event.preventDefault();
                    return;
                }

                event.preventDefault();

                const newUserTyping = [...userTyping, event.key];
                const isCorrect = event.key === passageArray[index].toLowerCase();

                if (backSpaceTimesRef.current > 0) {
                    backSpaceTimesRef.current -= 1;
                    setBackSpaceTimes(backSpaceTimesRef.current);
                }

                if (isCorrect) {
                    setCorrectCharacters((previous) => [...previous, event.key]);
                } else {
                    setWrongCharacters((previous) => previous + 1);
                }

                const nextCorrectCount = correctCharacters.length + (isCorrect ? 1 : 0);
                const nextWrongCount = wrongCharacters + (isCorrect ? 0 : 1);
                setAccuracy(
                    Math.round(
                        nextCorrectCount / (nextCorrectCount + nextWrongCount) * 100
                    )
                );

                setUserTyping(newUserTyping);

                if (index < passageArray.length - 1) {
                    setIndex(index + 1);
                }

            };

            document.body.addEventListener('keydown', handleKeyDown);

            return () => {
                document.body.removeEventListener('keydown', handleKeyDown);
            };
        }

    }, [userTyping, passageArray, isTyping, isTestEnd, correctCharacters, wrongCharacters, index, setAccuracy, setUserTyping]);

    useEffect(() => {
        if (isTyping && typingTextRef.current) {
            typingTextRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [index, isTyping]);

    useEffect(() => {
        if (isTyping && userTyping.length === passageArray.length) {
            setIsTestEnd('end');
        }
    }, [userTyping, isTyping, passageArray, isTestEnd, setIsTestEnd]);

    return (
        <>
            <div className="passage-box">

                <p className="passage-user-typing">
                    {passageArray.map((character, indexMap) => (
                        <span
                            key={indexMap}
                            className={
                                AddClassName(isTyping, userTyping, character, indexMap)
                            }

                            ref={index === indexMap ? typingTextRef : null}
                        >
                            {character}
                        </span>
                    )
                    )}
                </p>

            </div>
        </>
    )
}
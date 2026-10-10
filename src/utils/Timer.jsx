import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export function Timer({ selectedMode, setWpmCount, isTestEnd, setIsTestEnd, setMinuites }) {

    const [time, setTime] = useState(
        selectedMode === 'Timed(60s)'
            ? 60
            : 0
    );

    const navigate = useNavigate();

    // const [wpmCount, setWpmCount] = useState(0);

    useEffect(() => {

        if (selectedMode === 'Timed(60s)') {

            if (time === 0) {

                setIsTestEnd('end');

                /*
                const timeout = setTimeout(() => {
                    navigate("/result");
                }, 1500);

                return () => clearTimeout(timeout);
                */

                return;
            }

            const interval = setInterval(() => {

                setWpmCount((prevTime) => prevTime + 1);

                setTime((prevTime) => {

                    if (prevTime <= 1) {
                        clearInterval(interval);
                        return 0;
                    }

                    // setWpmCount((prevTime) => prevTime + 1);

                    return prevTime - 1

                });
            }, 1000);

            return () => clearInterval(interval);

        } else {

            const interval = setInterval(() => {

                if (time === 59) {
                    setMinuites((prevMinuites) => prevMinuites + 1);
                    setTime(0);
                    setWpmCount((prevTime) => prevTime + 1);

                    return;
                }

                setTime((prevTime) => prevTime + 1);

                setWpmCount((prevTime) => prevTime + 1);

            }, 1000);

            return () => clearInterval(interval);
        }

    }, [selectedMode, navigate, setWpmCount, time, isTestEnd, setIsTestEnd]);


    return <>{time >= 10 ? time : "0" + time}</>
}
export function WpmCounter({ userTyping, wpmCount, isTestEnd }) {
    /*
    if (backSpaceTimes > 0) {
        return;
    } 
    */

    // const [wpm, setWpm] = useState(0);


    const wpm = Math.round((userTyping.length / 5) / (wpmCount / 60));

    if (isTestEnd === '') {
        localStorage.setItem('wpmScore', wpm);
    }

    /*
    useEffect(() => {
        setWpm(prev => {
            if (backSpaceTimes > 0) {
                return prev;
            } else {
                return Math.round((userTyping.length / 5) / (wpmCount / 60));
            }
        });
    }, [userTyping, backSpaceTimes, wpmCount]);
    */



    if (wpmCount === 0) {
        return <>0</>
    } else {
        return <>{wpm}</>
    }
}

/* 

☆問題...
・Passage.jsxでは、課題文とユーザーが打った数が一致する（＝入力が終わる）とisEndを'end'に設定。
・TypingScreen.jsxでは、isEndがEndの時に、wpmScoreに保存された値をbestWpmにセットして、画面遷移する。
・一方、WpmCounterでは、一文字打つたびにwpmScoreに値を保存しており、最新の値を常に更新し続けている。
→headerのbestWpmが、resultに表示されるwpmよりも常に小さい値になってしまっている。本来は同じじゃないとおかしい。

予想される原因...たぶん、isEndがendになったあとも、wpmCounterは動いているんだと思う。一方、isEndがendになった後に動くTypingScreenのUseEffectは、isEndがendになった時点でのwpmをとってるから、スコアにずれが出てしまっている。

【解決策】isTestEndが空のときのみ、localStorageにwpmをセットするようにする

*/


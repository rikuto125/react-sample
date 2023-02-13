import {useEffect, useLayoutEffect, useState} from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCATE = 'KEY_LOCATE';

enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFormString = (text : string) => {
    switch (text) {
        case Locale.US:
            return Locale.US;
        case Locale.JP:
            return Locale.JP;
        default:
            return Locale.US;
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)


    //timerのセットをするための副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)
        return () => {
            clearInterval(timer)
        }
    }, [])


    //ローカルストレージからロケールを取得する
    //useLayoutEffectはuseEffectと同じように副作用を実行するが、レンダリングが完了する前に実行される
    //useEffectではUSが一瞬表示されるが、useLayoutEffectでは表示されない
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCATE)
        if (savedLocale !== null) {
            setLocale(getLocaleFormString(savedLocale))
        }
    }, [])

    //localが変更されたらローカルストレージに保存する
    useEffect(() => {
        localStorage.setItem(KEY_LOCATE, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleTimeString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFormString(e.target.value))}>
                    <option value="en-US">US</option>
                    <option value="ja-JP">JP</option>
                </select>
            </p>
        </div>
    )
}


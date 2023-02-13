import {memo, useState} from "react";


type FizzProps = {
    isFizz: boolean;
}

//Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される

const Fizz = (props: FizzProps) => {
    const {isFizz} = props;
    console.log(`Fizz が再描画されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean;
}

//Buzzはmemo化された関数コンポーネント
// isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
//親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props;
    console.log(`Buzz が再描画されました, isBuzz=${isBuzz}`)
    return <span>{isBuzz ? 'Buzz' : ''}</span>
})

export const Parent = () => {
    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    console.log(`Parent が再描画されました`)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count up +1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <Fizz isFizz={isFizz} />
            <Buzz isBuzz={isBuzz} />
        </div>
    )
}

export default Parent;
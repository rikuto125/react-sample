import React from "react";

//以下のコード例では、
// Pageコンポーネントから孫コンポーネントのTitleコンポーネントへContextを使って文字列を渡しています。
// このように1段ずつpropsの受け渡しをしなくても、データを子孫要素へ渡すことができます。


    const TitleContext = React.createContext('');
const Title = () => {
    //Consumerを使って、Contextの値を参照します
    return (
        <TitleContext.Consumer>
            {/*Consumer直下に関数を置いて、Contextの値を参照します*/}
            {(title)=>{
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/*HeaderからTitleへは何もデータを渡しません*/}
            <Title />
        </div>
    )
}

const Page = () => {
    const title = 'React Context Sample';

    return (
        <TitleContext.Provider value={title}>
            {/*Providerを使って、Contextに値を渡します*/}
            <Header />
        </TitleContext.Provider>
    )
}

export default Page;
//Containerは赤背景のボックスの中にタイトルと子要素を表示します
import React from "react";

//containerの型
type ContainerProps = {
    title:string;
    children:React.ReactNode;
}

const Container= (props: ContainerProps) => {
    const {title, children} = props;

    return (
        <div style={{backgroundColor:'red', padding:'16px'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title={"Hello"}>
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent;
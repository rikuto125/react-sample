//Containerは赤背景のボックスの中にタイトルと子要素を表示します
import React from "react";

const Container= (props: {
    title:string;
    children:React.ReactNode;
}) => {
    const {title, children} = props;

    return (
        <div style={{backgroundColor:'red', padding:'16px'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title={"Hello"}>
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent;
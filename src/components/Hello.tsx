const Hello = () => {
    const onClick = () => {
        alert('Hello, world!')
    }
    const text = 'Hello, world!'

return (
    <div onClick={onClick}>
        {text}
    </div>
    )
}

export default Hello
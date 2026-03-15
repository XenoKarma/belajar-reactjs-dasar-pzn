import './HelloWorld.css';

export default function HelloWorld() {
    const props = {
        text: "Hello World from spread syntax"
    }
    return (
        <>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </>
    )
}

function HeaderHelloWorld({text = "Ups, something went wrong"}) {
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld({text = "Ups, something went wrong"}) {
    return (
        <p className="content">{text.toLowerCase()}</p>
    )
}
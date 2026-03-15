import Row from "./Row";

export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row text="Item 1" id="1" />
                <Row text="Item 2" id="2" />
                <Row text="Item 3" id="3" />
            </tbody>
        </table>
    )
}
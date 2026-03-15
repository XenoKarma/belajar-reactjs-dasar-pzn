import Todo from "./Todo";

export default function TodoList() {
    const todo = [
        {
            id: 0,
            text : "Learn HTML",
            isCompleted: true
        },
        {
            id: 1,
            text : "Learn CSS",
            isCompleted: false
        },
        {
            id: 2,
            text : "Learn JavaScript",
            isCompleted: true
        },
        {
            id: 3,
            text: "Learn ReactJS",
            isCompleted: false
        }
    ]

    return (
        <ul>
            {todo.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            })}
        </ul>
    )
}
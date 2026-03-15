import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import Button from "../button/Button";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";
import AlertButton from "../button/AlertButton";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList />
            <Table />
            <AlertButton />
            <Button text="Click Me!" message="Button clicked!" />

            <MyButton text="Smash Me" onSmash={()=> alert("You smash me")} />

            <Toolbar onClick={(e) => {
                e.stopPropagation();
                alert("You click toolbar");
            }} />

            <SearchForm />

            <SayHelloForm />
            <Counter />

        </Container>
    </StrictMode>
);
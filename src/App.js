import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";

function App() {
    const numbers = [2, 3, 4, 5, "assdad"]
    const todos = [{id: 1, name: "walking", isDone: true}, {id: 2, name: "coding", isDone: false}]
    let todoLI = todos.map(todo => <li>{todo}</li>);
    return <div>
        <NumberList numbers={numbers}/>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.name} : {todo.isDone ? 'DONE' : ''}
                </li>
            ))}
        </ul>
    </div>
}

export default App;

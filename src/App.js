import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";

function App() {
    return <div>
        <LoginControl hasNewMessage credit={100}/>
    </div>
}

export default App;

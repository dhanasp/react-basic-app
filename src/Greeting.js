import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";


export default function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeting></UserGreeting>
    } else {
        return <GuestGreeting></GuestGreeting>
    }
}

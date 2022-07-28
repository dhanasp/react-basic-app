import Message from "./Message"
export default function Welcome(props) {
    return <div>
        <h1>Hello {props.name}</h1>
        <Message message="React is great" ></Message>  
    </div>
}
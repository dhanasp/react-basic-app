export default function NumberList(props) {
    return <ul>{props.numbers.map(
        (number, index) => (<li key={index}>{number}</li>)
    )}</ul>

}

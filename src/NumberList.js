export default function NumberList(props) {
    const numbers = [1, 2, 3];
    const listItems = numbers.map(number => (<li>{number}</li>));
    return <ul>{listItems}</ul>
}

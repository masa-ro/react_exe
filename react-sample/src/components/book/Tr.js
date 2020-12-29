function Tr(props){
    return (
        <tr key={props.club.id}>
            <td>{props.club.title}</td>
            <td>{props.club.shaft}</td>
            <td>{props.club.price}</td>
        </tr>
    );
}

export default Tr;
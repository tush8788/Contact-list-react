let ContactList = (props) => {
    let { contacts } = props;

    return (
        <div>
            <ul>
                {contacts.map(data => (
                    <li key={data.id}> 
                        <p>{data.name}</p>
                        <p>{data.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;
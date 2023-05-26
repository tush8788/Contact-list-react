let ContactList = (props) => {
    let { contacts , onDeleteContact} = props;

    return (
        <div>
            <ul>
                {contacts.map(data => (
                    <li key={data.id}> 
                        <p>{data.name}</p>
                        <p>{data.phone}</p>
                        <p onClick={()=>{ onDeleteContact({data})}}>Delete</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;
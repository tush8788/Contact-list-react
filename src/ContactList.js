let ContactList = (props) => {
    // {props.map((elem)=>{
    //     <li>{elem}</li>
    // })}
    let { contacts } = props;
    // console.log(props.contacts)
    // let list =contacts.map((elem)=>{
    //     return <li>{elem.name}</li>
    // })
    console.log(contacts);
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
let ContactList = (props) => {
    let { contacts, onDeleteContact } = props;

    return (
        <div className="continerDiv">
            <div className="contact-container">
                <ol className="list-group list-group-numbered">
                    {/* show all contacts */}
                    {contacts.map(data => (
                        <li key={data.id} className="list-group-item d-flex justify-content-between align-items-start list-group-item-action list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{data.name}</div>
                        {data.phone}
                        </div>
                        <span style={{cursor:"pointer"}} onClick={() => { onDeleteContact({ data }) }} className="badge bg-primary rounded-pill">X</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ContactList;
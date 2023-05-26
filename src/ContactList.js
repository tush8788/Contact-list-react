let ContactList = (props) => {
    let { contacts, onDeleteContact } = props;

    return (
        <div className="continerDiv">
            <div className="contact-container">
                <ol class="list-group list-group-numbered">
                    {contacts.map(data => (
                        <li key={data.id} class="list-group-item d-flex justify-content-between align-items-start list-group-item-action list-group-item-light">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">{data.name}</div>
                        {data.phone}
                        </div>
                        <span style={{cursor:"pointer"}} onClick={() => { onDeleteContact({ data }) }} class="badge bg-primary rounded-pill">X</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ContactList;
let NewContact = (props) => {
    
    let { onNewContact } = props;

    return (
        <div className="continerDiv">
            <div className="form-container">
            <center><h3><b>Add <span style={{color:"red"}}>Contact</span></b></h3></center> <br/>     
                {/* contact list form */}
                <form method="post" onSubmit={(e) => { onNewContact(e) }}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" placeholder="Enter Name" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone No</label>
                        <input type="number" placeholder="Enter Phone No" name="phone" className="form-control" required/>
                    </div>
                    <center><button type="submit" className="submit-btn btn btn-dark btn-outline-danger">Add Contact</button></center>
                </form>
            </div>
        </div>
    )
}

export default NewContact;
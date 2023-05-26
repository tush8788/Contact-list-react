
let NewContact = (props) => {

    let { onNewContact } = props;

    return (
        <div className="continerDiv">
            <div className="form-container">
            <center><h3><b>Add Contact</b></h3></center> <br/>     
                <form method="post" onSubmit={(e) => { onNewContact(e) }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name="name" placeholder="Enter Name" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone No</label>
                        <input type="number" placeholder="Enter Phone No" minLength={0} maxLength={10} name="phone" class="form-control" id="exampleInputPassword1" required />
                    </div>
                    <center><button type="submit" class="submit-btn btn btn-dark btn-outline-warning">Add Contact</button></center>
                </form>
            </div>
        </div>
    )
}

export default NewContact;
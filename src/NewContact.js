
let NewContact = (props) => {

    let {onNewContact} = props;

    return(
        <div>
            <form method="post" onSubmit={(e)=>{onNewContact(e)}}>
                <input type="text" name="name" placeholder="Enter Name" required/>
                <input type="number" name="phone" placeholder="Enter Phone" required/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default NewContact;
let NewContact = (props) => {
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter Name"/>
                <input type="number" placeholder="Enter Phone"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default NewContact;
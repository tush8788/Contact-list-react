import React from "react";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: [{
        id: 1,
        name: "Test",
        phone: 1234567890
      }]
    }
  }

  //add new contact
  addNewContact = (e) => {

    e.preventDefault();
    //get state
    let { contact } = this.state;

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('https://jsonplaceholder.typicode.com/users', { method: form.method, body: formData });

    //  // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    //adding unique id 
    formJson.id = Date.now();

    //add in front of array
    contact.unshift(formJson);

    //set state 
    this.setState({
      contact
    })
  }

  // delete contact
  deleteContact = (contactid) =>{
      let {data} = contactid;

      const {contact} = this.state;

      let index = contact.indexOf(data);
      
      contact.splice(index,1);

      this.setState({
        contact
      })
      
  }

  //render
  render() {
    return (
      <div className="App">
        <NewContact className="continerDiv" onNewContact={this.addNewContact} />
        <ContactList className="continerDiv" contacts={this.state.contact} onDeleteContact={this.deleteContact}/>
      </div>
    )
  }

  // coponent did mount 
  componentDidMount() {
    // fetch data 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          contact: data
        })
      })
  }

}

export default App;
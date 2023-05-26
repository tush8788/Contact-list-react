import React from "react";
import ContactList from "./ContactList";
import NewContact from "./NewContact";

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
  addNewContact = (e)=>{

     e.preventDefault();
    
     let {contact} = this.state;
   
     // Read the form data
     const form = e.target;
     const formData = new FormData(form);
   
     // You can pass formData as a fetch body directly:
     fetch('https://jsonplaceholder.typicode.com/users', { method: form.method, body: formData });
   
    //  // You can generate a URL out of it, as the browser does by default:
    //  console.log(new URLSearchParams(formData).toString());
    //  // You can work with it as a plain object.
     const formJson = Object.fromEntries(formData.entries());

     formJson.id=Date.now();
    
     console.log(formJson); // (!) This doesn't include multiple select values
     // Or you can get an array of name-value pairs.
    //  console.log([...formData.entries()]);
    
    contact.unshift(formJson);
    
    this.setState({
      contact
    })
  }

  //render
  render() {
    return (
      <div className="App">
        hello
        <NewContact onNewContact={this.addNewContact}/>
        <ContactList contacts={this.state.contact} />
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

import React from "react";
import ContactList from "./ContactList";

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

  //render
  render() {
    return (
      <div className="App">
        hello
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

import React from "react";
import ContactList from "./ContactList";

// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: [{
        id:1,
        name: "Test",
        phone: 1234567890
      },
      {
        id:2,
        name: "Test-1",
        phone: 9987654321
      },
      ]
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

}
export default App;

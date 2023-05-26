import React from "react";

// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state={
      contact:[{
        name:"Test",
        phone:1234567890
      }]
    }
  }

  //render
  render(){
    return (
      <div className="App">
         hello
      </div>
    )
  }

}
export default App;

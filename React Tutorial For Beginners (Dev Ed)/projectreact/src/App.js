import React from "react";
// import Hello from "./sayHello"
import Tweet from "./Tweet"
import "./App.css"


// function App() {
//   var counter = 0;
//   const sayHello = () => {
//     counter = counter+1;
//     console.log("hey" + counter);
//   };
//   return (
//     <div>
//       <button onClick={sayHello}>Hello React</button>
//       <h1>This is the app component</h1>
//       <Hello/>
//     </div>
//   );
// }


function App() {
  return (
    <div className="app">
      <Tweet name="Dev Ed" message="This is a random tweer"/>
      <Tweet name="John Snow" message="Oi mate"/>
      <Tweet name="Master Chief" message="I need a weapon"/>
      <Tweet name="Captain Keyes" message="AAUHEHERHHHH"/>
    </div>
  );
}

export default App;
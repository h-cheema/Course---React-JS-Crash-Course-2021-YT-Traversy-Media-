import React, {useState} from "react";
import "./App.css"
import Tweet from "./Tweet";
// import Hello from "./sayHello"


function App() {

  const [users, setUsers] = useState([
    {name: 'Ed', message: "Hello there."},
    {name: 'Bob', message: "Lemme build yo house reallll quick."},
    {name: 'Cortana', message: "This cave is not a natural formation :O SOMEONE BUILT IT. IM LOOKING AT YOU BOB"},
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="app">
//       <Tweet name="Dev Ed" message="This is a random tweer"/>
//       <Tweet name="John Snow" message="Oi mate"/>
//       <Tweet name="Master Chief" message="I need a weapon"/>
//       <Tweet name="Captain Keyes" message="AAUHEHERHHHH"/>
//     </div>
//   );
// }


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


// function App() {

//   const [isRed, setRed] = useState(false);
//   const [count, setCount] = useState(0)

//   // const [user, setUser] = useState({
//   //   name: 'Harj',
//   //   age: 225,
//   //   posts: ['my first post', 'my 23984327th post']
//   // });

//   const increment = () => {
//     setCount(count + 1);
//     setRed(!isRed)
//   }

//   return (
//     <div className="app">
//       <h1 className={isRed ? "red" : ""}>Change my color!</h1>
//       <button onClick={increment}>Increment</button>
//       <h1>{count}</h1>
//     </div>
//   );
// }
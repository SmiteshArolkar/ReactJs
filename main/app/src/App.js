import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);//sets counter to 0 

  const increaseByOne = () => setCounter(counter + 1);//event handler
  const decreaseByOne = () => setCounter(counter - 1);//event handler
  const setToZero = () => setCounter(0);//event handler

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

// const Hello = (props) => {
//   const born_year = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - props.age;
//   };
//   return (
//     <div>
//       <p>
//         Hello {props.name} You are {props.age} old.
//       </p>
//       <p>So you were born in {born_year()}</p>
//     </div>
//   );
// };

// const Footer = (props) => {
//   return (
//     <div>
//       <h4>
//         Page Created By Smitesh Repo
//         <a href={props.link}> Link</a>
//       </h4>
//     </div>
//   );
// };

// //event handler

// const handleCheck = () => {
//   console.log("clicked");
// };

export default App;


import { useState } from "react";
import "./App.css";


function App(props) {
  //Data
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const repo = "https://github.com/SmiteshArolkar/ReactJs"
  const [counter ,setCounter ] = useState(0);

  setTimeout(() => setCounter(counter+1),2000)
  
  return (
    <div className="App">
      {counter}
    </div>
  
  );
}

const Hello = (props) => {
  const born_year = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name} You are {props.age} old.</p>
      <p>So you were born in {born_year()}</p>
    </div>
  );
};

const Footer = (props) => {
  
  return (
    <div>
      <h4>
        Page Created By Smitesh Repo  
        <a href = {props.link} > Link</a>
      </h4>
    </div>
  )
}

export default App;

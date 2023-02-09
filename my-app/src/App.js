import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Name");
  const inputRef = React.useRef(null);

  const changeName = (value) => {
    console.log(value.target.value);
    setName(value.target.value)
  };
  return (
    <>
      <div>
        <h1>{name}</h1>
        <input
          type="text"
          ref={inputRef}
          id="user-name"
          placeholder="Enter Name"
          onChange={changeName}
        ></input>
      </div>
    </>
  );
};

export default App;

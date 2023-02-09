import logo from "./logo.svg";
import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Name");
  const inputRef = useRef(null);
  const changeName = (value) => {
    // console.log(value.target.value);
    setName(value.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    Name(inputRef.current.value)
  };

  const dummyPromise = (name) => {
    return new Promise((resolve, reject) => {
      if (name == "abcde") {
        resolve("Success");
      } else {
        reject("Error");
      }
    });
  };

  async function Name(name) {
    await dummyPromise(name)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const submittoApi = async (name) => {

  }
  return (
    <>
      <div>
        <h2>Titlle</h2>
        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <h1 style={{ textAlign: "center" }}>{name}</h1>
          <input
            type="text"
            id="user-name"
            placeholder="Enter Name"
            ref={inputRef}
            onChange={changeName}
            style={{ margin: "20px", padding: "10px" }}
          ></input>
          <button
            style={{
              backgroundColor: "green",
              padding: "10px",
              margin: "20px",
              color: "white",
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default App;

import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Post from "./post";

const Child = (props) => {
  const [name, setName] = useState("Name");
  const inputRef = useRef(null);
  const changeName = (value) => {
    // console.log(value.target.value);
    setName(value.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    Name(inputRef.current.value);
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

  const submittoApi = async (name) => {};
  return (
    <>
      <div>
        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <h1 style={{ textAlign: "center" }}>{props.title}</h1>
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
const App = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading,setisLoading] = useState(true);
  const dataFetcher = async (url) => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setisLoading(false);
      });
  };

  useEffect(() => {
    dataFetcher("https://jsonplaceholder.typicode.com/posts");
  },[]);

  return (
    <>
      {/* <Child title="Login"></Child>
      <Child title="Login2"></Child> */}
      {isLoading ? <div>Loading...</div>: (posts.map((val,key) => {
        console.log(val.title);
        <Post title = {val.title} body = {val.body} key = {key}/>
      }))}
    </>
  );
};

export default App;

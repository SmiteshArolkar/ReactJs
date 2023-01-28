import logo from "./logo.svg";
import "./App.css";

function App() {
  //Data
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const repo = "https://github.com/SmiteshArolkar/ReactJs"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Bull" age = {a}/>
      <Footer link = {repo}/>
    </div>
  
  );
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} You are {props.age} old.</p>
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

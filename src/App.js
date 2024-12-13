import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import Output from "./Components/Output/Output";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState([]);
  const inputHandler = (data) => {
    setOutput((prevData) => {
      return [...prevData, data];
    });
  };
  console.log(output, "output");
  return (
    <div className="App">
      <UserInput inputHandler={inputHandler} setOutput={setOutput} />
      {!output.length && (
        <p className="IFNODATA">Please enter username and age.</p>
      )}
      {output.length && <Output output={output} />}
    </div>
  );
}

export default App;

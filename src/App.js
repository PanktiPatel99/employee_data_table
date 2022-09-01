import React from "react";
import "./App.css";
import Employee from "./Components/Employee";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Employees List</header>
      <div>
        <Employee />
      </div>
    </div>
  );
};

export default App;

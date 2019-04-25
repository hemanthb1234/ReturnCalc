import React, { Component } from 'react';
import './App.css';
import Main from "./Module/Main.js";

class App extends Component {
render(){
  return(
  <div className="container center">
  <nav className="menu">
      <h1 className="menu__logo"> Return on Investment Calculator</h1>
    <div>
      <Main/>
    </div>
  </nav>
</div>

  );
}
}
export default App;
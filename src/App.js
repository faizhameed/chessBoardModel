
import './App.css';
import React, { Component } from 'react';

import Chess from './Chess';
import Bordertext from './components/Bordertext';

class App extends Component {
  state = {  }

  render() { 

    return (
    <div className="App">
    <header className="App-header">
      <div className="container">
      <h1>Chess Board</h1>
      <p>Each chess square has unique key given to it by using map function</p>

      </div>
    </header>
    <Bordertext/>
     <Chess/>
  </div>  );
  }
}
 

export default App;

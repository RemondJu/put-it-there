import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hola mundo!
        </Button>
        <Button variant="contained" color="primary">
          Hello world!
        </Button>
      </div>
    );
  }
}

export default App;

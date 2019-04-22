import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage'
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
}

export default App;

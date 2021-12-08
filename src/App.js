// dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Nav/index'

// components


function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;

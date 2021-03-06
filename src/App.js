import React from 'react'
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

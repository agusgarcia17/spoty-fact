import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Detail from './Detail';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/detail" exact component={Detail}/>
     </Router>
      
    );
  }
}

export default App;

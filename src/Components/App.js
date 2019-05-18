import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Detail from './Detail';
import Playlists from './Playlists';
import PlaylistDetail from './PlaylistDetail';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/detail" exact component={Detail}/>
      <Route path="/signup" exact component={SignUp}/>
      <Route path="/signin" exact component={SignIn}/>
      <Route path="/playlists" exact component={Playlists}/>
      <Route path="/playlists/:id" exact component={PlaylistDetail}/>
     </Router>
      
    );
  }
}

export default App;

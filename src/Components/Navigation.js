import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li><Link to='/detail'>Detail</Link></li>
                  <li><Link to='/'>Browse</Link></li>
                  <li><Link to='/'>Playlist</Link></li>
                </ul>
      </div>
    );
  }
}
export default Navigation;
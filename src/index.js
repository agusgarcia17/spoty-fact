import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let initialState = {
    appTitle: 'SpotyTrucho',
    items: [],
    playlists: [],
    profile: {},
    currentPlaylist:[]
}

let store = createStore(function(state = initialState, action){
    if (action.type === 'FETCH_ITEMS'){
        state = {
            ...state,
            items: action.payload,
        }
    }
    if (action.type === 'ADD_TO_PLAYLIST'){
        state = {
            ...state,
            currentPlaylist: state.currentPlaylist.concat(action.payload)
        }
    }
    return state
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

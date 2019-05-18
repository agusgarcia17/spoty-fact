import React, {Component} from 'react';
import {getPlaylist} from '../request';

class PlaylistDetail extends Component{

    constructor(props){
        super(props)
        this.state ={
            playlist: {}
        }   
    }

    componentWillMount(){
        getPlaylist(this.props.match.params.id)
            .then(res => this.setState({playlist:res.data}))
    }

render(){     
    return( 
        <div className='PlaylistDetail'>
            <h1>Detalle de la Playlist: {this.state.playlist.name}</h1>
        </div>
    )
}
}
export default PlaylistDetail;
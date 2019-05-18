import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


class Playlist extends Component {

    render() {
        var total = [0]
        this.props.songs.map((song, i) => total.push(song.length))
        var duration = total.reduce(function(a, b){ return a + b; })
        return (
            <div>
                <h3 className="playlist-title">Playlist</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Songs</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.songs.map((song, i) => <tr key={i}><td>{i}</td><td>{song.title}</td>
                        <td>{song.length}</td></tr>)}
                    </tbody>
                </Table>
                <p><b>Duration: {duration} </b></p>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        songs: state.currentPlaylist
    }
}

export default connect(mapStateToProps)(Playlist);
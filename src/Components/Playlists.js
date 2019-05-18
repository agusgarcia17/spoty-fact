import React, {Component} from 'react';
import {getPlaylists, newPlaylist} from '../request';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';


class Playlists extends Component{

    constructor(props){
        super(props)

        this.state= {
            playlists: [],
            form:{
                name: ""
            }
        }
    }

    componentWillMount(){
        getPlaylists()
            .then(res => this.setState({playlists: res.data}))
    }

    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({
            form:{
                name: e.target.value
            }
        })
        }

    handleSubmit = (e) => {
        e.preventDefault()
        newPlaylist(this.state.form.name)
            .then(res => {
                this.setState({
                    playlists: this.state.playlists.concat(res.data)
                })
            })
    }

render(){     
    return( 
        <div className='Playlists'>
            <h1>Playlists</h1>

            <p>{this.state.playlists.length}</p>

            {this.state.playlists.map((p) => {
                return(
                    <Link key={p.id} to={`/playlists/${p.id}`}>
                        <p >{p.name}</p>
                    </Link>
                )
            })}

            <form  onSubmit={this.handleSubmit}> 
                <div>
                    <input type="text" placeholder="Nombre" name="name"
                    value={this.state.form.name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <Button className="btn-playlists" outline color="success">New Playlists</Button>
                </div>
            </form>
        </div>
    )
}
}
export default Playlists;
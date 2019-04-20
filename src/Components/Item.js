import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import {connect} from 'react-redux';


class Item extends Component{
  constructor(props){
    super(props)

    this.state={
      added:false
    }
  }

  handleClick = () =>{
    this.setState({added: !this.state.added})
    this.props.addToPlaylist()
  }

render(){
  return (
    <Card>
      <CardImg top width="100%" src={this.props.data.cover.src} alt={this.props.data.cover.alt}/>
      <CardBody>
        <CardTitle>{this.props.data.title}</CardTitle>
        <CardSubtitle>{this.props.data.subtitle}</CardSubtitle>
        <CardText>{this.props.data.desc}</CardText>
{
  this.state.added ? 
        <button className="btn btn-success"> Agregado!</button> :
        <Button onClick={this.handleClick}>Add to Playlist</Button>
}
      </CardBody>
    </Card>
);
}}


let mapDispatchToProps = (dispatch, props) => {
  return {
    addToPlaylist:() =>{
      dispatch({type: 'ADD_TO_PLAYLIST', payload: props.data})
    }
  }
}

export default connect(null, mapDispatchToProps)(Item);
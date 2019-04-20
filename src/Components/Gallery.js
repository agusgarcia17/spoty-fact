import React, {Component }from 'react';
import Item from './Item';
import { CardDeck } from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';

class Gallery extends Component  {


  componentWillMount(){
    axios('http://localhost:3004/items').then(res => {
      this.props.fetchItems(res.data)
    })
    }

  render (){
    return(
    <CardDeck>
      {this.props.items.map((item, i) => <Item key={i}  data={item}/>)}
    </CardDeck>
  )}
};

let mapStateToProps = (state) => {
  return{
    items: state.items,
    appTitle: state.appTitle
  }
}

//ahora todo esta en props
//mapea datos

let mapDispatchToProps = (dispatch) => {
  return {
    fetchItems:(data) =>{
      dispatch({type: 'FETCH_ITEMS', payload: data})
    }
  }
}
//mapea actiones
 

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

//inyectar al componente el dispatch, que es el que emite actiones al store
//si solo va a leer, solo la function map
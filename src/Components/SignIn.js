import React, {Component} from 'react';
import firebase from '../firebase'

class SignIn extends Component {
    constructor(props){
        super(props)

        this.state ={
            form:{
                email: '',
                password: '',
            },
            error: null,
            singIn: false,
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        this.setState({error: null})

        firebase
            .auth()
            .signInWithEmailAndPassword(
            this.state.form.email, this.state.form.password
            ).then(a => a.operationType ? this.setState({singIn: true}) : console.log('no funciono'))
            .catch(error => {
                console.log(error)
                this.setState({error})
            })
    }

    handleInput = (e) => {
        //console.log(e)
        this.setState({
            form: {
                ...this.state.form,
                [e.currentTarget.name]: e.currentTarget.value
            }
        })
    }
    
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col">

            <p className="text-danger">{this.state.error ?  this.state.error.message : ''} </p>

            {this.state.singIn === false ? <p> no ingreso </p>  : this.props.history.push('/')}

            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" onChange={this.handleInput} name="email"
                    value={this.state.form.email} 
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.handleInput} name="password"
                    value={this.state.form.password} className="form-control"/>
                </div>
                <div className="form-group">
                   <button className="btn btn-primary" onClick={this.handleSubmit}>
                       Ingresar
                   </button>
                </div>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default SignIn;
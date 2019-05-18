import React, {Component} from 'react';
import firebase from './../firebase'

class Login extends Component {
    constructor(props){
        super(props)

        this.state ={
            form:{
                email: '',
                password: '',
            },
            error: null,
            sent: false
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        this.setState({error: null})

        firebase
            .auth()
            .createUserWithEmailAndPassword(
            this.state.form.email, this.state.form.password
            )
            .then(a => {
                firebase.auth().currentUser.sendEmailVerification().then(function(){
                    console.log('se envio la confirmacion por email')
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({error})
            })
    }

    handleInput = (e) => {
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


            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" onChange={this.handleInput} name="email"
                    value={this.state.form.email} 
                    className="form-control"/>
                </div>
                <div className="form-group">
                   <button className="btn btn-primary" onClick={this.handleSubmit}>
                       Continuar
                   </button>
                </div>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default Login
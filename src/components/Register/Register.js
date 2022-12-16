import React, {Component} from 'react';
import './Register.css';
import toast from 'react-hot-toast';


// tailor from tachyon form
class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    }
  }

  onNameRegister = (event) => {
    this.setState({registerName: event.target.value})
  }

  onEmailRegister = (event) => {
    this.setState({registerEmail: event.target.value})
  }

  onPasswordRegister = (event) => {
    this.setState({registerPassword: event.target.value})
  }

  onRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      } else if (user === 'invalid submission'){
        toast.error('Invalid submission.')
      } else {
        toast.error('Something went wrong. Unable to register.')
      }
    })
    .catch(err => console.log('register error', err))
  }

  render(){
    return(
      <div className="pa4 black-80 measure center tl" id="signinForm">
          <div className="f4 fw6 ph0 mh0">{'Register'}</div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="user-name">{'User Name'}</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="register-user-name"  
              id="register-user-name"
              onChange={this.onNameRegister} />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">{'Email'}</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="register-email-address"  
              id="register-email-address"
              onChange={this.onEmailRegister} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">{'Password'}</label>
            <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="register-password"  
              id="register-password"
              onChange={this.onPasswordRegister} />
          </div>
        <div>
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Register" 
            onClick={this.onRegister} />
        </div>
      </div>
    )
  }
}

export default Register;


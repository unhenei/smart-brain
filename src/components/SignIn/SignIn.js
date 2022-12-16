import React, {Component} from 'react';
import './SignIn.css';
import toast from 'react-hot-toast';


// tailor from tachyon form
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user[0].id){
        this.props.loadUser(user[0])
        this.props.onRouteChange('home')
      } else {
        toast.error('Invalid Email or Password')
      }
    })
    .catch(err => console.log('signin error', err))
  }

  render(){
    return(
      <div className="pa4 black-80 measure center tl" id="signinForm">
          <div className="f4 fw6 ph0 mh0">{'Sign In'}</div>
          <div className="mt3">
            <label className="db fw6 lh-copy f4" htmlFor="email-address">{'Email'}</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="signin-email-address"  
              id="signin-email-address"
              onChange={this.onEmailChange} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f4" htmlFor="password">{'Password'}</label>
            <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="signin-password"  
              id="signin-password"
              onChange={this.onPasswordChange} />
          </div>
        <div>
          <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in" 
            onClick={this.onSubmitSignIn} />
        </div>
        <div className="lh-copy mt3">
          <a href="#0" className="f6 link dim black db" onClick={()=>{this.props.onRouteChange('register')}}>{'Register'}</a>
        </div>
      </div>
    )
  }
}

export default SignIn;

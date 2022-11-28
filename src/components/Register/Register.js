import React, {Component} from 'react';
import './Register.css';

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
      }
    })
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
              name="user-name"  
              id="user-name"
              onChange={this.onNameRegister} />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">{'Email'}</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onEmailRegister} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">{'Password'}</label>
            <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onPasswordRegister} />
          </div>
        <div className="">
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

// const Register = ({onRouteChange}) => {
//   return(
//     <div className="pa4 black-80 measure center tl" id="signinForm">
//         <div className="f4 fw6 ph0 mh0">{'Register'}</div>
//         <div className="mt3">
//           <label className="db fw6 lh-copy f6" htmlFor="user-name">{'User Name'}</label>
//           <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"  id="user-name" />
//         </div>
//         <div className="mt3">
//           <label className="db fw6 lh-copy f6" htmlFor="email-address">{'Email'}</label>
//           <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
//         </div>
//         <div className="mv3">
//           <label className="db fw6 lh-copy f6" htmlFor="password">{'Password'}</label>
//           <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
//         </div>
//       <div className="">
//         <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
//           type="submit" 
//           value="Register" 
//           onClick={() => {onRouteChange('home')}} />
//       </div>
//     </div>
//   )
// }

{/*    <main className="pa4 black-80 ">
    <form className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" for="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" for="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
      </fieldset>
      <div className="">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
      </div>
      <div className="lh-copy mt3">
        <a href="#0" className="f6 link dim black db">Sign up</a>
        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
      </div>
    </form>
  </main>*/}
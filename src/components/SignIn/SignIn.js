import React, {Component} from 'react';
import './SignIn.css';

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
      }
    })
  }

  render(){
    return(
      <div className="pa4 black-80 measure center tl" id="signinForm">
          <div className="f4 fw6 ph0 mh0">{'Sign In'}</div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">{'Email'}</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onEmailChange} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">{'Password'}</label>
            <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onPasswordChange} />
          </div>
        <div className="">
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



// const SignIn = ({onRouteChange}) => {
//   return(
//     <div className="pa4 black-80 measure center tl" id="signinForm">
//         <div className="f4 fw6 ph0 mh0">{'Sign In'}</div>
//         <div className="mt3">
//           <label className="db fw6 lh-copy f6" htmlFor="email-address">{'Email'}</label>
//           <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
//         </div>
//         <div className="mv3">
//           <label className="db fw6 lh-copy f6" htmlFor="password">{'Password'}</label>
//           <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
//         </div>
//         <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" />{' Remember me'}</label>
//       <div className="">
//         <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
//           type="submit" 
//           value="Sign in" 
//           onClick={() => {onRouteChange('home')}} />
//       </div>
//       <div className="lh-copy mt3">
//         <a href="#0" className="f6 link dim black db">{'Register'}</a>
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
import React from 'react';


class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state={
			user: {
		        name: this.props.user.name,
		        email: this.props.user.email,
		        entries: this.props.user.entries,
		        joined: this.props.user.joined
		    },
		    newPassword: '',
		    newPasswordCheck: ''
		}
	}

	onNameChange = (event) => {
		this.setState(Object.assign(this.state.user,{name: event.target.value}))
		console.log(this.state.user.name)
	}

	onPasswordChange = (event) => {
		this.setState({newPassword: event.target.value})
	}

	onPasswordCheck = (event) => {
		this.setState({newPasswordCheck: event.target.value});
	}

	onProfileChange = () => {
		fetch('http://localhost:3000/profile',{
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.user.name,
				email: this.state.user.email,
				passwordNew: this.state.newPassword,
				passwordCheck: this.state.newPasswordCheck
			})
		})
		.then(response => response.json())
		.then(console.log)
		.catch(err => console.log('failed to update profile', err))
	}

	onAccountDelete = () => {
		fetch('http://localhost:3000/profile',{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
			})
		})
		.then(response => response.json())
		.then(console.log)
		.catch(err => console.log('failed to delete account', err))

		this.props.onRouteChange('signin')
	}

	render(){
		return (
				<div className="pa4 black-80 measure center tl" id="prfileForm">
		          <div className="f4 fw6 ph0 mh0">{'Profile'}</div>
		          <div className="mt3">
		            <label className="db fw6 lh-copy f6" htmlFor="user-name">{'User Name'}</label>
		            <input 
		              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		              type="text" 
		              name="user-name"  
		              id="user-name"
		              placeholder={this.state.user.name}
		              value={this.state.user.name}
		              onChange={this.onNameChange} />
		          </div>
		          <div className="mt3">
		            <label className="db fw6 lh-copy f6" htmlFor="email-address">{`Email: ${this.state.user.email}`}</label>
		          </div>
		          <div className="mv3">
		            <label className="db fw6 lh-copy f6" htmlFor="password">{'Password1'}</label>
		            <input 
		              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		              type="password" 
		              name="password"  
		              id="password"
		              value={this.state.newPassword}
		              onChange={this.onPasswordChange} />
		          </div>
		          <div className="mv3">
		            <label className="db fw6 lh-copy f6" htmlFor="password">{'Password2'}</label>
		            <input 
		              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		              type="password" 
		              name="password"  
		              id="password2"
		              value={this.state.newPasswordCheck}
		              onChange={this.onPasswordCheck} />
		          </div>
		          <div className="mv3">
		            <label className="db fw6 lh-copy f6" htmlFor="entries">{`Entries: ${this.state.user.entries}`}</label>
		            <label className="db fw6 lh-copy f6" htmlFor="joined">{`Joined: ${this.state.user.joined}`}</label>
		          </div>
		        <div className="">
		          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		            type="submit" 
		            value="Submit Change" 
		            onClick={this.onProfileChange} />
		        </div>
		        <div className="">
		          <input className="b ph3 pv2 input-reset ba b--black bg-red grow pointer f6 dib ma3" 
		            type="submit" 
		            value="Delete Account" 
		            onClick={this.onAccountDelete} />
		        </div>
		      </div>
	    )
  	}
}

export default Profile;
import React from 'react';
import {PopupOptions} from '../Popup/Popup';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';
import './Profile.css'

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
	}

	onPasswordChange = (event) => {
		this.setState({newPassword: event.target.value})
	}

	onPasswordCheck = (event) => {
		this.setState({newPasswordCheck: event.target.value});
	}

	onProfileChange = () => {
		fetch('https://smart-brain-server.herokuapp.com/profile',{
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
		.then(response => {
			if (response.id){
				this.props.loadUser(response)
				toast.success('Your change has been saved')
			}else{
				toast.error('Something went wrong.')
			}
		})
		.catch(err => console.log('failed to update profile', err))
	}

	onAccountDelete = () => {
		fetch('https://smart-brain-server.herokuapp.com/profile',{
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
			})
		})
		.then(response => response.json())
		.then(response => {
			if(response === 'account deleted'){
				this.props.onRouteChange('signin')
			} else{
				toast.error('Failed to delete account')
			}
		})
		.catch(err => console.log('failed to delete account', err))
	}

	render(){
		return (
				<div className="pa4 black-80 measure center tl" id="profileForm">
		          <div className="f3 fw6 ph0 mh0">{'Profile'}</div>
		          <div className="mt3">
		            <label className="db fw6 lh-copy f6" htmlFor="user-name">{'User Name'}</label>
		            <Popup
					    trigger={open => (
						<input 
			              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			              type="text"
			              name="profile-user-name"  
			              id="profile-user-name"
			              placeholder={this.state.user.name}
			              value={this.state.user.name}
			              onChange={this.onNameChange}
			            />
		               )}
					    position="right center"
					    contentStyle={{backgroundColor:'lightyellow', padding: '0.5rem', borderRadius: '3px', border:'1px solid gray'}}
					    arrowStyle={{color:'gray'}}
					    closeOnDocumentClick
					  >
					    <span> Start typing to change your name! </span>
					</Popup>
		          </div>
		          <div className="mt3">
		            <label className="db fw6 f6 fixinfo" htmlFor="email-address">{`Email: ${this.state.user.email}`}</label>
		          </div>
		          <div className="mv3">
		            <label className="db fw6 lh-copy f6" htmlFor="password">{'Enter New Password'}</label>
		            <Popup
					    trigger={open => (
				            <input 
				              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				              type="password" 
				              name="passwordNew"  
				              id="passwordNew"
				              value={this.state.newPassword}
				              onChange={this.onPasswordChange}
				            />
				        )}
					    position="right center"
					    contentStyle={{backgroundColor:'lightyellow', padding: '0.5rem', borderRadius: '3px', border:'1px solid gray'}}
					    arrowStyle={{color:'gray'}}
					    closeOnDocumentClick
					>
					    <span> Leave it blank if you do not wish to change your password. </span>
					</Popup>
		          </div>
		          <div className="mv3">
		            <label className="db fw6 lh-copy f6" htmlFor="password">{'Confirm New Password'}</label>
			        <Popup
			        	className='bg-light-yellow pa2 br2'
					    trigger={open => (
				            <input 
				              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				              type="password" 
				              name="passwordNew2"  
				              id="passwordNew2"
				              value={this.state.newPasswordCheck}
				              onChange={this.onPasswordCheck} />
				        )}
					    position="right center"
					    contentStyle={{backgroundColor:'lightyellow', padding: '0.5rem', borderRadius: '3px', border:'1px solid gray'}}
					    arrowStyle={{color:'gray'}}
					    closeOnDocumentClick
					>
					    <span> Enter your new password again. </span>
					</Popup>
		          </div>
		          <div className="mv3">
		            <label className="db fw6 f6 fixinfo " htmlFor="entries">{`Entries: ${this.state.user.entries}`}</label>
		            <label className="db fw6 f6 fixinfo" htmlFor="joined">{`Joined: ${this.state.user.joined}`}</label>
		          </div>
		        <div className='dib ml6'>
			          <input 
			          	className="b pa2 ma2 input-reset ba bw1 bg-transparent grow pointer f6" 
			            type="submit" 
			            value="Save Changes" 
			            onClick={this.onProfileChange}
			           />
			        	<PopupOptions 
			        		TriggerBtn={'Delete Account'}
			        		PopupTitle={'Are you sure you want to delete your account?'}
			        		PopupContent={'Once the action is done, it can not be reversed.'}
			        		ConfirmFn={this.onAccountDelete}
			        	 />
		        </div>
		      </div>
	    )
  	}
}

export default Profile;
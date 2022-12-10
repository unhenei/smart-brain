import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, route}) => {
	return(
		<div>
			{(route === 'home')?
				<ul className='Navigation'>
					<li onClick={() => {onRouteChange('profile')}}>{'Profile'}</li>
					<li onClick={() => {onRouteChange('signin')}}>{'Sign Out'}</li>
				</ul>:
			(route === 'profile')?
				<ul className='Navigation'>
					<li onClick={() => {onRouteChange('home')}}>{'Home'}</li>
					<li onClick={() => {onRouteChange('signin')}}>{'Sign Out'}</li>
				</ul>:
				<ul className='Navigation'>
					<li onClick={() => {onRouteChange('signin')}}>{'Sign In'}</li>
					<li onClick={() => {onRouteChange('register')}}>{'Register'}</li>
				</ul>
			}
		</div>
	)
}

export default Navigation;

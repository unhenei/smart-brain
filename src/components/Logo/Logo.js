import React from 'react';
import Tilt from 'react-parallax-tilt';
import target from './target.png'
import './Logo.css'

const Logo = () => {
	return(
		<div>
			<Tilt className='tilt' options={{ max : 55 }} style={{width: 100, height: 100}}>
				<img style={{margin: '10px'}} alt='Logo' src={target} width={80} />
			</Tilt>
		</div>
	)
}

export default Logo;
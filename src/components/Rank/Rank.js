import React from 'react';

const Rank = ({user, entries}) => {
	return(
		<h1 className='center' style={{position:'absolute', top:'150px'}}>{`Hello, ${user}. Your Entries is ${entries}.`}</h1>
	)
}

export default Rank;
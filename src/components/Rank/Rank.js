import React from 'react';

const Rank = ({user, entries}) => {
	return(
		// <h1 style={{position:'absolute', top:'20%', width:'100%', 'text-align':'center'}}>{'Hello, user. Your Ranking is ...'}</h1>
		<h1 className='center' style={{position:'absolute', top:'150px'}}>{`Hello, ${user}. Your Entries is ${entries}`}</h1>
	)
}

export default Rank;
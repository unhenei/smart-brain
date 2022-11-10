import React from 'react';

const ImageLinkForm = ({onInputChange, submitImage}) => {
	return(
		<div className='center' style={{position:'absolute', top:'250px'}}>
			<input 
				id='inputImg' 
				type='text' 
				placeholder='Enter Image URL' 
				className='pa2 ma3 f4 w-50'
				onChange={onInputChange}></input>
			<button  
				className='pa2 f4 bg-slategrey br1 hover-bg-transparent w-10 pointer'
				onClick={submitImage}>
				{'Submit'}
			</button>
		</div>
	)
}

export default ImageLinkForm;
import React from 'react';

const FaceRecognition = ({imgUrl, box}) => {
	// set default imgUrl to prevent broken img link icon or empty box show on the website
	if (imgUrl.length === 0){
		imgUrl='';
		box=[]
		return
	}

	const faceBox = box.map(box => {
		return <div key={box.index} style={{border: box.border , position: 'absolute', top: box.top, left: box.left, right: box.right, bottom: box.bottom }}></div>
	})
		
	return(
		<div className='center bd' style={{position:'relative', top:'350px', width:'50%'}}>
			<img id='imgDisplay' alt='' src={imgUrl} width='100%'></img>
			<div>{faceBox}</div>
		</div>
	)
}

export default FaceRecognition;
import React from 'react';


// const CardList = ({robot}) => {
// 	const CardArray = robot.map((user) => {
// 		return <Card key = {user.id} id = {user.id} name = {user.name} job = {user.job} email = {user.email} />
// 	})
// 	return(
// 		<div>
// 			{CardArray}
// 		</div>
// 	)

// }


const FaceRecognition = ({imgUrl, box}) => {
	// set default imgUrl to prevent broken img link icon or empty box show on the website
	if (imgUrl.length === 0){
		imgUrl='';
		box=[]
	}

	// const boxComponent = (data) => {
	// 	return(
	// 		<div key={data.index} style={{border: data.border , position: 'absolute', top: data.top, left: data.left, right: data.right, bottom: data.bottom }}></div>
	// 	)
	// }

	// const faceBox = box.map((e) => boxComponent(e))

	// const faceBox = box.map((box) => {
	// 	if (box.length !== 0){
	// 	return(
	// 		<div key={box.index} style={{border: box.border , position: 'absolute', top: box.top, left: box.left, right: box.right, bottom: box.bottom }}></div>
	// 	)} else {
	// 		return <div></div>
	// 	}
	// })
	
	return(
		<div className='center bd' style={{position:'relative', top:'350px', width:'50%'}}>
			<img id='imgDisplay' alt='' src={imgUrl} width='100%'></img>
{/*			{faceBox}
*/}			<div id='faceBox' style={{border: box.border , position: 'absolute', top: box.top, left: box.left, right: box.right, bottom: box.bottom }}></div>
{/*			<div id='faceBox' style={{border:'5px solid light-blue', position: 'absolute', top: box.top, left: box.left, right: box.right, bottom: box.bottom }}></div>
*/}		</div>
	)
}

export default FaceRecognition;
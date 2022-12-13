// import React from 'react';

// const Popup = ({Content, ConfirmFn}) => {
// 	return(
// 		<div 
// 			// className='w-50 h-auto bg-light-yellow'
// 			// style={{display: 'block', 'z-index': 99, position: 'relative', margin: 'auto' }}
// 		> {console.log('what')}
// {/*			<div>
// 				{Content}
// 				<div className='dib'>
// 					<button 
// 						className='bg-light-green br3 white pa2 ma2'
// 						onClick={()=>{
// 							console.log('ok')
// 						}}>
// 						{'Cancel'}
// 					</button>
// 					<button 
// 						className='bg-light-red br3 white pa2 ma2'
// 						onClick={ConfirmFn}>
// 						{'Confirm'}
// 					</button>
// 				</div>
// 			</div>
// 	*/}	</div>
// 	)
// }

// export default Popup;


import React from 'react';
import Popup from 'reactjs-popup';

const PopupWindow = ({TriggerBtn, PopupTitle, PopupContent, ConfirmFn}) => (
  <Popup
    trigger={<button className="button pa2 ma2 bg-light-red br3 pointer grow"> {TriggerBtn} </button>}
    modal
    nested
  >
    {close => (
      <div className="modal tc bg-light-yellow br3 w6 h-auto pa3 ba b--gray shadow-2">
        <div className="header f3 ma2"> {PopupTitle} </div>
        <div className="content ma2">
          {PopupContent}
        </div>
        <div className="actions">
          <button
            className="button pa2 ma2 bg-light-green br3 pointer grow"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            {'Cancel'}
          </button>
          <button
            className="button pa2 ma2 bg-light-red br3 pointer grow"
            onClick={() => {ConfirmFn()}}
          >
            {'Confirm'}
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default PopupWindow;
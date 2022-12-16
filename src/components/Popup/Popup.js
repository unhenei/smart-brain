import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css'



const PopupOptions = ({TriggerBtn, PopupTitle, PopupContent, ConfirmFn}) => (
  <Popup
    trigger={<button className="button pa2 ma2 bg-light-red pointer grow"> {TriggerBtn} </button>}
    modal
  >
    {close => (
      <div className="modal bg-light-yellow br3 w6 h-auto pa3 ba b--gray shadow-2">
        <div className="header f3 ma2"> {PopupTitle} </div>
        <div className="content ma2">
          {PopupContent}
        </div>
        <div className="actions">
          <button
            className="button pa2 ma2 bg-light-green br3 pointer grow"
            onClick={() => {
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

export {
	PopupOptions
};

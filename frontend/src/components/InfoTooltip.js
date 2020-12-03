import React from 'react';
import Popup from './Popup.js';

function InfoTooltip({isVisible, typeMessage, onCloseInfoTooltip, message}){

    return(
        <Popup
            isOpen={isVisible}
            typeMessage={typeMessage}
            popupMessage={true}
            onClose={onCloseInfoTooltip}
            message={message}
        />
    );
}

export default InfoTooltip;
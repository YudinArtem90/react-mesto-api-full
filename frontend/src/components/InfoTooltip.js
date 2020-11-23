import React from 'react';
import Popup from './Popup.js';

function InfoTooltip({isVisible, typeMessage, onCloseInfoTooltip}){

    return(
        <Popup
            isOpen={isVisible}
            typeMessage={typeMessage}
            popupMessage={true}
            onClose={onCloseInfoTooltip}
        />
    );
}

export default InfoTooltip;
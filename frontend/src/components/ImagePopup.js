import React from 'react';
import closeIcon from '../images/pop-up/close_icon.svg';

function ImagePopup({card , onClose}){
    
    return(
        <div className={`popup ${card ? 'popup_opened' : ''}`}>
            <div className="popup__main-container">
                <div className="popup__footer-container">
                <img className="popup__view-photo-container" src={card}/>
                <img src={closeIcon} alt="Кнопка закрытия модального окна" className="popup__icon-close icon-close-form_view-photo" onClick={onClose}/>
                </div>
                <p className="popup__view-photo-info" />
            </div>
        </div>
    );
}

export default ImagePopup;
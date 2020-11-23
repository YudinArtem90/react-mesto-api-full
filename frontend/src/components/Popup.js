import React from 'react';
import closeIcon from '../images/pop-up/close_icon.svg';
import logoTrue from '../images/logo-popup-message/true.svg';
import logoFalse from '../images/logo-popup-message/false.svg';

function Popup({title, name, children, isOpen, onClose, textButton, onSubmit, popupMessage = false, typeMessage}){

        return(
          <div className={`popup ${isOpen && 'popup_opened'}`} id={name}>
            {
              popupMessage ?
                <div className={`popup__container popup__container_message`}>
                  <img src={closeIcon} alt="Кнопка закрытия модального окна" className="popup__icon-close popup__icon-close_message" onClick={onClose}/>
                  <img src={typeMessage ? logoTrue : logoFalse} alt={`Информационное модальное окно`} className='popup__icon-message'/>
                  <h2 className='popup__message'>{`${typeMessage ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
                </div> 
                :
                <form className="popup__container popup__container_form" method="post" onSubmit={onSubmit} noValidate>
                  <img src={closeIcon} alt="Кнопка закрытия модального окна" className="popup__icon-close popup__icon-close_form" onClick={onClose}/>
                  <h2 className="popup__title form-title">{title}</h2>
                  {children}
                  <button className="popup__button form-button" type="submit">{textButton}</button>
                </form>
            }
          </div>
        );
}

export default Popup;
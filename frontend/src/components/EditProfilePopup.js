import React from 'react';
import Popup from './Popup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props){
    const {isOpen, onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name: nameRef.current.value,
            about: descriptionRef.current.value
          });
    }
    
    function PopupElementEditProfile(){
        return (
            <>
                <input 
                    id="name_person" 
                    className="popup__field popup__field_name_person form-field" 
                    type="text" 
                    name="namePerson" 
                    minLength={2} 
                    maxLength={40}
                    defaultValue={currentUser.name}
                    pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" 
                    ref={nameRef}
                    required 
                />
                <span id="name_person-error" className="popup__field-error" />
                <input 
                    id="inform_person" 
                    className="popup__field popup__field_inform_person form-field" 
                    type="text" 
                    name="informPerson" 
                    minLength={2} 
                    maxLength={200}
                    defaultValue={currentUser.about} 
                    ref={descriptionRef}
                    required 
                />
                <span id="inform_person-error" className="popup__field-error" />
            </>
        );
    }
    
    return(
        <Popup
            onSubmit={handleSubmit}
            children={<PopupElementEditProfile/>}
            title='Редактировать профиль'
            name ='popupEditProfile'
            isOpen={isOpen}
            onClose={onClose}
            textButton='Сохранить'
        />
    );
}

export default EditProfilePopup;
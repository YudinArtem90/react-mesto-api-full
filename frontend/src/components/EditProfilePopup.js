import React from 'react';
import Popup from './Popup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props){
    const {isOpen, onClose} = props;
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);

    function onChangeName(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function onChangeAbout(e){
        e.preventDefault();
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
          name,
          about: description,
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
                    onChange={onChangeName}
                    value={name}
                    pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" 
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
                    onChange={onChangeAbout}
                    value={description} 
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
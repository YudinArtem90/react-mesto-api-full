import React from 'react';
import Popup from './Popup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import * as yup from 'yup';

function EditProfilePopup(props){
    const {isOpen, onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const [ desabled, setDesabled ] = React.useState(true);
    const [ namePerson , setNamePerson ] = React.useState(currentUser.name);
    const [ informPerson, setInformPerson ] = React.useState(currentUser.about);
    const [ highlighted, whoHighlighted] = React.useState('');

    React.useEffect(() => {
        if(highlighted === 'name_person'){
            nameRef.current.focus();
        }else{
            descriptionRef.current.focus();
        }
    });

    const validation = (event) => {
        setNamePerson(nameRef.current.value);
        setInformPerson(descriptionRef.current.value);
        let schema = yup.object({
            namePerson: yup.string().min(2).max(40).matches(/^[A-Za-zА-Яа-яЁё\s\-]+$/g).required(),
            informPerson: yup.string().min(2).max(40).required(),
          });

        schema.validate({ namePerson: nameRef.current.value, informPerson: descriptionRef.current.value })
        .then((e) => {
            setDesabled(true);
        })
        .catch(function (err) {
            setDesabled(false); 
          });
      }


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
                    onChange={validation}
                    onBlur={(e) => whoHighlighted('inform_person')}
                    value={namePerson}
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
                    onChange={validation}
                    onBlur={(e) => whoHighlighted('name_person')}
                    value={informPerson}
                />
                <span id="inform_person-error" className="popup__field-error" />
            </>
        );
    }
    
    return(
        <Popup
            validation={desabled}
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
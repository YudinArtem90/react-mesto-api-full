import React from 'react';
import Popup from './Popup.js';
import * as yup from 'yup';

function EditAvatarPopup(props){
    const {isOpen, onClose, onUpdateAvatar} = props;
    const linkCardRef = React.useRef();
    const [ desabled, setDesabled ] = React.useState('');

    React.useEffect(() => {
        linkCardRef.current.focus();
      });

    const validation = (event) => {
        let schema = yup.object({
            linkCardRef: yup.string().required().url(),
            });

        schema.validate({ linkCardRef: linkCardRef.current.value })
        .then((e) => {
            setDesabled(true);
        })
        .catch(function (err) {
            setDesabled(false); 
            });
    }

    function PopupElementEditAvatar(){
        return (
            <>
                <input id="link_avatar" className="popup__field form-field" type="url" name="linkCard" ref={linkCardRef} placeholder="Ссылка на картинку" required onChange={validation}/>
                <span id="link_avatar-error" className="popup__field-error" />
            </>
        );
      }

    function handleSubmit(e) {
        e.preventDefault();
        
        onUpdateAvatar({
            avatar: linkCardRef.current.value
        });
    }

    return(
        <Popup
            onSubmit={handleSubmit}
            validation={desabled}
            children={<PopupElementEditAvatar key={'PopupElementEditAvatar'}/>}
            title='Обновить аватар'
            name ='popupEditAvatar'
            isOpen={isOpen}
            onClose={onClose}
            textButton='Сохранить'
        />
    );
}

export default EditAvatarPopup;
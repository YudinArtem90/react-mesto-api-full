import React from 'react';
import Popup from './Popup.js';

function EditAvatarPopup(props){
    const {isOpen, onClose, onUpdateAvatar} = props;
    const linkCardRef = React.useRef();

    function PopupElementEditAvatar(){
        return (
            <>
                <input id="link_avatar" className="popup__field form-field" type="url" name="linkCard" ref={linkCardRef} placeholder="Ссылка на картинку" required />
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
            children={<PopupElementEditAvatar/>}
            title='Обновить аватар'
            name ='popupEditAvatar'
            isOpen={isOpen}
            onClose={onClose}
            textButton='Сохранить'
        />
    );
}

export default EditAvatarPopup;
import React from 'react';
import Popup from './Popup.js';

function AddPlacePopup(props){
    const {isOpen, onClose, onAddPlace} = props;
    const nameCardRef = React.useRef();
    const linkCardRef = React.useRef();

    function PopupElementAddCard(){
        return (
            <>
                <input 
                    id="name_card" 
                    className="popup__field popup__field_name_card form-field" 
                    type="text" 
                    minLength={1} 
                    maxLength={30} 
                    name="nameCard" 
                    placeholder="Название" 
                    ref={nameCardRef}
                    required 
                />
                <span id="name_card-error" className="popup__field-error" />
                <input 
                    id="link_card" 
                    className="popup__field popup__field_link_card form-field" 
                    type="url" 
                    name="linkCard" 
                    placeholder="Ссылка на картинку" 
                    ref={linkCardRef}
                    required 
                />
                <span id="link_card-error" className="popup__field-error" />
            </>
        );
      }

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({ 
            name: nameCardRef.current.value,
            link: linkCardRef.current.value
        });
    }

    return(
        <Popup
            onSubmit={handleSubmit}
            children={<PopupElementAddCard/>}
            title='Новое место'
            name ='popupAddCard'
            isOpen={isOpen}
            onClose={onClose}
            textButton='Создать'
        />
    );
}

export default AddPlacePopup;
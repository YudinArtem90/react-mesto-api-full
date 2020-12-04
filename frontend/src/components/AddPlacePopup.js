import React from 'react';
import Popup from './Popup.js';
import * as yup from 'yup';

function AddPlacePopup(props){
    const {isOpen, onClose, onAddPlace} = props;
    const nameCardRef = React.useRef();
    const linkCardRef = React.useRef();

    const [ desabled, setDesabled ] = React.useState(true);
    const [ nameCard , setNameCard ] = React.useState('');
    const [ linkCard, setLinkCard ] = React.useState('');
    const [ highlighted, whoHighlighted] = React.useState('');


    React.useEffect(() => {
        if(highlighted === 'name_card'){
            nameCardRef.current.focus();
        }else{
            linkCardRef.current.focus();
        }
    });

    const validation = (event) => {
        setNameCard(nameCardRef.current.value);
        setLinkCard(linkCardRef.current.value);

        let schema = yup.object({
            name : yup.string().min(1).max(30).required(),
            link: yup.string().required().url(),
          });

        schema.validate({ name: nameCardRef.current.value, link: linkCardRef.current.value })
        .then((e) => {
            setDesabled(true);
        })
        .catch(function (err) {
            setDesabled(false); 
          });
      }

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
                    onBlur={(e) => whoHighlighted('link_card')}
                    value={nameCard}
                    onChange={validation}
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
                    onBlur={(e) => whoHighlighted('name_card')}
                    value={linkCard}
                    onChange={validation}
                />
                <span id="link_card-error" className="popup__field-error" />
            </>
        );
      }

    function handleSubmit(e) {
        e.preventDefault();
        
        setNameCard('');
        setLinkCard('');

        onAddPlace({ 
            name: nameCardRef.current.value,
            link: linkCardRef.current.value
        });
    }

    return(
        <Popup
            validation={desabled}
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
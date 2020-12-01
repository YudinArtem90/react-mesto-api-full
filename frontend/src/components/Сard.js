import React from 'react';
import buttonDelete from '../images/element/delete.svg';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props){

    const {link, name, likes, onCardClick, onCardLike, onCardDelete,  owner} = props;
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = owner !== currentUser._id;
    const isLiked = likes.some(i => i === currentUser._id);
    
    function handleClick() {
        onCardClick(link);
      }

    function handleLikeClick(){
        onCardLike(props);
    }  

    function handleDeleteClick(){
        onCardDelete(props);
    }

    return (
        <article className="element">
            <img className="element__image" src={`${link}`} onClick={handleClick}/>
            <img 
                src={buttonDelete} 
                alt="Кнопка удаления карточки" 
                className={`element__button-delete ${isOwn && 'element__button-delete_deactivation'}`} 
                onClick={handleDeleteClick}
            />
            <div className="element__container">
            <p className="element__text">{name}</p>
                <div className="element__container_likes">
                    <button 
                        type="button" 
                        className={`element__button-like ${isLiked && 'element__button-like_action'}`} 
                        onClick={handleLikeClick}
                    />
                    <p className="element__count-like">{likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;
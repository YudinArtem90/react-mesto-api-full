import React from 'react';
import api from '../utils/api';
import Card from './Сard';
import pen from '../images/button/pen.svg';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, handleCardClick, onCardLike, cards, onCardDelete, setCards}){

    const currentUser = React.useContext(CurrentUserContext);
    
    function showCards(){
        api.getCards() 
            .then((res) => {
                setCards(res);
            })
            .catch((error) => console.log('Ошибка при первичной загрузке карточек', error));
    }

    React.useEffect(() => {
        showCards();
    },[]);

    const {name, avatar, about} = currentUser;
    
    return(
        <main className="main">
            <section className="profile">
            <div className="profile__container-avatar">
                <div className="profile__avatar-opacity" src={`${pen}`} onClick={onEditAvatar}/>
                <img alt="Аватарка пользователя" className="profile__avatar" src={`${avatar}`}/>
            </div>
            <div className="profile-info">
                <div className="profile-info__container">
                    <h1 className="profile-info__name">{name}</h1>
                    <button className="profile-info__edit-button" type="button" onClick={onEditProfile}/>
                </div>
                <p className="profile-info__information-person">{about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={onAddPlace}/>
            </section>
            <section className="elements">
                {
                    cards && 
                    cards.map((card) => 
                        <Card 
                            key={card._id} 
                            {...card}
                            onCardClick={(linkCard) => handleCardClick(linkCard)}
                            onCardLike={(card) => onCardLike(card)}
                            onCardDelete={(card) => onCardDelete(card)}
                        />)
                }
            </section>
      </main>
    );
}
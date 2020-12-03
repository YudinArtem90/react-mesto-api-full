import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Popup from './Popup.js';
import '../index.css';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import InfoTooltip from './InfoTooltip'
import ProtectedRoute from './ProtectedRoute';
import authentication from '../utils/authentication';
import workingWithToken from '../utils/workingWithToken';
import workingWithUser from '../utils/workingWithUser'

function App(props) {

  const [isEditProfilePopupOpen, openEditProfilePopupClick] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopupClick] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopupClick] = React.useState(false);
  const [isDeleteCardPopupOpen, openDeleteCardPopupClick] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState('');
  const [currentUser, changeCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [infoTooltip, setInfoTooltip] = React.useState({
    isVisible : false,
    typeMessage : false,
    message: ''
  });
  const [userEmail, setEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);

  function getCurrentUser(){
    workingWithUser.getUserInfo()
      .then((res) => {
        if(res){
          setEmail(res.email);
          setLoggedIn(true);
          changeCurrentUser(res);
        }else{
          console.log('Ошибка, данных нет', res)
        }
      })
      .catch((error) => console.log('Ошибка при первичной загрузке данных пользователя', error));;
  }

  function handleEditProfileClick(){
    openEditProfilePopupClick(true);
  }

  function handleEditAvatarClick(){
    openEditAvatarPopupClick(true);
  }

  function handleAddPlaceClick(){
    openAddPlacePopupClick(true);
  }

  function closeAllPopups(){
    openEditProfilePopupClick(false);
    openEditAvatarPopupClick(false);
    openAddPlacePopupClick(false);
    handleCardClick('');
  }

  function handleUpdateAvatar(data){
    api.editAvatar(data)
    .then((res) => {
      changeCurrentUser(res);
      closeAllPopups();
    })
    .catch((error) => console.log('Ошибка при редактировании аватара пользователя', error));
  }

  function handleUpdateUser(data){
    api.editProfileForm(data)
      .then((res) => {
        changeCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => console.log('Ошибка при редактировании данных пользователя', error));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    api.addLikeOrDislikeCard(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((error) => console.log('Ошибка при добавления лайка', error));
  }

  function handleCardDelete(card){
      api.deleteCard(card._id).then((newCard) => {
          const newCards = cards.filter((c) => c._id !== card._id);
          setCards(newCards);
        });
  }

  function handleAddPlaceSubmit(data){
    api.addCard(data)
      .then((newCard) => {
        setCards([...cards, newCard]);
        closeAllPopups();
      });
  }

  function register(data){
    authentication.signup(data)
        .then(res => {
          successfulLogin(data, res, 'Вы успешно зарегистрировались!');
          setTimeout(function(){
            setInfoTooltip({
              isVisible : false,
              typeMessage : true,
              message: ''
            });
            props.history.push('/sign-in');
          }, 2000);
        })
        .catch(error => failedLogin(error));
  }

  function login(data){
    authentication.signin(data)
      .then(res => {
        successfulLogin(data, res, 'Вы успешно авторизовались');
        setTimeout(function(){
          setInfoTooltip({
            isVisible : false,
            typeMessage : true,
            message: ''
          });
          getCurrentUser();
          props.history.push('/');
        }, 2000);
      })
      .catch(error => failedLogin(error));
  }

  function successfulLogin(data, res, message = ''){
    workingWithToken.saveToken(res.token);
    setInfoTooltip({
      isVisible : true,
      typeMessage : true,
      message: message
    });
    setEmail(data.email);
    setLoggedIn(true);
  }

  function failedLogin(error){
    setInfoTooltip({
      isVisible : true,
      typeMessage : false,
      message: getErrorMessage(error)
    });
  }

  function getErrorMessage(error){
    return error.error ? error.validation.body.message : error.message;
  }

  function onCloseInfoTooltip(){
    setInfoTooltip({
      isVisible : false,
      typeMessage : true,
      message: ''
    });
  }

  function accountExit(){
    setEmail('');
    setLoggedIn(false);
    workingWithToken.deleteToken();
    props.history.push('/sign-in');
  }

  React.useEffect(() => {
    const isThereToken = workingWithToken.tokenCheck();
    if(isThereToken){
      getCurrentUser();
    }else{
      workingWithToken.deleteToken();
      props.history.push('/sign-in');
    }
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">

          <Header userEmail={userEmail} accountExit={accountExit}/>

          <Switch>

            <Route path='/sign-in'>
              <Login login={login}/>
            </Route>

            <Route path='/sign-up'>
              <Register register={register}/>
            </Route>

            <ProtectedRoute 
              path="/" 
              loggedIn={loggedIn} 
              component={Main}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              handleCardClick={(linkCard) => handleCardClick(linkCard)}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              setCards={setCards}
            /> 
            
          </Switch>

          <Route path='/' exact >
           <Footer/>
          </Route>

        </div>
          
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        />
        
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit}
        />

        <Popup
            children={''}
            title='Вы уверены?'
            name ='popupDeleteCard'
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            textButton='Да'
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <InfoTooltip {...infoTooltip} onCloseInfoTooltip={onCloseInfoTooltip}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);

import React from 'react';
import logo from '../images/logo/mesto-logo.svg';
import { Link, withRouter } from 'react-router-dom'; 

function Header(props){

    const [mobileMenu, setMoobileMenu] = React.useState(false);
    const isSignIn = props.location.pathname === '/sign-in';
    const mainPage = props.location.pathname === '/';

    const setMenu = () => {
        setMoobileMenu(!mobileMenu);
    }

    const accountExit = () => {
        setMoobileMenu(false);
        props.accountExit();
    }

    return(
        <header className="header header-margin">
            {
                mobileMenu && 
                <div className="header__menu">
                    <p className="header__email-user">{props.userEmail}</p>
                    <button className='header__exit' onClick={accountExit}>Выйти</button>
                </div>
            }
            
            <div className="header__main-container">
                <Link to="/" className="header__href">
                    <img src={logo} alt="Логотип страницы мест в России" className="header__logo" />
                </Link>
                {
                    mainPage ?
                    <>  
                        <div className={mobileMenu ? 'header__button-close-menu' : "header__button-open-menu"} onClick={setMenu}></div>
                        <div className="header__container-right">
                            <p className="header__email-user">{props.userEmail}</p>
                            <Link to={`${isSignIn ? '/sign-up' : '/sign-in'}`} className='header__redirect'>{isSignIn ? 'Регистрация' : 'Выйти'}</Link>
                        </div>
                    </> :
                    <Link to={`${isSignIn ? '/sign-up' : '/sign-in'}`} className='header__redirect'>{isSignIn ? 'Регистрация' : 'Войти'}</Link>
                }
            </div>
        </header>
    );
}

export default withRouter(Header);

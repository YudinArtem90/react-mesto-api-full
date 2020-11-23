import React from 'react';
import { Link } from 'react-router-dom'; 

function FormPage({title, textButton, onSubmitForm, typeForm}){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        onSubmitForm({
            password : password,
            email : email
        });
    }

    return(
        <form className="form-page" method="post"  noValidate onSubmit={onSubmit}>
            <h2 className="form-page__title form-title">{title}</h2>
                <input 
                    className="form-page__field form-field" 
                    type="text" 
                    minLength={2} 
                    maxLength={40} 
                    onChange={onChangeEmail}
                    value={email}
                    pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                    required 
                />
                <input 
                    className="form-page__field form-field" 
                    type="password"  
                    minLength={2} 
                    maxLength={200}  
                    onChange={onChangePassword}
                    value={password} 
                    required 
                />
            <button className="form-page__button form-button" type="submit">{textButton}</button>
            {
                typeForm === 'register' && 
                <div className='form-page__container-label'>
                    <p className='form-page__label'>{'Уже зарегистрированы?   '}   
                    <Link to="/sign-in" className='form-page__link'>
                        Войти
                    </Link>
                    </p>
                </div>
            }
        </form>
    );

}

export default FormPage;
import React from 'react';
import FormPage from './FormPage';

function Login({login}){

    return (
        <FormPage
            title='Вход'
            textButton='Войти'
            onSubmitForm={login}
        />
    );
}

export default Login;
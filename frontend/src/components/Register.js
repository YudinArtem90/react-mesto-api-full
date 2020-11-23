import React from 'react';
import FormPage from './FormPage';

function Register({register}){

    return(
        <FormPage
            title='Регистрация'
            textButton='Зарегистрироваться'
            onSubmitForm={register}
            typeForm='register'
        />
    );
}

export default Register;
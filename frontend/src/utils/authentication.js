import Ajax from './ajax';

class Authentication extends Ajax{
    constructor({baseUrl}){
        super();
        // this._baseUrl = baseUrl;
    }

    signup(data){

        super._getData({
            method: 'POST',
            body: data,
            contentType: 'application/json'
        });
        
        return fetch(`${this._baseUrl}/signup`, this._data).then(res => { 
            return super._getResult(res);
         });
    }

    signin(data){

        super._getData({
            method: 'POST',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/signin`, this._data).then(res => { return super._getResult(res) });
    }


    checkValidityToken(){
        
    }
}

const authentication = new Authentication({
    // baseUrl: 'http://127.0.0.1:3001'
    // baseUrl: 'https://auth.nomoreparties.co'
});

export default authentication;
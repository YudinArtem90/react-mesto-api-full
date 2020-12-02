import Ajax from './ajax';

class Authentication extends Ajax{
    constructor({baseUrl}){
        super();
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

const authentication = new Authentication({});

export default authentication;
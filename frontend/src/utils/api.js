import Ajax from './ajax';
class Api extends Ajax{
    constructor({baseUrl, groupId, authorization}){
        super(baseUrl);
    }

    getCards(){
        super._getData({});
        return fetch(`${this._baseUrl}/cards`, this._data)
                    .then(res => { return super._getResult(res) });
    }

    addCard(data){

        super._getData({
            method: 'POST',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/cards`, this._data)
                .then(res => { return super._getResult(res) });
    }

    deleteCard(cardId){
        super._getData({
            method: 'DELETE'
        });

        return fetch(`${this._baseUrl}/cards/${cardId}`, this._data)
                .then(res => { return super._getResult(res) });
    }

    addLikeOrDislikeCard(cardId, isLike){
        super._getData({
            method: isLike ? 'PUT' : 'DELETE'
        });

        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, this._data)
                .then(res => { return super._getResult(res) });
    }


    editProfileForm(data){
        super._getData({
            method: 'PATCH',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/users/me`, this._data)
                .then(res => { return super._getResult(res) });
    }

    editAvatar(data){
        super._getData({
            method: 'PATCH',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/users/me/avatar`, this._data)
                    .then(res => { return super._getResult(res) });
    }
}


const api = new Api({});

export default api;
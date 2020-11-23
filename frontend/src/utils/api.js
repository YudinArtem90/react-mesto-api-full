import Ajax from './ajax';

class Api extends Ajax{
    constructor({baseUrl, groupId, authorization}){
        super(baseUrl);
        this._groupId = groupId;
        super._data = {
            headers: {
                authorization: authorization
            }
        };
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/${this._groupId}/users/me`, this._data)
                    .then(res => { return super._getResult(res) });
    }

    getCards(){
        return fetch(`${this._baseUrl}/${this._groupId}/cards`, this._data)
                    .then(res => { return super._getResult(res) });
    }

    addCard(data){

        super._getData({
            method: 'POST',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/${this._groupId}/cards`, this._data)
                .then(res => { return super._getResult(res) });
    }

    deleteCard(cardId){
        super._getData({
            method: 'DELETE'
        });

        return fetch(`${this._baseUrl}/${this._groupId}/cards/${cardId}`, this._data)
                .then(res => { return super._getResult(res) });
    }

    addLikeOrDislikeCard(cardId, isLike){
        super._getData({
            method: isLike ? 'PUT' : 'DELETE'
        });

        return fetch(`${this._baseUrl}/${this._groupId}/cards/likes/${cardId}`, this._data)
                .then(res => { return super._getResult(res) });
    }


    editProfileForm(data){
        super._getData({
            method: 'PATCH',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/${this._groupId}/users/me`, this._data)
                .then(res => { return super._getResult(res) });
    }

    editAvatar(data){
        super._getData({
            method: 'PATCH',
            body: data,
            contentType: 'application/json'
        });

        return fetch(`${this._baseUrl}/${this._groupId}/users/me/avatar`, this._data)
                    .then(res => { return super._getResult(res) });
    }
}


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1',
    groupId: 'cohort-12',
    authorization: 'f77ffc2a-fabb-4e1a-b96f-391d240718e4'
  });

export default api;
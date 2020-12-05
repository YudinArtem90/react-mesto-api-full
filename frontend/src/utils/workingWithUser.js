import Ajax from './ajax';
class WorkingWithUser extends Ajax{
    constructor({baseUrl}){
        super(baseUrl);
    }

    getUserInfo(){
        super._getData({});
        return fetch(`${this._baseUrl}/users/me`, this._data)
                    .then(res => { return super._getResult(res) });
    }
}

const workingWithUser = new WorkingWithUser({});
export default workingWithUser;
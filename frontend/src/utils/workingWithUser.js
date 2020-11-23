import Ajax from './ajax';
import workingWithToken from './workingWithToken'

class WorkingWithUser extends Ajax{
    constructor({baseUrl, groupId, authorization}){
        super(baseUrl);
        this._groupId = groupId;
        super._data = {
            headers: {
                authorization: `Bearer ${workingWithToken.getToken()}`
            }
        };
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, this._data)
                    .then(res => { return super._getResult(res) });
    }
}

const workingWithUser = new WorkingWithUser({
    baseUrl: 'https://auth.nomoreparties.co'
  });
export default workingWithUser;
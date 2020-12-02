import workingWithToken from './workingWithToken';
class Ajax{

    constructor(baseUrl){
        this._baseUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001'; 
        this._data = {};
    }

    _resetParameters(){
        if(Object.keys(this._data).length > 1){
            delete this._data.method;
            delete this._data.body;
            delete this._data.headers['Content-Type'];
        }
    }

    _getData({method = "GET", body, contentType}){
        this._resetParameters();

        this._data.headers = {
            authorization: workingWithToken.getToken()
        };

        this._data.method = method;
        if(body){
            this._data.body = JSON.stringify(body);
        }

        if(contentType){
            this._data.headers['Content-Type'] = contentType;
        }
    }

    _getResult(res){
        return res.ok ?
                res.json() :
                Promise.reject(`Ошибка: ${res.status}`);
    }
}

export default Ajax;
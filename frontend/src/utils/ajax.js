class Ajax{

    constructor(baseUrl){
        this._baseUrl= baseUrl;
        this._data = {
            headers : {}
        };
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
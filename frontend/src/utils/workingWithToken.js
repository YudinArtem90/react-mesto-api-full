class WorkingWithToken{

    getToken(){
        return localStorage.getItem('jwt');
    }

    tokenCheck(){
        let result = false;

        if (this.getToken()){
            result = true;;
        }

        return result;
    }

    saveToken(token){
        if (token){
            localStorage.setItem('jwt', token);
        }
    }

    deleteToken(){
        localStorage.removeItem('jwt');
    }
}

const workingWithToken = new WorkingWithToken();
export default workingWithToken;
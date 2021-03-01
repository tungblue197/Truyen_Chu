class Token {
    constructor(){
        let token = localStorage.getItem('access_token');
        this.isHadToken =  !!token;
    }

    getToken = () => {
        return localStorage.getItem('access_token');
    }

    setToken = (token) => {
        localStorage.setItem('access_token', token);
    }
}

export default new Token();
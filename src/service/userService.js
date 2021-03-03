import http from './http';
class UserService {
    static async addUser(user) {
       let result = await http.post('/api/user', { body : { user }});
       return result;
    }
}

export default UserService;
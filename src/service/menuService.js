import http from './http';
const MenuService = {
    getAll : async () => {
        return await http.get('/menu');
    }
}

export default MenuService;
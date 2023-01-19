import {axiosServiceUsers} from "./axiosService";

const userService = {
    getAll: () => axiosServiceUsers.get('/users'),
    getUserPosts:(id) => axiosServiceUsers.get(`posts/?userId=${id}`)
}

export {userService}
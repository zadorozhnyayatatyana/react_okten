import {axiosUsers} from "./axiosService";
import {urls} from "../configs";

const userService={
    getAll:()=>axiosUsers.get(urls.users),
    create:(newUser)=>axiosUsers.post(urls.users, newUser)
}
export {
    userService
}
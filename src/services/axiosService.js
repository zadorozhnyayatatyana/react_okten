import axios from "axios";
import {baseURL_Users, baseURL_Cars} from "../configs";

const axiosUsers = axios.create({baseURL:baseURL_Users});
const axiosCars = axios.create({baseURL: baseURL_Cars})

export {
    axiosUsers,
    axiosCars
}

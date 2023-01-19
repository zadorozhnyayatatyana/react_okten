import axios from "axios";

const axiosServiceUsers = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

const axiosServiceSpaceX = axios.create({baseURL:'https://api.spacexdata.com/v3/launches'})

export {axiosServiceUsers, axiosServiceSpaceX}
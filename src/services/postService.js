import {urls} from "../configs";
import {axiosService} from "./axiosService";

const postService = {
    getAll:()=>axiosService.get(urls.posts)
}

export {
    postService
}
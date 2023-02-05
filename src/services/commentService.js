import {urls} from "../configs";
import {axiosService} from "./axiosService";

const commentService = {
    getAll:()=>axiosService.get(urls.comments)
}

export {
    commentService
}
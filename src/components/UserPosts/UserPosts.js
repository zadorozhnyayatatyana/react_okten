import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {Post} from "../../Post/Post";


const UserPosts = ({user}) => {
    const {id} = user;

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        if (id) {
        userService.getUserPosts(id).then(value => value.data).then(value => setPosts([...value]))
        }
    },[id]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export {UserPosts}
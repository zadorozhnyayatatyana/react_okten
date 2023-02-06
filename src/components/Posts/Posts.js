import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(()=>{
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading.............</h1>}
            {posts.map(post => <Post key ={post.id} post = {post}/>)}
        </div>
    );
};

export {
    Posts
}
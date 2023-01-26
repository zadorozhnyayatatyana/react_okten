import {useParams} from "react-router-dom";
import {Post} from "../../components";

const PostPage = () => {
    const {postId} = useParams()

    return (
        <div>

            <Post key={postId} postId={postId}/>

        </div>
    );
}


export {
    PostPage
}
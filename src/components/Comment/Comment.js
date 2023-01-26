import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, body, postId} = comment;

       return (
        <div>
            <Link to = {`${id.toString()}/${postId.toString()}`} >id: {id}</Link>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {
    Comment
}
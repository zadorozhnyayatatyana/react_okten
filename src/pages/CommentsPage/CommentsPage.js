import {Comments} from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";
import css from './CommentsPage.module.css';

const CommentsPage = () => {
    return (
        <div className={css.CommentPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
}
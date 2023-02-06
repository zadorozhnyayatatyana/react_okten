import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
   const {selectedUser} =  useSelector(state => state.users)
    const {selectedPost} =  useSelector(state => state.posts)
    return (
        <div className={css.Header}>
            <div>{selectedUser && selectedUser.name}</div>

            <div>{selectedPost && selectedPost.title}</div>
        </div>
    );
};

export {
    Header
}
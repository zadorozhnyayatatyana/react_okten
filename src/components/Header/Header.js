import {NavLink} from "react-router-dom";
import {Component} from "react";

import css from './Header.module.css';

class Header extends Component{

    render() {

        return(
            <div className={css.Header}>
                <NavLink to={""}>Posts</NavLink>
                <NavLink to={"comments"}>Comments</NavLink>
                <NavLink to={"catAndDog"}>Cats and Dogs</NavLink>
            </div>
        )
    }
}

export {
    Header
}
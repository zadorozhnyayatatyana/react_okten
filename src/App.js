import {Header, Posts, Users} from "./components";

import css from './App.module.css';

const App = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <div className={css.App}>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export {
    App
}

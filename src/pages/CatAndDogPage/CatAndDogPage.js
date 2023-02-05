import {useReducer, useRef} from "react";

import {Cats, Dogs} from "../../components";
import css from './CatAndDog.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_Cat':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat?lastCat.id+1:0;
            return {...state, cats: [...state.cats, {id:idCat, name: action.payload}]}
        case 'Del_Cat':
            const indexCat = state.cats.findIndex(cat=>cat.id===action.payload);
            state.cats.splice(indexCat, 1);
            return {...state}
        case 'Add_Dog':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog?lastDog.id+1:0;
            return {...state, dogs: [...state.dogs, {id:idDog, name: action.payload}]}
        case 'Del_Dog':
            const indexDog = state.dogs.findIndex(dog=>dog.id===action.payload);
            state.dogs.splice(indexDog, 1);
            return {...state}
        default:
            return {...state}
    }
}


const CatAndDogPage = () => {
    const catAdd = useRef();
    const dogAdd = useRef();

    const[state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=>data);

    const addCat = () => {
        dispatch({type: 'Add_Cat', payload:catAdd.current.value});
        catAdd.current.value = '';
    }

    const addDog = () => {
        dispatch({type: 'Add_Dog', payload:dogAdd.current.value});
        dogAdd.current.value = '';
    }

    return (
        <div className={css.CatAndDogPage}>
            <div>
                <h1>Cats</h1>
                <input type="text" ref={catAdd}/>
                <button onClick={addCat}>Add cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                <h1>Dogs</h1>
                <input type="text" ref={dogAdd}/>
                <button onClick={addDog}>Add dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
};

export {
    CatAndDogPage
}
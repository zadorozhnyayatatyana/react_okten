const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>dispatch({type:'Del_Cat', payload:id})}>Delete</button>
        </div>
    );
};

export {
    Cat
}
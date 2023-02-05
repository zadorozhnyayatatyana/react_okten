const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>dispatch({type:'Del_Dog', payload:id})}>Delete</button>
        </div>
    );
};

export {
    Dog
}
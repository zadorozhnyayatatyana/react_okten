const Todo = ({todo}) => {
   const {userId, id, title, completed} = todo

    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export {
    Todo
}
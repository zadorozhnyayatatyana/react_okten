const User = ({user, setUserPosts}) => {
    console.log(user)
    const {id, name} = user
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>setUserPosts(user)}>Posts</button>
        </div>
    )
}

export {User}
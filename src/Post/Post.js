const Post = ({post}) => {
    const {userId, id, title, body} = post

    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    )
}

export {Post}
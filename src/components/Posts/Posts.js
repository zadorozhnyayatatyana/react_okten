import {Component} from "react";

import {Post} from "../Post/Post";
import {postService} from "../../services";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }
    componentDidMount() {
        postService.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
}
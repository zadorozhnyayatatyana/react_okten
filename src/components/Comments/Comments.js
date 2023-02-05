import {Component} from "react";

import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentService.getAll().then(({data})=>this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {
    Comments
}
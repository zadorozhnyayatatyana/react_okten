import {User} from "../User/User";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserPosts} from "../UserPosts/UserPosts";

const Users = () => {
   const [users, setUsers] = useState([]);
   const [userPosts, setUserPosts] = useState(null);

   useEffect(()=>{
       userService.getAll().then(value => value.data).then(value => setUsers([...value]))
   },[]);


    return (
        <div>
            <h1>Users</h1>

            {users.map(user => <User key={user.id} user={user} setUserPosts={setUserPosts}/>)}

            <hr/>
            <h1>Posts</h1>
            {userPosts && <UserPosts user={userPosts}/>}

        </div>
    )
}

export {Users}
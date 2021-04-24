import React, {  useContext } from 'react'
import { Loading } from './Loading'
import User from './User'
import GithubContext from "../context/GithubContext"

const Users = () => {

    const githubContext = useContext(GithubContext)
    const {users,loading} = githubContext
    


        if (loading) {
            return <Loading />
        }
        else {
            return (
                <div className="row">
                    {
                        users.map(user => (
                            <User user={user} key={user.id} />
                        ))
                    }
                </div>
            )
        }
    


}






// if(this.props.loading){
//     return <Loading />
// }

// else{
//     return (
//         <div className="row justify-content-around">
//             {

//                 "users"
//                 // this.props.users.map(user=>(
//                 //     <User user={user} key={user.id} />
//                 // ))
//             }
//         </div>
//     )
// }

export default Users

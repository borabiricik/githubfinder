import React, { Component } from 'react'
import { Loading } from './Loading'
import User from './User'

class Users extends Component {
    state = {
        users: this.props.users
    }

    
    render()
    {
        if(this.props.loading){
        return <Loading />
    }

    else{
        return (
            <div className="row">
                {
                    this.props.users.map(user=>(
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





}

export default Users

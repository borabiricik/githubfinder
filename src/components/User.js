import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

export class User extends Component {



    render() {
        const { avatar_url, login } = this.props.user
        return (
            <span className="col-12 col-md-5 col-lg-3 px-3" >
                <Card className=" p-0 mb-2" >
                    <Card.Img src={avatar_url} />
                    <Card.Body className="px-3" >
                        <Card.Text>
                            <b>
                                {login}
                            </b>
                        </Card.Text>

                        <NavLink className="btn btn-primary btn-block" to={`users/${login}`}>
                            Profile Git
                        </NavLink>

                    </Card.Body>



                </Card>
            </span>

        )
    }
}

export default User

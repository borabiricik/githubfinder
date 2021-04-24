import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export class User extends Component {



    render() {
        const { avatar_url, login, html_url } = this.props.user
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

                        <Button
                            href={html_url}
                            variant="primary"
                            className="btn-block">
                            Profile Git
                         </Button>
                    </Card.Body>



                </Card>
            </span>

        )
    }
}

export default User

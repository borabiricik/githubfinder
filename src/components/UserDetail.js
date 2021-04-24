import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Loading } from './Loading';
import { faMapMarkedAlt, faBookOpen } from "@fortawesome/free-solid-svg-icons"

export class UserDetail extends Component {



    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getRepos(this.props.match.params.login)
    }



    render() {

        

        if (this.props.loading) {
            return <Loading />
        }

        else {
            return (
                <>
                    <Card className="col-md-4 p-0">
                        <Card.Header>
                            <h3>Bora Biricik - borabiricik</h3>
                        </Card.Header>

                        {/* <Card.Img src={user.avatar_url} /> */}

                        <Card.Body>

                            <Card.Text className="d-inline-block">
                                <FontAwesomeIcon className="d-inline" icon={faMapMarkedAlt} />
                                {
                                    // user.location
                                    //     ? <span className="ml-3">Turkey</span>
                                    //     : 
                                    <span>Lokasyon Bilgisine Ulaşılamadı</span>
                                }
                            </Card.Text>

                            <Card.Text>
                                <FontAwesomeIcon icon={faBookOpen} />
                                {
                                    // user.bio
                                    //     ? <span className="ml-3">Bio</span>
                                    //     : 
                                    <span>Biyografi Bilgisine Ulaşılamadı</span>
                                }
                            </Card.Text>

                            <Button
                                className="d-block mx-auto text-center"
                                href="!#"
                                target="_blank" >
                                Github Profiline Git
                            </Button>


                        </Card.Body>
                    </Card>
                    <Card className="col-md-5">
                        {

                            "repos"
                            // repos.map((repo)=>{
                            //     return(
                            //         <div key={repo.id}>
                            //             <p>{repo.name}</p>
                            //             <p>{repo.id}</p>
                            //         </div>
                            //     )
                            // })
                        }
                    </Card>
                
                </>
            )
        }


    }
}

export default UserDetail

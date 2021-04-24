import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Loading } from './Loading';
import { faMapMarkedAlt, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import GithubContext from '../context/GithubContext';

const UserDetail = ({match}) => {

    const {getUser,getRepos,loading,user,repos} = useContext(GithubContext)


    useEffect(() => {
        getUser(match.params.login)
        getRepos(match.params.login)
    }, [])



    const { avatar_url,
        location,
        bio,
        name,
        login,
        html_url,
    } = user;




    if (loading) {
        return <Loading />
    }

    else {
        return (
            <div className="row justify-content-between">
                <Card className="col-md-5 p-0">
                    <Card.Header>
                        <h3>{name} - {login}</h3>
                    </Card.Header>

                    <Card.Img variant="top" src={avatar_url} />

                    <Card.Body>

                        <Card.Text className="d-inline-block">
                            <FontAwesomeIcon className="d-inline" icon={faMapMarkedAlt} />
                            {
                                location
                                    ? <span className="ml-3">{location}</span>
                                    : <span>Lokasyon Bilgisine Ulaşılamadı</span>
                            }
                        </Card.Text>

                        <Card.Text>
                            <FontAwesomeIcon icon={faBookOpen} />
                            {
                                bio
                                    ? <span className="ml-3">{bio}</span>
                                    : <span>Biyografi Bilgisine Ulaşılamadı</span>
                            }
                        </Card.Text>

                        <Button
                            className="d-block mx-auto text-center"
                            href={html_url}
                            target="_blank" >
                            Github Profiline Git
                            </Button>


                    </Card.Body>
                </Card>
                <Card className="col-md-6 p-0">
                    <Card.Header>
                        <Card.Title>
                            Kullanıcı Repoları
                                    </Card.Title>
                    </Card.Header>
                    <Card.Body className="px-3" >
                        <Card.Text className="d-block" >
                            {
                                repos.map((repo)=>(
                                    <Card.Link
                                        key={repo.id}
                                        target="_blank"
                                        href={repo.html_url}
                                        className="d-block m-0 mb-2 text-primary"
                                    >
                                        {repo.name}
                                    </Card.Link>
                                ))
                                
                            }
                        </Card.Text>

                    </Card.Body>


                </Card>

            </div>
        )
    }



}

export default UserDetail

import React, { Component } from 'react'
import { Container, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from 'react-router-dom'




export class customNavbar extends Component {
    render() {
        return (

            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand >
                            <NavLink to="/" className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faGithub} style={{ "fontSize": "2rem" }} />  {"GitHub Finder"}
                                
                            </NavLink>
                        </Navbar.Brand>

                        <Navbar.Collapse className="d-flex justify-content-end">
                            

                                    <NavLink  className="text-white nav-link" activeClassName="active" exact to="/">
                                        Home
                                    </NavLink>


                                    <NavLink  className="text-white nav-link" activeClassName="active" exact to="/about">
                                        About
                                    </NavLink>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default customNavbar;

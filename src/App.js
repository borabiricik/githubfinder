import React, { useState } from 'react'
import Navbar from './components/customNavbar';
import { Container } from 'react-bootstrap';
import Users from './components/Users';

import Search from './components/Search';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About"
import UserDetail from "./components/UserDetail"
import GithubState from "./context/GithubState"




const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <header className="">
          <Navbar title="GitHub Finder" />
        </header>

        <Container className="pt-5">
          <Switch>
            <Route exact path="/">
              <Search/>
              <Users />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route
              path="/users/:login"
              component={UserDetail}

            />


          </Switch>
        </Container>
      </BrowserRouter>
    </GithubState>
  )





}

export default App




import React, { Component } from 'react'
import Navbar from './components/customNavbar';
import { Container } from 'react-bootstrap';
import Users from './components/Users';
import axios from "axios"
import Search from './components/Search';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About"
import UserDetail from "./components/UserDetail"


const alert = withReactContent(Swal)

class App extends Component {

  state={
    users:[],
    loading:false
  }

  searchUsers = (keyword) => {
    this.setState({
      loading:true
    })
  
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(response => {
  
        if (response.data.items.length === 0) {
          alert.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Böyle bir kullanıcı bulunamadı',
          })
  
          this.setState({
            loading:false
          })
        }
  
  
        else {
         
         this.setState({
          users: response.data.items,
          loading:false
         })
         
        }
  
  
      });
  
  }


  render(){
    return (
      <BrowserRouter>
        <header className="">
          <Navbar title="GitHub Finder" />
        </header>

        <Container className="pt-5">
          <Switch>
            <Route exact path="/">
              <Search searchUsers={this.searchUsers} />
              <Users users={this.state.users}  />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route
              path="/user/:login"
              render={props => (
                <UserDetail
                  {...props}

                />
              )}

            />


          </Switch>
        </Container>
      </BrowserRouter>
    )
  }

  
    
  
}

export default App




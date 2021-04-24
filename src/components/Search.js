import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const alert = withReactContent(Swal)

export class Search extends Component {

    

    state = {
        filter: ""
    }

    _searchFilter = (e) => {


        this.setState({
            filter: e.target.value
        })

        
    }

    _onSearchSubmit = (e) => {
        e.preventDefault();

        if(this.state.filter === "")
        {
            alert.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Arama kutucuğu boş olamaz',
              })
        }

        else{
            this.props.searchUsers(this.state.filter);
        }
    }


    render() {
        return (
            <div className="mb-5">
                <form onSubmit={this._onSearchSubmit}>


                    <InputGroup className="d-flex col-12 col-md-5 mx-auto">
                        <FormControl
                            placeholder="Search"
                            onChange={this._searchFilter}
                        />

                        <Button type="submit" >
                            Ara
                        </Button>
                    </InputGroup>
                </form>



            </div>
        )
    }
}

export default Search

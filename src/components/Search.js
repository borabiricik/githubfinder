import React, { useContext, useState } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import GithubContext from '../context/GithubContext'

const alert = withReactContent(Swal)

const Search = () => {

    const githubContext = useContext(GithubContext)

    const [keyword, setKeyword] = useState("")

    const _searchFilter = (e) => {
        setKeyword(e.target.value);
    }

    const _onSearchSubmit = (e) => {
        e.preventDefault();

        if (keyword === "") {
            alert.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Arama kutucuğu boş olamaz',
            })
        }

        else {
            githubContext.searchUsers(keyword)
        }
    }

    return (
        <div className="mb-5">
            <form onSubmit={_onSearchSubmit}>


                <InputGroup className="d-flex col-12 col-md-5 mx-auto">
                    <FormControl
                        placeholder="Search"
                        onChange={_searchFilter}
                    />

                    <Button type="submit" >
                        Ara
                        </Button>
                </InputGroup>
            </form>



        </div>
    )

}

export default Search

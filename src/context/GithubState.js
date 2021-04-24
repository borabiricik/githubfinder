import React, { useReducer } from "react"
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer"
import axios from "axios"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

const alert = withReactContent(Swal)

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = (keyword) => {
        setLoading()

        axios.get(`https://api.github.com/search/users?q=${keyword}`)
            .then(response => {
                if (response.data.items.length === 0) {
                    alert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Böyle bir kullanıcı bulunamadı',
                    })
                }
                else {
                    dispatch({
                        type: "SEARCH_USERS",
                        payload: response.data.items
                    })
                }
            });

    }

    const getUser = (userLogin) => {
        axios.get(`https://api.github.com/users/${userLogin}`)
            .then((response) => {
                dispatch(
                    {
                        type: "GET_USER",
                        payload: response.data
                    }
                )
            })
    }

    const getRepos = (userLogin) => {
        setLoading(true)
        axios.get(`https://api.github.com/users/${userLogin}/repos`)
            .then((response) => {

                dispatch(
                    {
                        type: "GET_REPOS",
                        payload:response.data
                    }
                )


            })
    }

    const setLoading = () => {
        dispatch({ type: "SET_LOADING" })
    }


    return <GithubContext.Provider
        value={{
            users: state.users,
            repos: state.repos,
            user: state.user,
            loading: state.loading,
            searchUsers,
            getUser,
            getRepos
        }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState
import axios from 'axios'
const api = 'https://api-hithitbaam.herokuapp.com'

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${api}/users/login`, data)
    }
}

export const register = (data) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${api}/users`, data)
    }
}

export const logout = (iduser) => {
    return {
        type: 'LOGOUT_USER',
        payload: axios.patch(`${api}/users/logout/${iduser}`)
    }
}
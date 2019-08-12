import { AsyncStorage as storage } from 'react-native'

const initialState = {
    userList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

export default user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGIN_USER_FULFILLED':
            const token = action.payload.data.result.token
            const iduser = action.payload.data.result.iduser.toString()
            const fullname = action.payload.data.result.fullname
            const image = action.payload.data.result.image
            const username = action.payload.data.result.username
            storage.setItem('token', token)
            storage.setItem('iduser', iduser)
            storage.setItem('fullname', fullname)
            storage.setItem('image', image)
            storage.setItem('username', username)
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                userList: action.payload.data.result
            }
        case 'LOGOUT_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'LOGOUT_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGOUT_USER_FULFILLED':
            storage.clear()
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                userList: action.payload.data.result
            }
        default:
            return state
    }
}
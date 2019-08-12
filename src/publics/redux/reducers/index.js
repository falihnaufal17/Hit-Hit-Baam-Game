import { combineReducers } from 'redux'

import user from '../reducers/user'

const appReducer = combineReducers({
    user
})

export default appReducer
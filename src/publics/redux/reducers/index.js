import { combineReducers } from 'redux'

import user from '../reducers/user'
import leaderboard from '../reducers/leaderboard'

const appReducer = combineReducers({
    user,
    leaderboard
})

export default appReducer
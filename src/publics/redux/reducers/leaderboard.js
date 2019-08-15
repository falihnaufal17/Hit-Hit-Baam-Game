const initialState = {
    leaderboardList: [],
    usersList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

export default leaderboard = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LEADERBOARDS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_LEADERBOARDS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_LEADERBOARDS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                leaderboardList: action.payload.data.result
            }
            case 'ADD_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'ADD_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'ADD_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                leaderboardList: [state.leaderboardList, action.payload.data[0]]
            }
        case 'UPDATE_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'UPDATE_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'UPDATE_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                leaderboardList: [state.leaderboardList, action.payload.data[0]]
            }
        case 'GET_SCOREID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_SCOREID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_SCOREID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                usersList: action.payload.data.result
            };
        default:
            return state
    }
}
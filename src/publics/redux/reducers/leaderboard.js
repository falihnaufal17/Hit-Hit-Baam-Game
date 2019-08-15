const initialState = {
    leaderboardList: [],
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
        default:
            return state
    }
}
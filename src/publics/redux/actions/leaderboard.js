import axios from 'axios'
const api = 'https://api-hithitbaam.herokuapp.com'

export const getLeaderBoard = () => {
    return {
        type: 'GET_LEADERBOARDS',
        payload: axios.get(`${api}/scores`)
    }
}

export const addScore = (data) => {
    return {
        type: 'ADD_SCORE',
        payload: axios.post(`${api}/scores`, data)
    }
}

export const getScoreId = (iduser) => {
    return {
        type: 'GET_SCOREID',
        payload: axios.get(`${api}/scores/${Number(iduser)}`)
    }
}

export const updateScore = (iduser, data) => {
    console.log(data)
    return {
        type: 'UPDATE_SCORE',
        payload: axios.patch(`${api}/scores/${iduser}`, data)
    };
};
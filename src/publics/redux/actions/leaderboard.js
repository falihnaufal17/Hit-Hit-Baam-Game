import axios from 'axios'
const api = 'http://192.168.100.70:9000'

export const getLeaderBoard = () => {
    return {
        type: 'GET_LEADERBOARDS',
        payload: axios.get(`${api}/scores`)
    }
}
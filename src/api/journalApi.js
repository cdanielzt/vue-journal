import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-21684-default-rtdb.firebaseio.com',
})

export default journalApi
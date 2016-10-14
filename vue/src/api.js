import axios from 'axios'

const API_PATH = 'http://localhost:3333'

export const getPosts = id => axios.get(API_PATH + '/posts', { params: {
  user_id: id
}})

export const getUsers = () => axios.get(API_PATH + '/users')

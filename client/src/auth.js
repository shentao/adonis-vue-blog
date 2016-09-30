import { router } from './main'
import axios from 'axios'

// URL and endpoint constants
const LOGIN_USER_URL = 'http://localhost:3333/login'

// Session related constants
const SESSION_KEY = 'sessionData'
const TOKEN_TYPE = 'Bearer '

export let currentUser = null

function setToken (sessionData) {
  localStorage.setItem(SESSION_KEY, sessionData)
}

function removeToken () {
  localStorage.removeItem(SESSION_KEY)
}

export const loginUser = (credentials) => {
  axios.post(LOGIN_USER_URL, credentials)
    .then((response) => {
      authUser(response.data)
    })
    .catch((error) => {
      console.log('Login error: ', error)
    })
}

export const authUser = (sessionData) => {
  setToken(JSON.stringify(sessionData))
  axios.defaults.headers.common['Authorization'] = TOKEN_TYPE + sessionData.token
  currentUser = sessionData.user

  router.push('/home')
}

export const logout = () => {
  removeToken()
  axios.defaults.headers.common['Authorization'] = ''
  currentUser = null
}

export const checkAuth = () => {
  const sessionData = localStorage.getItem(SESSION_KEY)

  if (sessionData && sessionData !== 'null') {
    currentUser = JSON.parse(sessionData).user
    return TOKEN_TYPE + JSON.parse(sessionData).token
  }
}

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://app-creater-user-backend.herokuapp.com/',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json' 
    }
  })
}
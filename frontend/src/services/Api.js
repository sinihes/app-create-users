import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://git.heroku.com/app-creater-user-backend.git',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json' 
    }
  })
}
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json' 
    }
  })
}
import Api from './Api';

export default {
  getUser(){
    return Api().get('/')
  },
  postUser(ref){
    return Api().post('/add', ref)
  },
  deleteUser(id){
    return Api().get(`/delete/${id}`)
  }
}
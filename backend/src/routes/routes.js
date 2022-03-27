const { json } = require('body-parser')
const { response } = require('express')
const express = require('express')
const route = express.Router()
const UserSchema = require('../model/userSchema')


route.get('/', (request,response)=>{
  UserSchema.find({}).then(users =>{
    response.send(users)
  })
})

route.post('/add', (request,response)=>{
  const petition = request.body
  let requestPost = {
    name: petition.name,
    sex: petition.sex,
    occupation: petition.occupation,
    randomNumber: petition.randomNumber,
    data: petition.data
  }
  UserSchema.create(requestPost, function (err, results){
    if (err) return handleError(err)
    response.redirect('/')
  });

})


route.get('/delete/:id',(request , response) =>{
  const  id   = request.params.id;
  UserSchema.deleteOne({ _id : id }, (err, task) =>{
    if(err) throw err;
    response.redirect('/')
})
})


module.exports = route
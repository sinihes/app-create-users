require('dotenv').config()
const mongoose = require('mongoose')
const mongoDB = process.env.URI_DB

mongoose.connect(mongoDB).then(() => {
  console.log('connectDB: success')
}).catch(err => {
  console.log('connectDB: error')
  throw err // <-- this is the important bit
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDb connection error:'))
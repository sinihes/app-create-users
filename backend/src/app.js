require('dotenv').config()
require('./db/connect')
const express = require('express')
const route = require('./routes/routes')
const cors = require('cors')

const app = express();
app.use(express.json());

/* utilidades */
app.use(cors())
app.use('/', route)


/* settings */
const PORT = process.env.PORT || 8080





app.listen(PORT)
console.log('puerto en local host')
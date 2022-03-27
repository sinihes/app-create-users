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
app.set('port', process.env.PORT || 3002)





app.listen(app.get('port'))
console.log('puerto en local host')
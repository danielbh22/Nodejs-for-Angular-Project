const express = require('express');
var cors = require('cors')
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json());

require('./configs/database');

app.use(cors());

const usersController = require('./controllers/usersController');



app.use('/api/users', usersController);


app.listen(8000);
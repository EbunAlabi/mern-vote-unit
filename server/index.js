require('dotenv').config();

//create server
const express = require ('express');
const app = express();
//import cors and body parser
const cors = require ('cors');
const bodyParser = require ('body-parser');


//import database
const db = require('./models');
//use cors and body parser
app.use(cors());
app.use(bodyParser.json());

//anything below 1000 is used by computer
const port = process.env.PORT;
//start server
app.get('/', (req,res)=>res.json({hello: 'Ebz'}));


//import error handlder
const handle = require('./handlers');

//create error handler
app.use(handle.notFound);
 
app.use(handle.errors);


app.listen(port, console.log(`Server started on port ${port}`));

//create server
const express = require ('express');
const app = express();
//anything below 1000 is used by computer
const port = 4000;
//start server
app.get('/', (req,res)=>res.json({hello: 'Ebz'}));


//import error handlder
const handle = require('./handlers');

//create error handler
app.use(handle.notFound);
 
app.use(handle.errors);


app.listen(port, console.log(`Server started on port ${port}`));

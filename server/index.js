//create server
const express = require ('express');
const app = express();
//anything below 1000 is used by computer
const port = 4000;
//start server
app.get('/', (req,res)=>res.json({hello: 'Ebz'}));

//create error handler
app.use((req,res,next)=>{
const err = new Error('Not Found');
err.status = 404;
next(err);
});
 
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        err: err.message || 'Something is wrong ebz'
    });
});


app.listen(port, console.log(`Server started on port ${port}`));

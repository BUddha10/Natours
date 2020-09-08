const express = require('express');
const morgan = require('morgan');

//importing modules
const tourRouter = require('./Router/tourRouter');
const userRouter = require('./Router/userRouter');

const app = express();

//middlewares
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use((req, res, next)=>{
    console.log("hello form the middleware ");
    next();
});

//serving static file
app.use(express.static(`${__dirname}/public`));


//router
app.use('/app/v1/tours', tourRouter);
app.use('/app/v1/users', userRouter);


//exporting
module.exports = app;


require('dotenv').config({path : './database/dbConfig.env'})

const express = require('express');
const app = express();
const boradRouter = require('./router/Board_router.js');


//미들웨어
// application/x-form-urlencoded
app.use(express.urlencoded({extended : false}));
//application / json
app.use(express.json());

app.listen(3000,()=>{
  console.log('server start');
  console.log('http://localhost:3000');
})

//라우팅
app.get('/', (req,res)=>{
  res.send('WelCome!!');
})

app.use('/', boradRouter);

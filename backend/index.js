const express = require('express')
const app = express()
const port = 5000

const mongoDB = require('./db');

mongoDB();






app.get('/', async(req, res) => {
  res.send('Hello World!')
})

//middleWare
//for handling CORS

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','https:localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-with,Content-Type,Accept"
  )
  next();
});


app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));

app.use('/api',require("./Routes/LoginUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
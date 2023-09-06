const express = require('express');
const app = express();

// display html data on web page
app.get('/',(req,res)=>{
   res.send("<h1>Hello This is Home Page</h1>")
});

//req -> req.query (req) will come from frontend.
app.get('/about',(req,res)=>{
   console.log("About", req.query.name)
   res.send("Welcome to About Page,"+ req.query.name)
})

// display input data on web page
app.get('/help',(req,res)=>{
res.send("<input type='text' placeholder ='username'/>")
})

// display json data on web page
app.get('/details',(req,res)=>{
   res.send({
      name:'Pavan',
      email:'Pavan@gmail.com'
   })
   })

app.listen(4000,()=>{
   console.log("server is running")
})
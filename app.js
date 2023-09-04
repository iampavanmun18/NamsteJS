const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Pavan', 'email':'pavan@gmail.com'}))
    res.end();
}).listen(8080)

// https://www.w3schools.com/nodejs/nodejs_http.asp

// Response 200 - OK (while doing GET request)
//          201 - Created (while doing POST request)
//          500 - Internal Server error
//          404 - Page not found

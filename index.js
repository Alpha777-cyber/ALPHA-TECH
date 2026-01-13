const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome')
    }  
})

server.listen(5000);
console.log('Node js is running at port http\\:localhost:5000 ....')
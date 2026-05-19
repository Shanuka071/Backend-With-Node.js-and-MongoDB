//Import a module.
let http=require('http');
//create a server 
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('Thank you');
}).listen(8080);
console.log('Server is running at http://Localhost:8080');
var http = require('http');
var serv = http.createServer(function (req,res){
    res.writeHead(200,{'content-Type' : 'text/html'});
    res.end('<marquee>smashing node!</marquee>');
});
serv.listen(3000);
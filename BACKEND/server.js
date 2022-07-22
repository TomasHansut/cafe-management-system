require('dotenv').config({ override: true })
const http = require('http');
const app = require('./index')
const server = http.createServer(app);

server.listen(process.env.PORT,(err) => {
    if(!err){
        console.log("Connected on localhost port: " + process.env.PORT);
    }
    else{
        console.log(err);
    }
})
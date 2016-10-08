var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var io = require('socket.io')(8001);
var server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static('public'));

server.listen(8000,function(err){ console.log("listening on 8000") });

app.get('/',function(req,res) { res.sendFile(__dirname+"/index.html") });

app.post("/api",function(req,res) {
    console.log(req.body.data);
	if (req.body.intensity){
	io.emit('intensity',{ data: req.body.intensity} )	
	} else if (req.body.temprature) {
	io.emit('temprature',{ data: req.body.temprature });	
	}
	 
    

    res.end("received");
});



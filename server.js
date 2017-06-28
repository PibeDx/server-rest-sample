var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
	var message = 
		[
	   		{
	   			name:'Juan', 
	   			Class:'User', 
	   			lastname:'Perez', 
	   			Meta:'{"relationRemovalIds":{},"selectedProperties":["name","___class","objectId","lastname"],"relatedObjects":{}}'}, 
   			{
   				name:'Carlos', 
   				Class:'User', 
   				lastname:'Quispe', 
   				Meta:'{"relationRemovalIds":{},"selectedProperties":["name","___class","objectId","lastname"],"relatedObjects":{}}'
   			}
		]

	setTimeout(function () {
			console.log('boo')
			res.setHeader('Content-Type', 'application/json');
			//{ message: 'Ok' }
			res.send(JSON.stringify(message));
		}, 5000)
	
   
   
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});

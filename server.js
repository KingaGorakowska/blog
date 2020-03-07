//import moduls to our server
let express = require("express");
let bodyParser = require("body-parser");

//create server app object from module express  
let app = express();

//defining methods, which will server use 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//starting the template engine for module ejs
app.set("view engine", "ejs");

//start server in 8080 localhost
app.listen(8080);
console.log("Server success start in 8080 localhost");

app.get("/", function(req, res){
	
	res.render("index", {name:"wordName :)"});
	
	
});
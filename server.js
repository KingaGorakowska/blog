//import moduls to our server
let express = require("express");
let bodyParser = require("body-parser");

//create server app object from module express  
let app = express();

//defining methods, which will server use 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//table with post list - object (literal)
let posts = [];

//starting the template engine for module ejs
app.set("view engine", "ejs");

//defining of server paths
app.use(express.static(__dirname + '/'));

//start server in 8080 localhost
app.listen(8080);
console.log("Server success start in 8080 localhost");

app.get("/", function(req, res){
	res.render("index", {posts:posts});
});

app.get("/insertPost", function(req, res){
	res.render("insertPost");	
});

app.post("/insertPost", function(req, res){
	let obj = {
		title: req.body['title'],
		description: req.body['description']
	}
	
	posts.push(obj);
	res.render("index", {posts:posts});
});

app.get("/details/:id", function(req, res){
	let id = req.params.id;
	res.render("details", {post:posts[id]});
});

app.get("/delete/:id", function(req, res){
	let id = req.params.id;
	posts.splice(id, 1);
	
	res.render("index", {posts:posts});
});

app.get("/editPost/:id", function(req, res){
	
	let id = req.params.id;
	res.render("editPost", {post:posts[id], id:id});	
});

app.post("/editPost/:id", function(req, res){
	let id = req.params.id;
	
	let obj = {
		title: req.body['title'],
		description: req.body['description']
	}
	
	posts[id] = obj;
	res.render("index", {posts:posts});
});

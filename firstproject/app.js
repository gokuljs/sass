var express = require("express"),
    app = express();

//app config 
app.use(express.static(__dirname + '/public'));
console.log(__dirname) // gives the dir name which the project is currently working on 
app.set('view engine', 'ejs');
// in package.json scripts is the place which is used to write our own scripts 

// routes
app.get("/", function(req, res) {
    // res.send("welcome to home page")
    res.render("home")
})

app.listen(3000, function() {
    console.log("server has started")
})
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Tells node that we are creating an "express" server 
var app = express();

var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app/public')));


// ROUTER
// The routes give our server a "map" of how to respond when users visit or request data from various URLs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
    
})
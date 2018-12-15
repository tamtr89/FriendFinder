// DEPENDENCIES
// We need to include the path package to get correct file path for our html
var path = require("path");

// ROUTING
module.exports = function(app){
    // HTML GET requests
    // Below code handles when users "visit" a page

    // Survey page
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to HOME
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
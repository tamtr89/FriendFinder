var friends = require("../data/friends");

module.exports = function(app){
    // API GET requests
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    // User submits a survey form and it submits data to the server
    
}
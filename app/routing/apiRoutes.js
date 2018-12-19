// var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../data/friends");

module.exports = function (app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        console.log("GETTING FRIENDS")
        res.json(friends);
    })

    // User submits a survey form and it submits data to the server

    app.post("api/friends", function(req, res){
        var newFriend = req.body;
        var scores = newFriend.score;

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);
        
        friends.push(newFriend);
        res.json(newFriend);
        

    })
}
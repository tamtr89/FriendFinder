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
    app.post("/api/friends", function (req, res) {
        console.log("TESTING POST");
        
        // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference
        // Compare those results against every user in the database.
        // 
        var bestMatch = {
            name: "",
            photo: "",
            matchDifference: 1000
        };

        // The results of the user's survey POST and parse it
        var newFriends = req.body;
        var userScores = newFriends.scores;
        
        var totalDifference = 0;

        // Here we loop through all the friend possibilities in the database.
        for (var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            
        
           
        }
    })
}
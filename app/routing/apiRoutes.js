
var friends = require("../data/friends");
var path = require("path");


module.exports = function (app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        console.log("GETTING FRIENDS")
        res.json(friends);
    })

    // User submits a survey form and it submits data to the server

    app.post("/api/friends", function (req, res) {

        // Get user input data
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        var userData = req.body;
        console.log("NEW FRIEND", userData);
        console.log("----------------------------------------------------------");

        var newScores = userData.score;
        console.log("\n newSCOREs is: ", newScores);

        userData.routeName = userData.name.replace(/\s+/g, "").toLowerCase();
        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length; i++) {
            // console.log("Friends[i]", friends[i]); 
            totalDifference = 0;
            //Grab newScores from user, loop over all the scores 
            for (var j = 0; j < friends[i].scores[j]; j++) {
                //Calculate the difference between the scores and sum them into the totalDifference 
                totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].scores[j]));
                // console.log("\n new score[j]:******" + newScores[j]);
                // console.log("\n Friend[i].scores[j]: ----------------------" + friends[i].scores[j]);
                // console.log("\n Total Difference: ===============" + totalDifference);

                // If the sum of differences is < the differences of the current bestMatch
                if (totalDifference <= bestMatch.friendDiff) {
                    // console.log("\n BESTMATCH(friendDiff): " + bestMatch.friendDiff);

                    // Reset the bestMatch to be the new Friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDiff = totalDifference;

                } else  {
                    console.log("NO MATCH");
                }

            }
        }
        // In each of the below cases, when a user submits form data (a JSON object)
        // ...the JSON is pushed to the appropriate JavaScript array
        // Then the server saves the data to the friendData array)
        friends.push(userData);
        // return a JSON with the user's bestMatch
        res.json(bestMatch);
        // console.log(bestMatch);

    });
}
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {allow_single_deselect: true},
    ".chosen-select-no-single": {disable_search_threshold: 10},
    ".chosen-select-no-results": {no_results_text: "Sorry!!! Nothing found..."},
    ".chosen-select-width": {width: "95%"}
};

// for (var seletor in config){
//     $(selector).chosen(config[selector]);
// }

// Capture from inputs
$("#submit").on("click", function(event){
    console.log("SUBMIT")
    event.preventDefault();

    // Form Validation
    // function validateForm() {
    //     var isValid = true;
    //     $(".form-control").each(function(){
    //         if($(this).val() === ""){
    //             isValid = false;
    //         }
    //     });

    //     $(".chosen-select").each(function(){
    //         if($(this).val() === ""){
    //             isValid = false;
    //         }
    //     });
    //     return isValid;
    // }

    // // If all required fields are filled

    // if (validateForm()){
    //     var userData = {
    //         name: $("#yourname").val(),
    //         photo: $("#yourphoto").val(),
    //         score: [
    //             $("#q1").val(),
    //             $("#q2").val(),
    //             $("#q3").val(),
    //             $("#q4").val(),
    //             $("#q5").val(),
    //             $("#q6").val(),
    //             $("#q7").val(),
    //             $("#q8").val(),
    //             $("#q9").val(),
    //             $("#q10").val()
    //         ]
    //     };

        // Grab the URL of the website
        // var currentURL = window.location.origin;

        // AJAX post the data to the friends API.
        $.post("/api/friends", {"name": "Christina"}, function(data){

            console.log("DATA: ", data);
            
        })
    // }
})
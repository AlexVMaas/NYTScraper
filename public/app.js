// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p >" + data[i].title + "<br />" 
    + data[i].link + " <button data-id='" + data[i]._id + "'class='save btn btn-danger'>SAVE</button></p>");

  }
});


// Whenever someone clicks a p tag
$(document).on("click", "button", function() {
  // Empty the notes from the note section
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/saved/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);

    });
});


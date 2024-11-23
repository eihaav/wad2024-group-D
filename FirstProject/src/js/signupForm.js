// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// Hide the box.
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}



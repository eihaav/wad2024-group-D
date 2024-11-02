// When the user clicks this button, a dropdown window is created
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown_button')) {
      var dropdowns = document.getElementsByClassName("dropdown_content");
      var i;
        for (i = 0; i < dropdowns.length; i++) { // closes dropdowns
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}
var myInput = document.getElementById("password");

var minmax = document.getElementById("validation_minmax");
var capital = document.getElementById("validation_capital");
var letter = document.getElementById("validation_letter");
var number = document.getElementById("validation_number");
var startswith = document.getElementById("validation_starts");
var specialchar = document.getElementById("validation_special");

var isminmax = false;
var iscapital = false;
var isletter = false;
var isnumber = false;
var isstartswith = false;
var isspecialshar = false; 

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("validation_message").style.display = "block";
}

// Hide the box.
myInput.onblur = function() {
    document.getElementById("validation_message").style.display = "none";
}


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // specific length
    if (myInput.value.length >= 8 && myInput.value.length < 15) {
        minmax.classList.remove("invalid");
        minmax.classList.add("valid");
      } else {
        minmax.classList.remove("valid");
        minmax.classList.add("invalid");
    }

    // has atlease one uppercase letter
    var uppercaseLetters = /[A-Z]/; // NB! Doesnt work with non english letters (ÖÄÜÕ)!
    if (uppercaseLetters.test(myInput.value)) { 
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // has atleast two lowercase letters
    var amount = 0;
    var isLowercase = false;
    for (const char of myInput.value) {
        if (char.toLowerCase() === char) {
            amount += 1;
        }
        if (amount == 2) {
            isLowercase = true;
        }
    }
    if (isLowercase) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // has a number
    var numbers = /[0-9]/;
    if (numbers.test(myInput.value)) { 
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // starts with an uppercase character
    if (uppercaseLetters.test(myInput.value[0])) { 
        startswith.classList.remove("invalid");
        startswith.classList.add("valid");
      } else {
        startswith.classList.remove("valid");
        startswith.classList.add("invalid");
    }

    // includes "_"
    if (myInput.value.includes("_")) {
        specialchar.classList.remove("invalid");
        specialchar.classList.add("valid");
      } else {
        specialchar.classList.remove("valid");
        specialchar.classList.add("invalid");
    }


}
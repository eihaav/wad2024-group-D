document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let message = document.getElementById('message');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    let passwordValid = validatePassword(password);
    if (!passwordValid) {
        passwordError.textContent = 'Password does not meet the requirements.';
        return;
    } else {
        passwordError.textContent = '';
    }

    // Here you can add code to send the form data to the server

    message.style.color = 'green';
    message.textContent = 'Signup successful!';
});


function validatePassword(password) {
    let uppercase = /[A-Z]/g; // Does the password have uppercase, lowercase, numeric characters.
    let lowercase = /[a-z]/g; 
    let numeric = /[0-9]/g; 
    let special = '_';
    if (password.length >= 8 && password.length < 15 && password.match(uppercase) && password.match(numeric) && password[0].match(uppercase) && password.match(special)) {

        console.log("Password correct");
    }
    return password;
}

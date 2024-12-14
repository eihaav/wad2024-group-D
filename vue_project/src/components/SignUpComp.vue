<template>
    <div class="center_box" id="login_box">
        <h1>Sign Up to PostIt</h1>

        <form @submit.prevent="handleSubmit">
            <span class="formrow">Email <input type="email" placeholder="Email" name="email" required
                    v-model="email" /></span>
            <span class="formrow">Password <input type="password" placeholder="Password" name="password" id="password"
                    v-model="password" @input="validatePassword" required /></span>
            <p :class="{ 'valid': !emailExists, 'invalid': emailExists }">
                Email already exists.</p>
            <button class="bluebutton">Sign Up!</button>
        </form>
        <!-- Password validation messages-->
        <div class="validation_message">
            <span :class="{ 'valid': passwordRules.allValid, 'invalid': !passwordRules.allValid }">
                <b>Password must contain the following:</b></span>
            <p :class="{ 'valid': passwordRules.minmax, 'invalid': !passwordRules.minmax }">
                At least 8 characters and less than 15 characters</p>
            <p :class="{ 'valid': passwordRules.capital, 'invalid': !passwordRules.capital }">
                At least one capital letter</p>
            <p :class="{ 'valid': passwordRules.letter, 'invalid': !passwordRules.letter }">
                At least two lowercase letters</p>
            <p :class="{ 'valid': passwordRules.number, 'invalid': !passwordRules.number }">
                At least one numeric value</p>
            <p :class="{ 'valid': passwordRules.startswith, 'invalid': !passwordRules.startswith }">
                Starts with an uppercase letter</p>
            <p :class="{ 'valid': passwordRules.specialchar, 'invalid': !passwordRules.specialchar }">
                Contain the character "_"</p>
        </div>

        <!-- <p>Already have an account?</p>
        <a href="login.html">Log in</a> -->

    </div>
</template>
<script>
export default {
    name: "SignUpComp",
    data() {
        return {
            email: '',
            password: '', // Bound to the input field
            passwordRules: {
                minmax: true,
                capital: true,
                letter: true,
                number: true,
                startswith: true,
                specialchar: true,
                allValid: true,
            },
            emailExists: false,
        };
    },
    methods: {
        validatePassword() {
            const password = this.password;
            if (password == "" || password == null) {
                this.passwordRules.minmax = true;
                this.passwordRules.capital = true;
                this.passwordRules.letter = true;
                this.passwordRules.number = true;
                this.passwordRules.startswith = true;
                this.passwordRules.specialchar = true;
                this.passwordRules.allValid = true;
            }
            else {
                // Specific length
                this.passwordRules.minmax = password.length >= 8 && password.length < 15;

                // At least one uppercase letter
                const uppercaseLetters = /[A-ZÕÄÖÜ]/;
                this.passwordRules.capital = uppercaseLetters.test(password);

                // At least two lowercase letters
                const lowercaseCount = password.split('').filter(char => char.toLowerCase() === char && char !== char.toUpperCase()).length;
                this.passwordRules.letter = lowercaseCount >= 2;

                // At least one numeric value
                const numbers = /[0-9]/;
                this.passwordRules.number = numbers.test(password);

                // Starts with an uppercase letter
                this.passwordRules.startswith = password[0] && uppercaseLetters.test(password[0]);

                // Contains "_"
                this.passwordRules.specialchar = password.includes("_");
                if (this.passwordRules.minmax == true && this.passwordRules.capital == true && this.passwordRules.letter == true &&
                    this.passwordRules.number == true && this.passwordRules.startswith == true && this.passwordRules.specialchar == true) {
                    this.passwordRules.allValid = true;
                }
                else {
                    this.passwordRules.allValid = false;
                }
            }
        },
        handleSubmit(event) {
            if (!this.passwordRules.allValid) {
                event.preventDefault(); // Prevent submission if the form is invalid
                alert('Please fix the password requirements before signing up.');
            } else {
                this.SignUp();
            }
        },

        SignUp() {
            var data = {
                email: this.email.toLowerCase(),
                password: this.password
            };
            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.status == 409){
                        console.log("Email Already Exists")
                        this.emailExists = true;
                        return;
                    }
                    return response;
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
        },
    },
};
</script>

<style scoped>
.valid {
    display: none;
}

.invalid {
    color: red;
}

span.invalid {
    color: black;
}


#login_box {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

input {
    margin-top: 5px;
    width: 125px;
    border: none;
    border-radius: 25px;
    padding: 10px;
}

form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.formrow {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
}

.center_box {
    margin: auto;

    display: flex;
    flex-direction: column;

    width: 300px;


    background-color: rgb(209, 235, 192);
}

.bluebutton {
    background-color: rgb(52, 137, 199);
    border-radius: 0px;
    margin: 10%;
    text-align: center;
    text-decoration: none;
    color: white;
    cursor: pointer;
}

button.bluebutton {
    border: 0;
    padding: 7px;
    width: 100px;
    margin-left: 25%;
    margin-right: 25%;
    align-self: center;
    border-radius: 25px;
}
.bluebutton:hover {
    background-color: rgb(93, 173, 230);
}

h1 {
    margin: 20px;
    font-size: large;
}

h1~a {
    text-decoration: none;
    color: rgb(0, 183, 255);
}

</style>
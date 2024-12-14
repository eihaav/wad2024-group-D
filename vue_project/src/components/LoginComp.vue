<template>
    <div class="center_box" id="login_box">
        <h1>Log In to PostIt</h1>

        <form @submit.prevent="handleSubmit">
            <span class="formrow">Email <input type="email" placeholder="Email" name="email" required v-model="email" /></span>
            <span class="formrow">Password <input type="password" placeholder="Password" name="password" id="password"
                    v-model="password" @input="validatePassword" required /></span>
            <div class="buttons">
                <button @click="LogIn" class="bluebutton">Log In!</button>
                <span>or</span>
                <button @click='this.$router.push("/signup")' class="bluebutton">Sign Up!</button>
            </div>
        </form>

    </div>
</template>


<script>
export default {
    name: "LoginComp",

    data: function () {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        LogIn() {
            var data = {
                email: this.email.toLowerCase(),
                password: this.password
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    location.assign("/");
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
    white-space: nowrap;
}

button.bluebutton {
    border: 0;
    padding: 7px;
    width: 100px;
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

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.buttons span {
    align-self: center;
}
</style>
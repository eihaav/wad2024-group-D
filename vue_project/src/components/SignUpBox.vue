<template>
  <body>
    <main class="signupmain">
      <div class = "center_box" id="login_box">
        <h1>Signup to PostIt</h1>

        <form action="index.html">
          <input type="email" placeholder="Email" name="email" required>
          <input type="password" placeholder="Password" name="password" id="password" required>
          <button type="submit" class="bluebutton">Signup!</button>
        </form>

        <p>Already have an account?</p>
        <a href="login.html">Log in</a>
        
      </div>

      <!-- Password validation messages-->
      <div class="validation_message" id="validation_message">
        <b>Password must contain the following:</b>
        <p id="validation_minmax" class="invalid">At least 8 characters and less than 15 characters</p>
        <p id="validation_capital" class="invalid">At least one capital letter</p>
        <p id="validation_letter" class="invalid">At least two lowercase letters</p>
        <p id="validation_number" class="invalid">At least one numeric value</p>
        <p id="validation_starts" class="invalid">Starts with an uppercase letter</p>
        <p id="validation_special" class="invalid">Contain the character "_"</p>
      </div>
      
    </main>
  </body>
</template>
  


<script>
export default {
  name: 'SignUpBox',
};
</script>
  
<style scoped>
.signupmain {
    display: block;

}

.validation_message {
    display:none;
    padding: 20px;
    margin-top: 10px;

    margin: auto;
    width: 300px;
    text-align: center;
    font-size: 14px;
}

.valid {
    color: green;
}

.invalid {
    color: red;
}
</style>
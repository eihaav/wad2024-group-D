<template>
    <header>
        <nav>
            <span>Project Group D</span><br>
            <span><router-link to="/">Home</router-link>|<router-link to="/contacts">Contacts</router-link></span>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
header {
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}
nav {
    background-color: lightgray;
    border-radius: 5%;
    font-size: larger;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 500px;
}

nav a {
    padding: 5px;
    color: black;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #007bff;
}


a {
    text-decoration: none;
    color: #007bff;
}

a:not(:has(img)):hover
{
    background-color:whitesmoke;
    color: black;
}

a>img {
    height: 50px;
}
</style>
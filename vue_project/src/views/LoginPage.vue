<template>
    <Header></Header>
    <main class="loginmain">
        <LoginComp></LoginComp>
    </main>
    <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginComp from '@/components/LoginComp.vue';


export default {
    name: 'LoginPage',
    components: {
        Header,
        Footer,
        LoginComp

    }
}
</script>

<style scoped>
.loginmain {
    display: block;
    background-color: lightgray;
}
</style>
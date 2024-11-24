<template>
  <Header></Header>
  <main class="signupmain">
    <SignUpComp></SignUpComp>
  </main>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignUpComp from '@/components/SignUpComp.vue';


export default {
  name: 'SignUpPage',
  components: {
    Header,
    Footer,
    SignUpComp

  }
}
</script>

<style scoped>
.signupmain {
  display: block;
  background-color: lightgray;
}
</style>
<template>
  <Header></Header>
  <main>
    <SignUpBox></SignUpBox>
  </main>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignUpBox from '../components/SignUpBox.vue'

export default {
  name: 'SignUpPage',
  components: {
    Header, 
    Footer,
    SignUpBox
  }
}
</script>
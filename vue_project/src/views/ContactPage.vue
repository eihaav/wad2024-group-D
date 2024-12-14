<template>
    <Header></Header>
    <main>
        <div class="about">
        <h1>Our Contact Information</h1>
        <p><b>Team Members:</b></p>
        <p>Charlotte Pree<br>Erik Ivar Haav<br>Anton Otrokov</p>

        </div>
      </main>
    <Footer></Footer>
  </template>
  
  <script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue';

  export default {
    name: "AboutView",
    components: {
    Header,
    Footer
    }
  }
  </script>

  <style scoped>
  .about {
    text-align: center;
  }
</style>
  
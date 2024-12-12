<template>
    <Header></Header>
    <main>
        <div class="about">
        <h1>Our Contact Information</h1>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Business Street, City, Country</p>
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
  
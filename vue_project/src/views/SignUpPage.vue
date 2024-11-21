<template>
  <Header></Header>
  <main>
    <aside class="sidebar" id="leftSidebar"> </aside>
    
    <!-- Remove this when adding posts as components -->
    <div>Dummy Content Holder</div>
    <!-- Remove this when adding posts as components -->

    <aside class="sidebar" id="rightSidebar"> </aside>
  </main>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUpPage',
  components: {
    Header, 
    Footer
  }
}
</script>
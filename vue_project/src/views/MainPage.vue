<template>
  <Header></Header>
  <main>
    <aside class="sidebar" id="leftSidebar"> </aside>
    <Posts></Posts>
    <aside class="sidebar" id="rightSidebar"> </aside>
  </main>
  <button id="resetLikesButton" v-on:click="resetLikes">Reset Likes</button>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
    Posts
  },
  methods: {
    resetLikes: function () {
      this.$store.dispatch("ResetLikesAct")
    }
  }
}
</script>
<style scoped>
#resetLikesButton {
  background-color: #60adff;
  border-width: 0px;
  margin: 0px;
  height: 25px;
  align-self: center;
  width: fit-content;
  cursor: pointer;
}
</style>

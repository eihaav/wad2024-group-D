<template>
  <Header></Header>

  <main>
    <aside class="sidebar" id="leftSidebar"> </aside>
    <div class="content">
      <button id="logOutButton" class="bluebutton" @click="Logout">Log Out</button>
      <Posts></Posts>
      <span class="postcontrols">
      <button id="addPostButton" class="bluebutton" @click="AddPost">Add post</button>
      <button id="deleteAllPostsButton" class="bluebutton" @click="DeleteAllPosts">Delete all</button>
    </span>
    </div>
    <aside class="sidebar" id="rightSidebar"> </aside>
  </main>
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
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    AddPost(){
      this.$router.push("/addpost");
    },
    DeleteAllPosts() {
      fetch("http://localhost:3000/api/posts/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                }).then((response) => {
                    console.log(response.data);
                    this.$router.push("/");
                    location.reload(); // reloads window
                })
                .catch((e) => {
                    console.log(e);
                });
    }
  }
}
</script>
<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
.bluebutton:hover {
    background-color: rgb(93, 173, 230);
}
.bluebutton {
    background-color: rgb(52, 137, 199);
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
    border-radius: 25px;
    margin: 0px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>

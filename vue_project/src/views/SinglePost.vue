<template>
    <Header></Header>
    <div class="center_box" id="post_box">
        <span><b>A Single Post</b></span>
        <span class="formrow">
            <p>Body</p><textarea placeholder="Post Body" name="postbody" required v-model="post.body"></textarea>
        </span>
        <div class="buttons">
            <button class="bluebutton" @click="updatePost">Update Post</button>
            <button class="bluebutton" @click="deletePost">Delete Post</button>
        </div>
    </div>
    <Footer></Footer>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: "SinglePost",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            post: {
                id: "",
                title: "",
                date: ""
            },
        };
    },
    methods: {
        fetchAPost(id) {
            fetch(`http://localhost:3000/api/posts/${id}`, {
                credentials: 'include',
            })
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
        updatePost() {
            console.log(this.post);
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                credentials: "include",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deletePost() {
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                credentials: "include",
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.fetchAPost(this.$route.params.id);
    },
};
</script>

<style scoped>
#post_box {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

textarea {
    margin-top: 5px;
    min-width: 200px;
    max-width: 200px;
    border: none;
    border-radius: 25px;
    padding: 10px;
    field-sizing: content;
    max-inline-size: 200px;
}

form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.formrow {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
}

.formrow p {
    align-self: flex-start;
    margin: 13px;
}

.center_box {
    margin: auto;

    display: flex;
    flex-direction: column;

    width: 300px;


    background-color: rgb(209, 235, 192);
}

.center_box>span {
    white-space: nowrap;
    margin: 10px;
}

.bluebutton {
    background-color: rgb(52, 137, 199);
    border-radius: 0px;
    margin: 10%;
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
    margin-left: 20%;
    margin-right: 20%;
    align-self: center;
    border-radius: 25px;
}

.bluebutton:hover {
    background-color: rgb(93, 173, 230);
}

h1 {
    margin: 20px;
    font-size: large;
}

h1~a {
    text-decoration: none;
    color: rgb(0, 183, 255);
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>